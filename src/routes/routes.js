import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/pages/landing";
import Login from "../components/pages/login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/login',
        elemente: <Login />
    },
])