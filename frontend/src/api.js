import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

export const listGames = (search) =>
  API.get(`/list${search ? `?search=${search}` : ""}`);