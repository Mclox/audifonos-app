import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/api";
import toast from "react-hot-toast";

function ProviderList() {
  const [providers, setProviders] = useState([]);

  const fetchProviders = async () => {
    try {
      const res = await api.get("/providers");
      setProviders(res.data);
    } catch {
      toast.error("Error cargando proveedores");
    }
  };

  const deleteProvider = async (id) => {
    if (confirm("¿Seguro que deseas eliminar este proveedor?")) {
      try {
        await api.delete(`/providers/${id}`);
        toast.success("Proveedor eliminado con éxito");
        fetchProviders();
      } catch {
        toast.error("Error eliminando proveedor");
      }
    }
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Gestión de Proveedores</h1>
        <Link
          to="/admin/providers/new"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Nuevo Proveedor
        </Link>
      </div>
      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Nombre</th>
            <th className="p-2">Email</th>
            <th className="p-2">Teléfono</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((p) => (
            <tr key={p.id} className="text-center border-b">
              <td className="p-2">{p.id}</td>
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.email}</td>
              <td className="p-2">{p.phone}</td>
              <td className="p-2 space-x-2">
                <Link
                  to={`/admin/providers/edit/${p.id}`}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteProvider(p.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProviderList;
