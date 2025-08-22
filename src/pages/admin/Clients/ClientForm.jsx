import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
import toast from "react-hot-toast";
import AdminSidebar from "../../../components/AdminSidebar"; // 👈 importación agregada

function ClientForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const navigate = useNavigate();

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
      await api.post("/clients", { ...form, role: "client" });
      toast.success("Cliente creado con éxito");
      navigate("/admin/clients");
    } catch {
      toast.error("Error al crear cliente");
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Nuevo Cliente</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
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

export default ClientForm;
