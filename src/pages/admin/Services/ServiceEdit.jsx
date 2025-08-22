import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/api";
import toast from "react-hot-toast";
import AdminSidebar from "../../../components/AdminSidebar"; // 👈 importación agregada

function ServiceEdit() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: "", description: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await api.get(`/services/${id}`);
        setForm(res.data);
      } catch {
        toast.error("Error cargando el servicio");
      }
    };
    fetchService();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("El nombre es obligatorio");
      return;
    }
    try {
      await api.put(`/services/${id}`, form);
      toast.success("Servicio actualizado con éxito");
      navigate("/admin/services");
    } catch {
      toast.error("Error al actualizar servicio");
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Editar Servicio</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            type="text"
            name="name"
            placeholder="Nombre del servicio"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Descripción"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
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

export default ServiceEdit;
