import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/api";
import toast from "react-hot-toast";
import AdminSidebar from "../../../components/AdminSidebar"; // 👈 importación agregada

function ProviderEdit() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const res = await api.get(`/providers/${id}`);
        setForm(res.data);
      } catch {
        toast.error("Error cargando proveedor");
      }
    };
    fetchProvider();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Nombre y correo son obligatorios");
      return;
    }
    try {
      await api.put(`/providers/${id}`, form);
      toast.success("Proveedor actualizado con éxito");
      navigate("/admin/providers");
    } catch {
      toast.error("Error al actualizar proveedor");
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Editar Proveedor</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
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

export default ProviderEdit;
