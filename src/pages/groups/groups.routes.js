import { CreateGroupPage } from "./create-group";
import { SearchGroupsPage } from "./search-groups";
import { GroupDetailsPage } from "./group-details";

export const groupMenu = [
  {
    collapse: true,
    name: "Groups",
    icon: "ni ni-circle-08 text-info",
    state: "groupCollapse",
    views: [
      {
        path: "/create-group",
        name: "Create Group",
        miniName: "CG",
        component: CreateGroupPage,
        layout: "/admin",
      },
      {
        path: "/search-groups",
        name: "Search Group",
        miniName: "SG",
        component: SearchGroupsPage,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: false,
    global: true,
    path: "/groups/group-details/:id",
    component: GroupDetailsPage,
    layout: "/admin",
  },
];
