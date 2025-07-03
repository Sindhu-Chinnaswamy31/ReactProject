import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestroMenuPage from "./components/RestroMenuPage";

//  function Outlet(props: OutletProps): React.ReactElement | null
// import Outlet
// Renders the child route's element, if there is one.
const StyleCard = {
    backgroundColor : "#80808024",
}

const AppLayout = () => {
    return (
        <div className="app" style={StyleCard}> 
            <HeaderComponent />
            <Outlet />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/>, //mainpage
        children:[
            {
                path: "/",
                element : <Body/>
            },
            {
                path: "/about",
                element : <About/>
            },
            {
                path: "/contact",
                element : <ContactUs/>
            },
            {
                path: "/cart",
                element : <Cart/>
            },
            {
                path: "/restaurant/:resId",  // :id used for dynamic routing
                element : <RestroMenuPage/>
            }
        ],
        errorElement : <Error/>
    },  
]);//information about routes, it takes list of path(array of objects)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)