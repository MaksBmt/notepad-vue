import { defineStore } from "pinia";
import { removeToken, getToken } from "@/services/token-manager";
import { useNotesStore } from "@/stores/notes";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: { email: "" },
    isAuthenticated: false,
  }),
  actions: {
    async auth(email, password) {
      return fetch("https://dist.nd.ru/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        })
        .catch((error) => console.log(error));
    },
    async reg(email, password, confirm_password) {
      return fetch("https://dist.nd.ru/api/reg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ email, password, confirm_password }),
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        })
        .catch((error) => console.log(error));
    },

    async getToken(email, password) {
      return await fetch("https://dist.nd.ru/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        })
        .catch((error) => console.log(error));
    },

    get() {
      const token = getToken();

      fetch("https://dist.nd.ru/api/auth", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((result) => (this.user.email = result.email))
        .catch((error) => console.log(error));
    },

    logout() {
      this.user.email = "";
      removeToken();
      this.isAuthenticated = false;
      useNotesStore().notes = [];
    },
  },
});
