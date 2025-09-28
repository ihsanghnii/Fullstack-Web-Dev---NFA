import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Index";
import Book from "../pages/Book/Index";
import Team from "../pages/Team/Index";
import Contact from "../pages/Contact/Index";
import Login from "../pages/Auth/Login/Index";
import Register from "../pages/Auth/Register/Index";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "Book",
                element: <Book />
            },
            {
                path: "Team",
                element: <Team />
            },
            {
                path: "Contact",
                element: <Contact />
            },
            {
                path: "Login",
                element: <Login />
            },
            {
                path: "Register",
                element: <Register />
            }
        ]
    },
]);