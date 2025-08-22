import { useEffect, useState } from "react";
import api from "../../api/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 6; // productos por página

  // Cargar categorías una sola vez
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories");
        setCategories(res.data);
      } catch (error) {
        console.error("Error cargando categorías", error);
      }
    };
    fetchCategories();
  }, []);

  // Cargar productos del backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `/products?_expand=category&_page=${page}&_limit=${limit}`;
        if (filter) url += `&categoryId=${filter}`;

        const res = await api.get(url);
        let data = res.data;

        // 🔎 Filtrar en frontend
        if (search) {
          data = data.filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
          );
        }

        setProducts(data);
      } catch (error) {
        console.error("Error cargando productos", error);
      }
    };
    fetchProducts();
  }, [filter, search, page]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Catálogo de Productos</h1>

      {/* Buscador */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reiniciar a página 1 al buscar
          }}
          className="w-1/2 border p-2 rounded"
        />
      </div>

      {/* Filtros */}
      <div className="flex justify-center space-x-4 mb-6 flex-wrap">
        <button
          onClick={() => {
            setFilter("");
            setPage(1);
          }}
          className={`px-4 py-2 rounded ${
            filter === "" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Todos
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => {
              setFilter(c.id);
              setPage(1);
            }}
            className={`px-4 py-2 rounded ${
              filter === c.id ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Productos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow rounded p-4 flex flex-col items-center"
            >
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-32 h-32 object-cover mb-4"
              />
              <h2 className="text-lg font-bold">{p.name}</h2>
              <p className="text-gray-600">${p.price}</p>
              <p className="text-sm text-gray-500">{p.category?.name}</p>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No se encontraron productos.
          </p>
        )}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="px-4 py-2">{page}</span>
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Products;



// function Products() {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [filter, setFilter] = useState("");
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const limit = 6; // productos por página

//   // Cargar categorías una sola vez
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await api.get("/categories");
//         setCategories(res.data);
//       } catch (error) {
//         console.error("Error cargando categorías", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Cargar productos cada vez que cambian filtros
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         let url = `/products?_expand=category&_page=${page}&_limit=${limit}`;
//         if (filter) url += `&categoryId=${filter}`;
//         if (search) url += `&q=${search}`; // búsqueda simple
//         const res = await api.get(url);
//         setProducts(res.data);
//       } catch (error) {
//         console.error("Error cargando productos", error);
//       }
//     };
//     fetchProducts();
//   }, [filter, search, page]);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Catálogo de Productos</h1>

//       {/* Buscador */}
//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Buscar producto..."
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             setPage(1); // reiniciar a página 1 al buscar
//           }}
//           className="w-1/2 border p-2 rounded"
//         />
//       </div>

//       {/* Filtros */}
//       <div className="flex justify-center space-x-4 mb-6 flex-wrap">
//         <button
//           onClick={() => { setFilter(""); setPage(1); }}
//           className={`px-4 py-2 rounded ${filter === "" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
//         >
//           Todos
//         </button>
//         {categories.map((c) => (
//           <button
//             key={c.id}
//             onClick={() => { setFilter(c.id); setPage(1); }}
//             className={`px-4 py-2 rounded ${filter === c.id ? "bg-blue-600 text-white" : "bg-gray-200"}`}
//           >
//             {c.name}
//           </button>
//         ))}
//       </div>

//       {/* Productos */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.map((p) => (
//           <div key={p.id} className="bg-white shadow rounded p-4 flex flex-col items-center">
//             <img src={p.imageUrl} alt={p.name} className="w-32 h-32 object-cover mb-4" />
//             <h2 className="text-lg font-bold">{p.name}</h2>
//             <p className="text-gray-600">${p.price}</p>
//             <p className="text-sm text-gray-500">{p.category?.name}</p>
//           </div>
//         ))}
//       </div>

//       {/* Paginación */}
//       <div className="flex justify-center mt-8 space-x-4">
//         <button
//           disabled={page === 1}
//           onClick={() => setPage(page - 1)}
//           className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//         >
//           Anterior
//         </button>
//         <span className="px-4 py-2">{page}</span>
//         <button
//           onClick={() => setPage(page + 1)}
//           className="px-4 py-2 bg-gray-200 rounded"
//         >
//           Siguiente
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Products;
