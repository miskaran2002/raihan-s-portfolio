import {  createBrowserRouter,} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../page/Home/Home/Home";
import About from "../page/About/About";
 export const router = createBrowserRouter([
    {
        path: "/",
       Component:RootLayout,
        children: [
            {
                index: true,
                Component:Home
            },
            {
              path:"/about",
              Component:About
            }
        ]
    },
]);