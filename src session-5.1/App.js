import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)