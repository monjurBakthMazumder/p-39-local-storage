import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import AiDetails from "../Pages/AiDetails/AiDetails";
const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/favorites',
                element: <Favorites/>
            },
            {
                path: '/:id',
                element: <AiDetails/>
            }
        ]
    }
])

export default myCreateRoute;