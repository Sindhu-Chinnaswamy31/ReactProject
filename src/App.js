import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";

const StyleCard = {
    backgroundColor : "#80808024",
}

const AppLayout = () => {
    return (
        <div className="app" style={StyleCard}> 
            <HeaderComponent />
            <Body />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/> //mainpage
    },  
    {
        path: "/about",
        element : <About/>
    },
]);//information about routes, it takes list of path(array of objects)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)