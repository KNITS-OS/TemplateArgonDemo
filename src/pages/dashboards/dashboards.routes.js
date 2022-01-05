import ChartsPage from "./dashboard-chart/Charts.page";
import WorldMapPage from "./dashboard-world-map/WorldMap.page";

const dashboardMenu = [
  {
    collapse: true,
    name: "Dashboard",
    icon: "ni ni-chart-pie-35 text-info",
    state: "dashboardCollapse",
    views: [
      {
        path: "/statistics",
        name: "Charts",
        miniName: "C",
        component: ChartsPage,
        layout: "/admin",
      },
      {
        path: "/world-map",
        name: "World Map",
        miniName: "WM",
        component: WorldMapPage,
        layout: "/admin",
      },
    ],
  },
];

export default dashboardMenu;
