import { ChartsPage, WorldMapPage, STATISTICS, WORLD_MAP } from ".";

export const dashboardMenu = [
  {
    collapse: true,
    name: "Dashboard",
    icon: "ni ni-chart-pie-35 text-info",
    state: "dashboardCollapse",
    views: [
      {
        path: STATISTICS,
        name: "Charts",
        miniName: "C",
        component: ChartsPage,
        layout: "/admin",
      },
      {
        path: WORLD_MAP,
        name: "World Map",
        miniName: "WM",
        component: WorldMapPage,
        layout: "/admin",
      },
    ],
  },
];
