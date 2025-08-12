import {  createBrowserRouter,} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../page/Home/Home/Home";
import About from "../page/About/About";
import Projects from "../page/About/Projects/Projects";
import Contact from "../page/Contact/Contact";
import Skills from "../page/About/Skills/Skills";
import Education from "../page/Education/Education";
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
            },
            {
                path: "/projects",
                Component:Projects
            },
            {
                path:"/contact",
                Component:Contact
            },
            {
                path:"/skills",
                Component: Skills
            },
            {
                path:"/education",
                Component:Education
            }

            
        ]
    },
]);