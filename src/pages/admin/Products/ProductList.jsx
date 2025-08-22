import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/api";
import toast from "react-hot-toast";
import AdminSidebar from "../../../components/AdminSidebar";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // 🔹 Cargar productos y categorías
  const fetchData = async () => {
    try {
      const resProducts = await api.get("/products");
      const resCategories = await api.get("/categories");

      setProducts(resProducts.data);
      setCategories(resCategories.data);
    } catch {
      toast.error("Error cargando productos");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔹 Eliminar producto
  const deleteProduct = async (id) => {
    if (confirm("¿Seguro que deseas eliminar este producto?")) {
      try {
        await api.delete(`/products/${Number(id)}`);
        toast.success("Producto eliminado con éxito");
        fetchData();
      } catch {
        toast.error("Error eliminando producto");
      }
    }
  };

  // 🔹 Obtener nombre de categoría
  const getCategoryName = (categoryId) => {
    const category = categories.find((c) => Number(c.id) === Number(categoryId));
    return category ? category.name : "Sin categoría";
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Gestión de Productos</h1>
          <Link
            to="/admin/products/new"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Nuevo Producto
          </Link>
        </div>
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Nombre</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Categoría</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="text-center border-b">
                <td className="p-2">{p.id}</td>
                <td className="p-2">{p.name}</td>
                <td className="p-2">${p.price}</td>
                <td className="p-2">{getCategoryName(p.categoryId)}</td>
                <td className="p-2 space-x-2">
                  <Link
                    to={`/admin/products/edit/${p.id}`}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default ProductList;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../../api/api";
// import toast from "react-hot-toast";
// import AdminSidebar from "../../../components/AdminSidebar"; // 👈 importación agregada

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       const res = await api.get("/products?_expand=category");
//       setProducts(res.data);
//     } catch (error) {
//       console.error(error); // 👈 ahora usamos el error
//       toast.error("Error cargando productos");
//     }
//   };

//   const deleteProduct = async (id) => {
//     if (confirm("¿Seguro que deseas eliminar este producto?")) {
//       try {
//         await api.delete(`/products/${id}`);
//         toast.success("Producto eliminado con éxito");
//         fetchProducts();
//       } catch (error) {
//         console.error(error); // 👈 también aquí
//         toast.error("Error eliminando producto");
//       }
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="flex min-h-screen">
//       <AdminSidebar />
//       <main className="flex-1 p-6 bg-gray-100">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">Gestión de Productos</h1>
//           <Link
//             to="/admin/products/new"
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Nuevo Producto
//           </Link>
//         </div>
//         <table className="w-full bg-white shadow rounded">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="p-2">ID</th>
//               <th className="p-2">Nombre</th>
//               <th className="p-2">Precio</th>
//               <th className="p-2">Categoría</th>
//               <th className="p-2">Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((p) => (
//               <tr key={p.id} className="text-center border-b">
//                 <td className="p-2">{p.id}</td>
//                 <td className="p-2">{p.name}</td>
//                 <td className="p-2">${p.price}</td>
//                 <td className="p-2">{p.category?.name || "Sin categoría"}</td>
//                 <td className="p-2 space-x-2">
//                   <Link
//                     to={`/admin/products/edit/${p.id}`}
//                     className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//                   >
//                     Editar
//                   </Link>
//                   <button
//                     onClick={() => deleteProduct(p.id)}
//                     className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
//                   >
//                     Eliminar
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// }

// export default ProductList;
