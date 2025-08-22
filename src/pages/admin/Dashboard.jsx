import AdminSidebar from "../../components/AdminSidebar";
import Footer from "../../components/Footer";

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
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
      {/* Footer con menor altura y sin separación extra */}
      <Footer />
    </div>
  );
}

export default Dashboard;


