import { RouteObject } from "react-router-dom";
import Authentication from "../pages/Authentication";
import Main from "../pages/Main";
import Search from "../pages/Search/Search";
import User from "../pages/User/User";

const routes : RouteObject[] = [
    // {
    //     path: "/",
    //     element : <Main />
    // },
    // {
    //     path: "/",
    //     element : <Authentication />
    // },
    {
        path: "/",
        element : <Search />
    },
    {
        path : "/authentication",
        element: <Authentication />
    }

]

export default routes