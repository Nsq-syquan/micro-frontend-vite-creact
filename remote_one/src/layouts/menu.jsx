import { LuHouse, LuImport } from "react-icons/lu";


// Import Component

import Home from "../features/Home";
import About from "../features/About";

// Declare child menu host
export const menu = [
  {
    label: "Home MFE1",
    key: "/mfe1",
    path: "",
    component: <Home />,
    icon: <LuHouse />,
  },
  {
    label: "About MFE1",
    key: "/mfe1/about",
    path: "about",
    component: <About />,
    icon: <LuImport />,
  },
];
