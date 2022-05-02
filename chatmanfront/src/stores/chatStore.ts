import { defineStore } from "pinia";
import type { Chat } from "@/models/Chat";
import { ChatService } from "@/services/chat.service";

const chatService = new ChatService();

export const ChatStore = defineStore({
  id: "ChatStore",
  state: () => ({
    chats: [
      { text: "USERNAME", sender: "MESSAGE" },
      { text: "second", sender: "tester 2" },
    ],
    room: "",
  }),
  getters: {
    roomName: (state) => {
      if (state.room != undefined) return state.room;
      else return "No Room";
    },
  },
});
