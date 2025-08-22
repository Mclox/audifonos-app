import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api/api";
import toast from "react-hot-toast";
import AdminSidebar from "../../../components/AdminSidebar"; // 👈 importación agregada

function AdminList() {
  const [admins, setAdmins] = useState([]);

  const fetchAdmins = async () => {
    try {
      const res = await api.get("/admins");
      setAdmins(res.data);
    } catch {
      toast.error("Error cargando administradores");
    }
  };

  const deleteAdmin = async (id) => {
    if (confirm("¿Seguro que deseas eliminar este administrador?")) {
      try {
        await api.delete(`/admins/${id}`);
        toast.success("Administrador eliminado con éxito");
        fetchAdmins();
      } catch {
        toast.error("Error eliminando administrador");
      }
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Gestión de Administradores</h1>
          <Link
            to="/admin/admins/new"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Nuevo Admin
          </Link>
        </div>
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Usuario</th>
              <th className="p-2">Rol</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr key={a.id} className="text-center border-b">
                <td className="p-2">{a.id}</td>
                <td className="p-2">{a.username}</td>
                <td className="p-2">{a.role}</td>
                <td className="p-2 space-x-2">
                  <Link
                    to={`/admin/admins/edit/${a.id}`}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteAdmin(a.id)}
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

export default AdminList;
