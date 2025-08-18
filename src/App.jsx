import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100">
        <AppRouter />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </AuthProvider>
  );
}

export default App;
