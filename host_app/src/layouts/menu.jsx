import { lazy } from "react";
import { LuHouse, LuImport } from "react-icons/lu";

// Import Component
import Home from "../features/Home";

const RemoteOne = lazy(() => import("remoteOne/App"));

// Declare child menu host
export const menu = [
  {
    key: '/',
    label: "Home",
    path: "/",
    component: <Home />,
    icon: <LuHouse />,
  },
  {
    label: "MFE1",
    key: "/mfe1",
    path: "/mfe1/*",
    component: <RemoteOne />,
    icon: <LuImport />,
  },
];
