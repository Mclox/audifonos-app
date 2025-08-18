import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/api";
import toast from "react-hot-toast";

function AdminEdit() {
  const { id } = useParams();
  const [form, setForm] = useState({ username: "", password: "", role: "admin" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await api.get(`/admins/${id}`);
        setForm(res.data);
      } catch {
        toast.error("Error cargando administrador");
      }
    };
    fetchAdmin();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username.trim() || !form.password.trim()) {
      toast.error("Usuario y contraseña son obligatorios");
      return;
    }
    try {
      await api.put(`/admins/${id}`, form);
      toast.success("Administrador actualizado con éxito");
      navigate("/admin/admins");
    } catch {
      toast.error("Error al actualizar administrador");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Editar Administrador</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
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
    </div>
  );
}

export default AdminEdit;
