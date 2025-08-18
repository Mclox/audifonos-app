import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import toast from "react-hot-toast";

function RegisterProvider() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!form.name || form.name.trim().length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email)) {
      newErrors.email = "Correo inválido";
    }

    const phoneRegex = /^[0-9]{7,}$/;
    if (!form.phone || !phoneRegex.test(form.phone)) {
      newErrors.phone = "El teléfono debe tener al menos 7 dígitos numéricos";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Por favor corrige los errores");
      return;
    }

    try {
      await api.post("/providers", { ...form, role: "provider" });
      toast.success("Proveedor registrado con éxito");
      navigate("/");
    } catch (error) {
      console.error("Error al registrar el proveedor:", error);
      toast.error("Error al registrar el proveedor");
    }
  };

  return (
    <div className="flex justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow p-6 rounded w-96 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Registro Proveedor</h1>

        {/* Nombre */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Correo */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default RegisterProvider;
