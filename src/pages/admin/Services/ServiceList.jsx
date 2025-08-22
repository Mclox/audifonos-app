import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/api";
import toast from "react-hot-toast";
import AdminSidebar from "../../../components/AdminSidebar"; // 👈 importación agregada

function ServiceList() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const res = await api.get("/services");
      setServices(res.data);
    } catch {
      toast.error("Error cargando servicios");
    }
  };

  const deleteService = async (id) => {
    if (confirm("¿Seguro que deseas eliminar este servicio?")) {
      try {
        await api.delete(`/services/${id}`);
        toast.success("Servicio eliminado con éxito");
        fetchServices();
      } catch {
        toast.error("Error eliminando servicio");
      }
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Gestión de Servicios</h1>
          <Link
            to="/admin/services/new"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Nuevo Servicio
          </Link>
        </div>
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Nombre</th>
              <th className="p-2">Descripción</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.id} className="text-center border-b">
                <td className="p-2">{s.id}</td>
                <td className="p-2">{s.name}</td>
                <td className="p-2">{s.description}</td>
                <td className="p-2 space-x-2">
                  <Link
                    to={`/admin/services/edit/${s.id}`}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteService(s.id)}
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

export default ServiceList;
