import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Layout from "../pages/Layout";
import GameDetailsPage from "../pages/GameDetailsPage";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/', 
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true,  element: <Homepage/>},
            {path: 'games/:slug', element: <GameDetailsPage/>}
        ]

     }
])

export default router