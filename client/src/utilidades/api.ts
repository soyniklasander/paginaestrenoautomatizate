import axios from 'axios';

export const api = axios.create({
  baseURL: (import.meta as any).env?.VITE_API_URL || 'http://localhost:3001',
});

export type ModuloSalud = 'usuarios' | 'proyectos' | 'contacto' | 'autenticacion';

export async function obtenerSalud(modulo: ModuloSalud) {
  const { data } = await api.get(`/${modulo}/salud`);
  return data as { ok: boolean; modulo: string };
}

export default api;
