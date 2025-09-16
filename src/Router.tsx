import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Error } from "./pages/error/Error";
import { AnimalDetail } from "./pages/AnimalDetail";
import { Animals } from "./pages/Animals";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/animals",
                element: <Animals/>
            },
            {
                path: "/animals/:id",
                element: <AnimalDetail/>
            }
        ]
    },
], {
    basename: import.meta.env.DEV ? "" : "fed24d-the-zoo-ellinorjohansson/", // For deploy
})