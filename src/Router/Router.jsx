import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import AllTreatment from "../components/AllTreatment";
import Profile from "../components/Profile";
import MyTreatment from "../components/MyTreatment";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('/service.json')
        },
        {
            path: "/alltreatment",
            element: <AllTreatment></AllTreatment>,
        },
        {
            path: "/profile",
            element: <Profile></Profile>
        },
        {
            path: "/mytreatment",
            element: <MyTreatment></MyTreatment>
        },
      ]
    },
  ]);

  export default router