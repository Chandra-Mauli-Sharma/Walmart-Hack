/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import DemandPrediction from "views/DemandPrediction.js";
import SimilarProduct from "views/SimilarProduct.js";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <SpaceDashboardIcon />,
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/demand-prediction",
    name: "Demand Prediction",
    icon: <SpaceDashboardIcon />,
    component: <DemandPrediction />,
    layout: "/admin",
  },
  {
    path: "/similar-products",
    name: "Similar Products",
    icon: <SpaceDashboardIcon />,
    component: <SimilarProduct />,
    layout: "/admin",
  },
];
export default routes;
