import { RouteObject } from "react-router-dom";
import Authentication from "../pages/Authentication";
import IndividualSearchPage from "../pages/IndividualSearchPage/IndividualSearchPage";
import Main from "../pages/Main";
import Search from "../pages/Search/Search";
import User from "../pages/User/User";

const routes : RouteObject[] = [
    {
        path: "/user",
        element : <User />
    },
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
    ,
    {
        path : "/document/:documentID",
        element: <IndividualSearchPage />
    }

]

export default routes