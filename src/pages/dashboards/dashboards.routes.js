import { ChartsPage, WorldOverviewPage, STATISTICS, WORLD_OVERVIEW } from ".";

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
        path: WORLD_OVERVIEW,
        name: "World Overview",
        miniName: "WO",
        component: WorldOverviewPage,
        layout: "/admin",
      },
    ],
  },
];
