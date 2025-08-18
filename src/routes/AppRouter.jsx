import { Routes, Route } from "react-router-dom";
import LandingRoutes from "./LandingRoutes";
import AdminRoutes from "./AdminRoutes";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/*" element={<LandingRoutes />} />

        {/* Rutas privadas (admin) */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>

      {/* Footer global */}
      <Footer />
    </>
  );
}

export default AppRouter;



//2 // import { Routes, Route } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import PrivateRoute from "../components/PrivateRoute";

// // Landing pages
// import Home from "../pages/landing/Home";
// // import Categories from "../pages/landing/Categories";
// import RegisterClient from "../pages/landing/RegisterClient";
// import RegisterProvider from "../pages/landing/RegisterProvider";

// // Auth
// import Login from "../pages/landing/Login";

// // Admin - Dashboard
// import Dashboard from "../pages/admin/Dashboard";

// // Admin - Productos
// import ProductList from "../pages/admin/products/ProductList";
// import ProductForm from "../pages/admin/products/ProductForm";
// import ProductEdit from "../pages/admin/products/ProductEdit";

// // Admin - Categorías
// import CategoryList from "../pages/admin/categories/CategoryList";
// import CategoryForm from "../pages/admin/categories/CategoryForm";
// import CategoryEdit from "../pages/admin/categories/CategoryEdit";

// // Admin - Servicios
// import ServiceList from "../pages/admin/services/ServiceList";
// import ServiceForm from "../pages/admin/services/ServiceForm";
// import ServiceEdit from "../pages/admin/services/ServiceEdit";

// // Admin - Clientes
// import ClientList from "../pages/admin/clients/ClientList";
// import ClientForm from "../pages/admin/clients/ClientForm";
// import ClientEdit from "../pages/admin/clients/ClientEdit";

// // Admin - Proveedores
// import ProviderList from "../pages/admin/providers/ProviderList";
// import ProviderForm from "../pages/admin/providers/ProviderForm";
// import ProviderEdit from "../pages/admin/providers/ProviderEdit";

// // Admin - Administradores
// import AdminList from "../pages/admin/admins/AdminList";
// import AdminForm from "../pages/admin/admins/AdminForm";
// import AdminEdit from "../pages/admin/admins/AdminEdit";

// // Admin - Roles
// import RoleList from "../pages/admin/roles/RoleList";
// import RoleForm from "../pages/admin/roles/RoleForm";
// import RoleEdit from "../pages/admin/roles/RoleEdit";
// import Products from "../pages/landing/Products";

// function AppRouter() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         {/* Landing pública */}
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/register-client" element={<RegisterClient />} />
//         <Route path="/register-provider" element={<RegisterProvider />} />

//         {/* Login */}
//         <Route path="/login" element={<Login />} />

//         {/* Zona Admin (protegida con PrivateRoute) */}
//         <Route element={<PrivateRoute />}>
//           <Route path="/admin" element={<Dashboard />} />

//           {/* CRUD Productos */}
//           <Route path="/admin/products" element={<ProductList />} />
//           <Route path="/admin/products/new" element={<ProductForm />} />
//           <Route path="/admin/products/edit/:id" element={<ProductEdit />} />

//           {/* CRUD Categorías */}
//           <Route path="/admin/categories" element={<CategoryList />} />
//           <Route path="/admin/categories/new" element={<CategoryForm />} />
//           <Route path="/admin/categories/edit/:id" element={<CategoryEdit />} />

//           {/* CRUD Servicios */}
//           <Route path="/admin/services" element={<ServiceList />} />
//           <Route path="/admin/services/new" element={<ServiceForm />} />
//           <Route path="/admin/services/edit/:id" element={<ServiceEdit />} />

//           {/* CRUD Clientes */}
//           <Route path="/admin/clients" element={<ClientList />} />
//           <Route path="/admin/clients/new" element={<ClientForm />} />
//           <Route path="/admin/clients/edit/:id" element={<ClientEdit />} />

//           {/* CRUD Proveedores */}
//           <Route path="/admin/providers" element={<ProviderList />} />
//           <Route path="/admin/providers/new" element={<ProviderForm />} />
//           <Route path="/admin/providers/edit/:id" element={<ProviderEdit />} />

//           {/* CRUD Administradores */}
//           <Route path="/admin/admins" element={<AdminList />} />
//           <Route path="/admin/admins/new" element={<AdminForm />} />
//           <Route path="/admin/admins/edit/:id" element={<AdminEdit />} />

//           {/* CRUD Roles */}
//           <Route path="/admin/roles" element={<RoleList />} />
//           <Route path="/admin/roles/new" element={<RoleForm />} />
//           <Route path="/admin/roles/edit/:id" element={<RoleEdit />} />
//         </Route>
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default AppRouter;



// 1 // import { Routes, Route } from "react-router-dom"
// import LandingRoutes from "./LandingRoutes"
// import AdminRoutes from "./AdminRoutes"
// import Login from "../pages/landing/Login"   // 👈 importa el login

// function AppRouter() {
//   return (
//     <Routes>
//       {/* Rutas públicas */}
//       <Route path="/*" element={<LandingRoutes />} />
//       <Route path="/login" element={<Login />} />   {/* 👈 agrega esta */}

//       {/* Rutas privadas (admin) */}
//       <Route path="/admin/*" element={<AdminRoutes />} />
//     </Routes>
//   )
// }

// export default AppRouter
