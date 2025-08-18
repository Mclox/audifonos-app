import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Encuentra los Mejores Audífonos</h1>
          <p className="text-lg mb-6">
            Gamer, inalámbricos o de escritorio. Todo en un solo lugar.
          </p>
          <Link
            to="/products"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"
          >
            Ver Catálogo
          </Link>
        </div>
      </section>

      {/* Sección destacada */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Nuestras Categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow rounded">
              <h3 className="text-xl font-semibold">Gamer</h3>
              <p className="text-gray-600">Sumérgete en el juego con sonido envolvente.</p>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <h3 className="text-xl font-semibold">Inalámbricos</h3>
              <p className="text-gray-600">Libertad total con audífonos Bluetooth.</p>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <h3 className="text-xl font-semibold">Escritorio</h3>
              <p className="text-gray-600">Comodidad y calidad para tu trabajo diario.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
