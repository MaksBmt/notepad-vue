import { defineStore } from "pinia";
import { getToken } from "@/services/token-manager";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: [],
  }),
  actions: {
    set(value) {
      this.notes.push(value);
    },
    setNotes(value) {
      const token = getToken();
      let title = value.title;
      let content = value.content;

      return fetch("https://dist.nd.ru/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ title, content }),
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        })

        .catch((error) => console.log(error));
    },

    async getNotes() {
      const token = getToken();
      try {
        return await fetch("https://dist.nd.ru/api/notes", {
          method: "GET",
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            return (this.notes = result);
          });
      } catch (e) {
        await console.log("error", e, Error(e));
      }
    },
  },
});
