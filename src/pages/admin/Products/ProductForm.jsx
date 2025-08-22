import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
import toast from "react-hot-toast";
import AdminSidebar from "../../../components/AdminSidebar";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // 🔹 Cargar categorías
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories");
        setCategories(res.data);
      } catch {
        toast.error("Error cargando categorías");
      }
    };
    fetchCategories();
  }, []);

  // 🔹 Crear producto con ID numérico consecutivo
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !price || !categoryId) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      // 1️⃣ Traemos los productos para calcular el último ID
      const res = await api.get("/products");
      const products = res.data;
      const nextId =
        products.length > 0
          ? Math.max(...products.map((p) => Number(p.id))) + 1
          : 1;

      // 2️⃣ Creamos el producto con ID numérico
      await api.post("/products", {
        id: nextId, // 👈 ID consecutivo numérico
        name,
        price: Number(price),
        categoryId: Number(categoryId),
        imageUrl: "https://via.placeholder.com/150", // opcional
      });

      toast.success("Producto creado con éxito");
      navigate("/admin/products");
    } catch (error) {
      console.error(error);
      toast.error("Error al crear producto");
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Nuevo Producto</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Nombre del producto"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="number"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
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
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Guardar
          </button>
        </form>
      </main>
    </div>
  );
}

export default ProductForm;


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../../api/api";
// import toast from "react-hot-toast";
// import AdminSidebar from "../../../components/AdminSidebar"; // 👈 importación agregada

// function ProductForm() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [categoryId, setCategoryId] = useState("");
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await api.get("/categories");
//         setCategories(res.data);
//       } catch (error) {
//         console.error(error);
//         toast.error("Error cargando categorías");
//       }
//     };
//     fetchCategories();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post("/products", {
//         name,
//         price,
//         categoryId: Number(categoryId),
//         imageUrl: "https://via.placeholder.com/150",
//       });
//       toast.success("Producto creado con éxito");
//       navigate("/admin/products");
//     } catch (error) {
//       console.error(error);
//       toast.error("Error al crear producto");
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       <AdminSidebar />
//       <main className="flex-1 p-6 bg-gray-100">
//         <h1 className="text-2xl font-bold mb-4">Nuevo Producto</h1>
//         <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
//           <input
//             type="text"
//             placeholder="Nombre"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//           <input
//             type="number"
//             placeholder="Precio"
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
//             className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//           >
//             Guardar
//           </button>
//         </form>
//       </main>
//     </div>
//   );
// }

// export default ProductForm;
