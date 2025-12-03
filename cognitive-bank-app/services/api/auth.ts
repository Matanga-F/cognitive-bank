import apiClient from "./client";

export const AuthAPI = {
  login: (email: string, password: string) =>
    apiClient.post("/auth/login", { email, password }),

  register: (data: any) => apiClient.post("/auth/register", data),
};