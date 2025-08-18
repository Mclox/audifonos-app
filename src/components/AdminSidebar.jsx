import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function AdminSidebar() {
  const { logout } = useAuth();

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-3">
        <Link to="/admin" className="block hover:bg-gray-700 px-3 py-2 rounded">
          Dashboard
        </Link>
        <Link to="/admin/products" className="block hover:bg-gray-700 px-3 py-2 rounded">
          Productos
        </Link>
        <Link to="/admin/categories" className="block hover:bg-gray-700 px-3 py-2 rounded">
          Categorías
        </Link>
        <Link to="/admin/services" className="block hover:bg-gray-700 px-3 py-2 rounded">
          Servicios
        </Link>
        <Link to="/admin/clients" className="block hover:bg-gray-700 px-3 py-2 rounded">
          Clientes
        </Link>
        <Link to="/admin/providers" className="block hover:bg-gray-700 px-3 py-2 rounded">
          Proveedores
        </Link>
        <Link to="/admin/admins" className="block hover:bg-gray-700 px-3 py-2 rounded">
          Administradores
        </Link>
        <Link to="/admin/roles" className="block hover:bg-gray-700 px-3 py-2 rounded">
          Roles
        </Link>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={logout}
          className="w-full bg-red-600 py-2 rounded hover:bg-red-700"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
