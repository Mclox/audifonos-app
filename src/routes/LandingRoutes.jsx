import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/landing/Home";
import Categories from "../pages/landing/Categories"; // <-- este falta
import Products from "../pages/landing/Products";
import RegisterClient from "../pages/landing/RegisterClient";
import RegisterProvider from "../pages/landing/RegisterProvider";
import Login from "../pages/landing/Login";

function LandingRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Landing pública */}
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} /> {/* <-- pendiente de revisar products y categories es lo mismo? */}
        <Route path="/products" element={<Products />} />
        <Route path="/register-client" element={<RegisterClient />} />
        <Route path="/register-provider" element={<RegisterProvider />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default LandingRoutes;




//1 // import { Routes, Route } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Home from "../pages/landing/Home";
// import Products from "../pages/landing/Products";
// import RegisterClient from "../pages/landing/RegisterClient";
// import RegisterProvider from "../pages/landing/RegisterProvider";
// import Login from "../pages/landing/Login";

// function LandingRoutes() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/register-client" element={<RegisterClient />} />
//         <Route path="/register-provider" element={<RegisterProvider />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </div>
//   );
// }

// export default LandingRoutes;




// 2 // import { Routes, Route } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Home from "../pages/landing/Home";
// import Login from "../pages/landing/Login";
// import Products from "../pages/landing/Products";
// import RegisterClient from "../pages/landing/RegisterClient";
// import RegisterProvider from "../pages/landing/RegisterProvider";

// function LandingRoutes() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/register-client" element={<RegisterClient />} />
//         <Route path="/register-provider" element={<RegisterProvider />} />
//       </Routes>
//     </div>
//   );
// }

// export default LandingRoutes;
