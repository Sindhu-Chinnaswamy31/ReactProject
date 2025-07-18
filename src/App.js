import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestroMenuPage from "./components/RestroMenuPage";
import Shimmer from "./components/Shimmer";
import '../index.css';
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";
//  function Outlet(props: OutletProps): React.ReactElement | null
// import Outlet
// Renders the child route's element, if there is one.
const StyleCard = {
    backgroundColor : "#80808024",
}

//chunking
//code splitting
//lazy loading : when a component is not used it will not load.
//Dynamic Bundling
//on demand loading
//lazy() is a named export
const Grocery = lazy( () => {
    //here import is a function and take the path of the grocery as params
    return import("./components/Grocery");
});

const About = lazy( () => {
    return import("./components/About");
});

const AppLayout = () => {
    //authentication
    const [userName, setUserName] = useState('');

    useEffect(() => {
        //Make API call and send result to setUserInfo
        const data = {
            name : "Sindhu",
            email : "tF6tL@example.com"
        };
        setUserName(data.name);
    }, [])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>  
                <div className="app" > 
                    {/* <UserContext.Provider value={{loggedInUser: "Gurshreetha"}}>   */}
                        <HeaderComponent />
                    {/* </UserContext.Provider> */}
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
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
                element : <Suspense fallback={<Shimmer/>}> <About/></Suspense>
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
            },
            {
                path: "/grocery",
                element : <Suspense fallback={<Shimmer/>}> <Grocery/></Suspense>
            }
        ],
        errorElement : <Error/>
    },  
]);//information about routes, it takes list of path(array of objects)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)