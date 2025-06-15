import React from "react";
import ReactDOM from "react-dom/client";

//React Element
// const heading = <h1 className="heading">First REACT Page📑</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
//React Fucntional Component
const TitleComponent = () => {
    return <h1 className="heading">This is Title🚀</h1>
}

const number = 1000

//Component Composision
const HeadingComponent = () => {
    return <div className="container">
        <TitleComponent />
        {console.log("we can write console also here")}
        <h1 className="heading">This is Functional Component🚀 { number }</h1>
    </div>
}
root.render(<HeadingComponent />)