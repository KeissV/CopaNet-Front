import axios from "axios";

const API_URL = "http://localhost:8080/api/equipos";

export const getEquipos = async () => {
  const res = await axios.get(`${API_URL}/listar`);
  return res.data;
};
