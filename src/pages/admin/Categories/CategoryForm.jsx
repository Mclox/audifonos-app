import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
import toast from "react-hot-toast";
import AdminSidebar from "../../../components/AdminSidebar";

function CategoryForm() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("El nombre de la categoría es obligatorio");
      return;
    }
    try {
      // Obtenemos todas las categorías para calcular el siguiente id
      const res = await api.get("/categories");
      const categories = res.data;

      // Buscamos el id más alto y sumamos 1
      const newId =
        categories.length > 0
          ? Math.max(...categories.map((c) => Number(c.id))) + 1
          : 1;

      // Creamos la nueva categoría con id numérico
      await api.post("/categories", {
        id: newId,
        name,
      });

      toast.success("Categoría creada con éxito");
      navigate("/admin/categories");
    } catch {
      toast.error("Error al crear la categoría");
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Nueva Categoría</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Nombre de la categoría"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Guardar
          </button>
        </form>
      </main>
    </div>
  );
}

export default CategoryForm;
