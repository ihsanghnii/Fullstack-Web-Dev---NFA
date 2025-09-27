import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Index";
import Book from "../pages/Book";
import Team from "../pages/Team";
import Contact from "../pages/Contact";

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
            }
        ]
    },
]);