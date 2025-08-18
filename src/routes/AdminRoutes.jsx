import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";

// Admin - Dashboard
import Dashboard from "../pages/admin/Dashboard";

// Productos
import ProductList from "../pages/admin/products/ProductList";
import ProductForm from "../pages/admin/products/ProductForm";
import ProductEdit from "../pages/admin/products/ProductEdit";

// Categorías
import CategoryList from "../pages/admin/categories/CategoryList";
import CategoryForm from "../pages/admin/categories/CategoryForm";
import CategoryEdit from "../pages/admin/categories/CategoryEdit";

// Servicios
import ServiceList from "../pages/admin/services/ServiceList";
import ServiceForm from "../pages/admin/services/ServiceForm";
import ServiceEdit from "../pages/admin/services/ServiceEdit";

// Clientes
import ClientList from "../pages/admin/clients/ClientList";
import ClientForm from "../pages/admin/clients/ClientForm";
import ClientEdit from "../pages/admin/clients/ClientEdit";

// Proveedores
import ProviderList from "../pages/admin/providers/ProviderList";
import ProviderForm from "../pages/admin/providers/ProviderForm";
import ProviderEdit from "../pages/admin/providers/ProviderEdit";

// Administradores
import AdminList from "../pages/admin/admins/AdminList";
import AdminForm from "../pages/admin/admins/AdminForm";
import AdminEdit from "../pages/admin/admins/AdminEdit";

// Roles
import RoleList from "../pages/admin/roles/RoleList";
import RoleForm from "../pages/admin/roles/RoleForm";
import RoleEdit from "../pages/admin/roles/RoleEdit";

function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      {/* CRUD Productos */}
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <ProductList />
          </PrivateRoute>
        }
      />
      <Route
        path="/products/new"
        element={
          <PrivateRoute>
            <ProductForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/products/edit/:id"
        element={
          <PrivateRoute>
            <ProductEdit />
          </PrivateRoute>
        }
      />

      {/* CRUD Categorías */}
      <Route
        path="/categories"
        element={
          <PrivateRoute>
            <CategoryList />
          </PrivateRoute>
        }
      />
      <Route
        path="/categories/new"
        element={
          <PrivateRoute>
            <CategoryForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/categories/edit/:id"
        element={
          <PrivateRoute>
            <CategoryEdit />
          </PrivateRoute>
        }
      />

      {/* CRUD Servicios */}
      <Route
        path="/services"
        element={
          <PrivateRoute>
            <ServiceList />
          </PrivateRoute>
        }
      />
      <Route
        path="/services/new"
        element={
          <PrivateRoute>
            <ServiceForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/services/edit/:id"
        element={
          <PrivateRoute>
            <ServiceEdit />
          </PrivateRoute>
        }
      />

      {/* CRUD Clientes */}
      <Route
        path="/clients"
        element={
          <PrivateRoute>
            <ClientList />
          </PrivateRoute>
        }
      />
      <Route
        path="/clients/new"
        element={
          <PrivateRoute>
            <ClientForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/clients/edit/:id"
        element={
          <PrivateRoute>
            <ClientEdit />
          </PrivateRoute>
        }
      />

      {/* CRUD Proveedores */}
      <Route
        path="/providers"
        element={
          <PrivateRoute>
            <ProviderList />
          </PrivateRoute>
        }
      />
      <Route
        path="/providers/new"
        element={
          <PrivateRoute>
            <ProviderForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/providers/edit/:id"
        element={
          <PrivateRoute>
            <ProviderEdit />
          </PrivateRoute>
        }
      />

      {/* CRUD Administradores */}
      <Route
        path="/admins"
        element={
          <PrivateRoute>
            <AdminList />
          </PrivateRoute>
        }
      />
      <Route
        path="/admins/new"
        element={
          <PrivateRoute>
            <AdminForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/admins/edit/:id"
        element={
          <PrivateRoute>
            <AdminEdit />
          </PrivateRoute>
        }
      />

      {/* CRUD Roles */}
      <Route
        path="/roles"
        element={
          <PrivateRoute>
            <RoleList />
          </PrivateRoute>
        }
      />
      <Route
        path="/roles/new"
        element={
          <PrivateRoute>
            <RoleForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/roles/edit/:id"
        element={
          <PrivateRoute>
            <RoleEdit />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AdminRoutes;


//1 // import { Routes, Route } from "react-router-dom";
// import Dashboard from "../pages/admin/Dashboard";
// import ProductList from "../pages/admin/products/ProductList";
// import ProductForm from "../pages/admin/products/ProductForm";
// import ProductEdit from "../pages/admin/products/ProductEdit";
// import CategoryList from "../pages/admin/categories/CategoryList";
// import CategoryForm from "../pages/admin/categories/CategoryForm";
// import CategoryEdit from "../pages/admin/categories/CategoryEdit";
// import PrivateRoute from "../components/PrivateRoute";

// function AdminRoutes() {
//   return (
//     <Routes>
//       {/* Dashboard */}
//       <Route
//         path="/"
//         element={
//           <PrivateRoute>
//             <Dashboard />
//           </PrivateRoute>
//         }
//       />

//       {/* Productos */}
//       <Route
//         path="/products"
//         element={
//           <PrivateRoute>
//             <ProductList />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/products/new"
//         element={
//           <PrivateRoute>
//             <ProductForm />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/products/edit/:id"
//         element={
//           <PrivateRoute>
//             <ProductEdit />
//           </PrivateRoute>
//         }
//       />

//       {/* Categorías */}
//       <Route
//         path="/categories"
//         element={
//           <PrivateRoute>
//             <CategoryList />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/categories/new"
//         element={
//           <PrivateRoute>
//             <CategoryForm />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/categories/edit/:id"
//         element={
//           <PrivateRoute>
//             <CategoryEdit />
//           </PrivateRoute>
//         }
//       />
//     </Routes>
//   );
// }

// export default AdminRoutes;




// 2import { Routes, Route } from "react-router-dom";
// import Dashboard from "../pages/admin/Dashboard";
// import ProductList from "../pages/admin/Products/ProductList";
// import ProductForm from "../pages/admin/Products/ProductForm";
// import ProductEdit from "../pages/admin/Products/ProductEdit";
// import CategoryList from "../pages/admin/Categories/CategoryList";
// import CategoryForm from "../pages/admin/Categories/CategoryForm";
// import CategoryEdit from "../pages/admin/Categories/CategoryEdit";
// import PrivateRoute from "../components/PrivateRoute";

// function AdminRoutes() {
//   return (
//     <Routes>
//       {/* Dashboard */}
//       <Route
//         path="/"
//         element={
//           <PrivateRoute>
//             <Dashboard />
//           </PrivateRoute>
//         }
//       />

//       {/* Productos */}
//       <Route
//         path="/products"
//         element={
//           <PrivateRoute>
//             <ProductList />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/products/new"
//         element={
//           <PrivateRoute>
//             <ProductForm />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/products/edit/:id"
//         element={
//           <PrivateRoute>
//             <ProductEdit />
//           </PrivateRoute>
//         }
//       />

//       {/* Categorías */}
//       <Route
//         path="/categories"
//         element={
//           <PrivateRoute>
//             <CategoryList />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/categories/new"
//         element={
//           <PrivateRoute>
//             <CategoryForm />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/categories/edit/:id"
//         element={
//           <PrivateRoute>
//             <CategoryEdit />
//           </PrivateRoute>
//         }
//       />
//     </Routes>
//   );
// }

// export default AdminRoutes;
