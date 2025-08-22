import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/api";
import toast from "react-hot-toast";
import AdminSidebar from "../../../components/AdminSidebar";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data);
    } catch {
      toast.error("Error cargando categorías");
    }
  };

  const deleteCategory = async (id) => {
    if (confirm("¿Seguro que deseas eliminar esta categoría?")) {
      try {
        // 👇 convertimos a número para evitar inconsistencias
        await api.delete(`/categories/${Number(id)}`);
        toast.success("Categoría eliminada con éxito");
        fetchCategories();
      } catch {
        toast.error("Error eliminando categoría");
      }
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Gestión de Categorías</h1>
          <Link
            to="/admin/categories/new"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Nueva Categoría
          </Link>
        </div>
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Nombre</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c.id} className="text-center border-b">
                <td className="p-2">{c.id}</td>
                <td className="p-2">{c.name}</td>
                <td className="p-2 space-x-2">
                  <Link
                    to={`/admin/categories/edit/${c.id}`}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteCategory(c.id)}
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

export default CategoryList;
