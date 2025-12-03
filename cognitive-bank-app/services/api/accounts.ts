// api/accounts.ts
import apiClient from "./client";

export const AccountAPI = {
  getUserAccounts: () => apiClient.get("/accounts"),
  getAccountById: (id: string) => apiClient.get(`/accounts/${id}`),
  deposit: (id: string, amount: number) =>
    apiClient.post(`/accounts/${id}/deposit?amount=${amount}`),
  withdraw: (id: string, amount: number) =>
    apiClient.post(`/accounts/${id}/withdraw?amount=${amount}`),
  transfer: (fromId: string, toId: string, amount: number, description: string) =>
    apiClient.post(`/accounts/${fromId}/transfer`, {
      toAccountNumber: toId,
      amount,
      description,
    }),
};
