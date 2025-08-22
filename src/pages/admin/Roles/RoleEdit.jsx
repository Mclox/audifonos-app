import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/api";
import toast from "react-hot-toast";
import AdminSidebar from "../../../components/AdminSidebar"; // 👈 importación agregada

function RoleEdit() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const res = await api.get(`/roles/${id}`);
        setName(res.data.name);
      } catch {
        toast.error("Error cargando rol");
      }
    };
    fetchRole();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("El nombre del rol es obligatorio");
      return;
    }
    try {
      await api.put(`/roles/${id}`, { id, name });
      toast.success("Rol actualizado con éxito");
      navigate("/admin/roles");
    } catch {
      toast.error("Error al actualizar rol");
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Editar Rol</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
          >
            Actualizar
          </button>
        </form>
      </main>
    </div>
  );
}

export default RoleEdit;
