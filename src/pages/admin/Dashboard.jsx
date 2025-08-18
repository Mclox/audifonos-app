import AdminSidebar from "../../components/AdminSidebar";

function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Contenido principal */}
      <div className="flex-1 p-10">
        <h2 className="text-2xl font-bold text-gray-800">Panel de Administración</h2>
        <p className="mt-4 text-gray-600">
          Bienvenido al panel de administración. Usa el menú lateral para gestionar productos, categorías, clientes, proveedores y más.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
