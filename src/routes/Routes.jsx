import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root"
import Home from "../pages/home/Home"
import Donation from "../pages/donation/Donation"
import Statistics from "../pages/statistics/Statistics"
import ErrorPage from "../pages/errorPage/ErrorPage";
import DonationDetails from "../pages/donationDetails/DonationDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/donation",
        element:<Donation></Donation>
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path: "/donation-details/:id",
        element: <DonationDetails />,
      },
    ]
  },
]);

export default router