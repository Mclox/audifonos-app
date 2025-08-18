import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/api";
import toast from "react-hot-toast";

function RoleList() {
  const [roles, setRoles] = useState([]);

  const fetchRoles = async () => {
    try {
      const res = await api.get("/roles");
      setRoles(res.data);
    } catch {
      toast.error("Error cargando roles");
    }
  };

  const deleteRole = async (id) => {
    if (confirm("¿Seguro que deseas eliminar este rol?")) {
      try {
        await api.delete(`/roles/${id}`);
        toast.success("Rol eliminado con éxito");
        fetchRoles();
      } catch {
        toast.error("Error eliminando rol");
      }
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Gestión de Roles</h1>
        <Link
          to="/admin/roles/new"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Nuevo Rol
        </Link>
      </div>
      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Nombre</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((r) => (
            <tr key={r.id} className="text-center border-b">
              <td className="p-2">{r.id}</td>
              <td className="p-2">{r.name}</td>
              <td className="p-2 space-x-2">
                <Link
                  to={`/admin/roles/edit/${r.id}`}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteRole(r.id)}
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

export default RoleList;
