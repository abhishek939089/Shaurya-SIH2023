import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Table from "views/examples/Tables";
import Icons from "views/examples/Icons.js";
import Users from "views/examples/Users.js";
// import Adduser from "views/examples/Adduser.js";
import Share from "views/examples/Share/Share.js";
import Cases from "views/examples/Case.js";
import Notifications from "views/examples/Notification";
// import { Table } from "reactstrap";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Search User",
  //   icon: "ni ni-atom text-info",
  //   component: <Transaction />,
  //   layout: "/admin",
  // },
//   {
//   path: "/tables",
//   name: "Today's Routine",
//   icon: "ni ni-bullet-list-67 text-red",
//   component: <Table />,
//   layout: "/admin",
// },
{ 
  path: "/contacts",
  name: "Contacts",
  icon: "ni ni-single-02 text-green",
  component: <Users/>,
  layout: "/admin",
},{
    path: "/cases",
    name: "Case Management",
    icon: "ni ni-single-copy-04 text-gray",
    component: <Cases />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "My Transactions",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Table />,
    layout: "/admin",
  },
  {
    path: "/share",
    name: "Share",
    icon: "ni ni-send text-purple",
    component: <Share />,
    layout: "/admin",
  },
  
  // {
    //   path: "/adduser",
    //   name: "Add User",
    //   icon: "ni ni-single-02 text-red ",
  //   component: <Adduser/>,
  //   layout: "/admin",
  // },
  {
    path: "/Notifications",
    name: "Notifications",
    icon: "ni ni-notification-70 text-dark",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "HelpDesk",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },

  {
    path: "/login",
    name: "Log Out",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    // name: "Register",
    // icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
  {
    path: "/login",
    // name: "Login",
    // icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
];
export default routes;