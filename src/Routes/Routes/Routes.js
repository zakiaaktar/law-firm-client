import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddLawyer from "../../Pages/Dashboard/AddLawyer/AddLawyer";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ManageLawyers from "../../Pages/Dashboard/ManageLawyers/ManageLawyers";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addlawyer',
                element: <AdminRoute><AddLawyer></AddLawyer></AdminRoute>
            },
            {
                path: '/dashboard/managelawyers',
                element: <AdminRoute><ManageLawyers></ManageLawyers></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://law-firm-server-three.vercel.app/bookings/${params.id}`)
            }
        ]
    },
]);


export default router;