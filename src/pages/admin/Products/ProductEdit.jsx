import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../api/api";
import toast from "react-hot-toast";
import AdminSidebar from "../../../components/AdminSidebar";

function ProductEdit() {
  const { id } = useParams(); // ID del producto a editar
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);

  // 🔹 Cargar producto y categorías
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resProduct = await api.get(`/products/${id}`);
        setProduct(resProduct.data);

        const resCategories = await api.get("/categories");
        setCategories(resCategories.data);
      } catch (error) {
        console.error(error);
        toast.error("Error cargando datos");
      }
    };
    fetchData();
  }, [id]);

  // 🔹 Guardar cambios
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product.name.trim() || !product.price || !product.categoryId) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      await api.put(`/products/${id}`, {
        ...product,
        id: Number(id), // 👈 ID siempre numérico
        price: Number(product.price),
        categoryId: Number(product.categoryId),
      });

      toast.success("Producto actualizado con éxito");
      navigate("/admin/products");
    } catch (error) {
      console.error(error);
      toast.error("Error al actualizar producto");
    }
  };

  if (!product) return <p className="p-6">Cargando producto...</p>;

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Editar Producto</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Nombre del producto"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="number"
            placeholder="Precio"
            value={product.price}
            onChange={(e) =>
              setProduct({ ...product, price: Number(e.target.value) })
            }
            className="w-full border p-2 rounded"
            required
          />
          <select
            value={product.categoryId}
            onChange={(e) =>
              setProduct({ ...product, categoryId: Number(e.target.value) })
            }
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Seleccione categoría</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Actualizar
          </button>
        </form>
      </main>
    </div>
  );
}

export default ProductEdit;



// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import api from "../../../api/api";
// import toast from "react-hot-toast";
// import AdminSidebar from "../../../components/AdminSidebar"; // 👈 importación agregada

// function ProductEdit() {
//   const { id } = useParams();
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [categoryId, setCategoryId] = useState("");
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productRes = await api.get(`/products/${id}`);
//         setName(productRes.data.name);
//         setPrice(productRes.data.price);
//         setCategoryId(productRes.data.categoryId);

//         const catRes = await api.get("/categories");
//         setCategories(catRes.data);
//       } catch (error) {
//         console.error(error); // 👈 agregado
//         toast.error("Error cargando datos del producto");
//       }
//     };
//     fetchData();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.put(`/products/${id}`, {
//         id,
//         name,
//         price,
//         categoryId: Number(categoryId),
//         imageUrl: "https://via.placeholder.com/150",
//       });
//       toast.success("Producto actualizado con éxito");
//       navigate("/admin/products");
//     } catch (error) {
//       console.error(error); // 👈 agregado
//       toast.error("Error al actualizar producto");
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       <AdminSidebar />
//       <main className="flex-1 p-6 bg-gray-100">
//         <h1 className="text-2xl font-bold mb-4">Editar Producto</h1>
//         <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//           <select
//             value={categoryId}
//             onChange={(e) => setCategoryId(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           >
//             <option value="">Seleccione categoría</option>
//             {categories.map((c) => (
//               <option key={c.id} value={c.id}>
//                 {c.name}
//               </option>
//             ))}
//           </select>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
//           >
//             Actualizar
//           </button>
//         </form>
//       </main>
//     </div>
//   );
// }

// export default ProductEdit;
