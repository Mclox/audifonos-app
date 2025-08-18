import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/api";
import toast from "react-hot-toast";

function ClientList() {
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    try {
      const res = await api.get("/clients");
      setClients(res.data);
    } catch {
      toast.error("Error cargando clientes");
    }
  };

  const deleteClient = async (id) => {
    if (confirm("¿Seguro que deseas eliminar este cliente?")) {
      try {
        await api.delete(`/clients/${id}`);
        toast.success("Cliente eliminado con éxito");
        fetchClients();
      } catch {
        toast.error("Error eliminando cliente");
      }
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Gestión de Clientes</h1>
        <Link
          to="/admin/clients/new"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Nuevo Cliente
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
          {clients.map((c) => (
            <tr key={c.id} className="text-center border-b">
              <td className="p-2">{c.id}</td>
              <td className="p-2">{c.name}</td>
              <td className="p-2">{c.email}</td>
              <td className="p-2">{c.phone}</td>
              <td className="p-2 space-x-2">
                <Link
                  to={`/admin/clients/edit/${c.id}`}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteClient(c.id)}
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

export default ClientList;
