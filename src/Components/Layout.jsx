import React from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";


const Layout = ({ children }) => {
    const location = useLocation();
    return (
        <>
            {location.pathname === "/" ? children : <Sidebar children={children} />}

        </>
    );
};

export default Layout;
