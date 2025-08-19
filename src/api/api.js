import axios from "axios";

const api = axios.create({ //permite crear una instancia de axios
  baseURL: "http://localhost:5000", // URL base de la API, crear un puerto de escucha en el backend
});

export default api;
