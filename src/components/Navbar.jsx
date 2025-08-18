import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">AudífonosApp</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-200">Inicio</Link>
        <Link to="/products" className="hover:text-gray-200">Productos</Link>
        <Link to="/register-client" className="hover:text-gray-200">Registro Cliente</Link>
        <Link to="/register-provider" className="hover:text-gray-200">Registro Proveedor</Link>
        <Link to="/login" className="hover:text-gray-200">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;



// import { Link } from "react-router-dom"
// import { useContext } from "react"
// import { AuthContext } from "../context/AuthContext"

// function Navbar() {
//   const { user, /*logout*/ } = useContext(AuthContext)

//   return (
//     <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
//       <Link to="/" className="text-xl font-bold">AudifonosApp</Link>
//       <div className="space-x-4">
//         <Link to="/" className="hover:text-gray-200">Inicio</Link>
        
//         {user ? (
//           <>
//             <Link to="/admin" className="hover:text-gray-200">Admin</Link>
//             {/* <button onClick={logout} className="hover:text-gray-200">Cerrar sesión</button> */}
//           </>
//         ) : (
//           <Link to="/login" className="hover:text-gray-200">Login</Link>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar
