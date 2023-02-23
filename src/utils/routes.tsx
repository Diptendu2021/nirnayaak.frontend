import { RouteObject } from "react-router-dom";
import Authentication from "../pages/Authentication";
import Main from "../pages/Main";

const routes : RouteObject[] = [
    // {
    //     path: "/",
    //     element : <Main />
    // },
    {
        path: "/",
        element : <Authentication />
    },
    // {
    //     path : "/authentication",
    //     element: <Authentication />
    // }

]

export default routes