import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import AllTreatment from "../components/AllTreatment";
import Profile from "../components/Profile";
import MyTreatment from "../components/MyTreatment";
import Details from "../components/Details";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: async ()=> {
                const servicesRes = await fetch('/service.json')
                const servicesData = await servicesRes.json()

                const feedBackRes = await fetch('/happyclients.json')
                const feedBackData = await feedBackRes.json()

                return {servicesData, feedBackData}
            }
        },
        {
            path: "/alltreatment",
            element: <AllTreatment></AllTreatment>,
            loader: ()=> fetch('/service.json')
        },
        {
            path: "/profile",
            element: <Profile></Profile>
        },
        {
            path: "/mytreatment",
            element: <MyTreatment></MyTreatment>
        },
        {
            path: "/details/:id",
            element: <Details></Details>,
            loader: async ({params})=> {
                const res = await fetch('/service.json')
                const data = await res.json()
                const singleData = data.find(d=> d.id == params.id)
                // console.log(singleData);
                
                return singleData
            }
        },
      ]
    },
  ]);

  export default router