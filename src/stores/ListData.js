import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useListData = defineStore("ListData", () => {
  let content = JSON.parse(localStorage.getItem('tableData')) || Array(20).fill(null).map((_, index) => ({
    id: index + 1,
    date: "15.07.2024, 14:00 - 15:00",
    status: "Идет",
    moduleName: "Акушерство и гинекология",
    sessionType: "Урок",
    room: "Комната 1, Комната 2",
    group: "420-11КС",
}));

  const editingTicketData = ref({
    id: "",
    date: "",
    status: "",
    moduleName: "",
    sessionType: "",
    room: "",
    group: "",
  });

  
  return { content, editingTicketData };

});