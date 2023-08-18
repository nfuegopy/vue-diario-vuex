export default {
  name: "daybook",
  component: () => import("@/modules/diario/layouts/DayBookLayout.vue"),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () => import("@/modules/diario/view/NoEntrySelected.vue"),
    },
    {
      path: "id",
      name: "entry",
      component: () => import("@/modules/diario/view/EntryView.vue"),
    },
  ],
};
