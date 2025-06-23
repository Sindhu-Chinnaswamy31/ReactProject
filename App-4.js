import React from "react";
import ReactDOM from "react-dom/client";

//Session - 2
//React Element
// const heading = <h1 className="heading">First REACT Page📑</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


//Session - 3
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //React Fucntional Component
// const TitleComponent = () => {
//     return <h1 className="heading">This is Title🚀</h1>
// }

// const number = 1000

// //Component Composision
// const HeadingComponent = () => {
//     return <div className="container">
//         <TitleComponent />
//         {console.log("we can write console also here")}
//         <h1 className="heading">This is Functional Component🚀 { number }</h1>
//     </div>
// }
// root.render(<HeadingComponent />)

// Session - 4
const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo-container">
            <div className="logo">
                <img className="logo-image" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"></img>
            </div>
            <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
            </div>
            </div>
        </div>
    );
}

const StyleCard = {
    backgroundColor : "#80808024",
}
const ReastroCard = (props) => {
    // const {resObj} = props; here we have all data of resObj
    // const {resImage, resName, cusine, delivery, rating} = resObj?.data   ?. optional chaining
    return (
        <div className="res-card">
            <div className="res-logo">
                <img className="res-logo-image" src={props.resImage}></img>
            </div>
            <div className="res-name">
                {props.resName}
            </div>
            <h5 className="res-cuisine">{props.cusine}</h5>
            <h5 className="res-delivery">{props.delivery}</h5>
            <div className="res-rating">{props.rating}</div>
        </div>
    );
}  
// we can use dynamic data also
//const resObj = { object }

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res_container">
                {/* if we want to loop data use map */}
                {/* {resList.map((restaurant) => (
                        <RestaurantCard resData={restaurant} />
                    ))}
                */}
                {/* <ReastroCard resData = {resObj} /> */}
                <ReastroCard resImage="https://b.zmtcdn.com/data/pictures/0/18567490/80d708a15629cb73aaae69ab89b1e360.jpg?output-format=webp&fit=around%7C771.75:416.25&crop=771.75:416.25;*,*" resName="Burger Place" cusine="Chinese, Burgers....." delivery="30 Minutes Delivery" rating="4.3 ⭐"/>
                <ReastroCard resImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" resName="KFC Place" cusine="Pizza, Burgers....." delivery="20 Minutes Delivery" rating="3.3 ⭐"/>
                <ReastroCard resImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg" resName="Meghana Biriyani" cusine="Biriyani, South Indian....." delivery="10 Minutes Delivery" rating="4.3 ⭐"/>
                <ReastroCard resImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/12/76d3e89f-2eec-4a04-8c0d-bd82bf153d78_6b7961a1-5a28-482a-a58d-c8e3c03fe112.jpg" resName="Macdonalds" cusine="Pizza, Burgers....." delivery="50 Minutes Delivery" rating="2.3 ⭐"/>
                ¯<ReastroCard resImage="https://b.zmtcdn.com/data/pictures/0/18567490/80d708a15629cb73aaae69ab89b1e360.jpg?output-format=webp&fit=around%7C771.75:416.25&crop=771.75:416.25;*,*" resName="Burger Place" cusine="Chinese, Burgers....." delivery="30 Minutes Delivery" rating="4.3 ⭐"/>
                <ReastroCard resImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" resName="KFC Place" cusine="Pizza, Burgers....." delivery="20 Minutes Delivery" rating="3.3 ⭐"/>
                <ReastroCard resImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg" resName="Meghana Biriyani" cusine="Biriyani, South Indian....." delivery="10 Minutes Delivery" rating="4.3 ⭐"/>
                <ReastroCard resImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/12/76d3e89f-2eec-4a04-8c0d-bd82bf153d78_6b7961a1-5a28-482a-a58d-c8e3c03fe112.jpg" resName="Macdonalds" cusine="Pizza, Burgers....." delivery="50 Minutes Delivery" rating="2.3 ⭐"/>
                <ReastroCard resImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg" resName="Meghana Biriyani" cusine="Biriyani, South Indian....." delivery="10 Minutes Delivery" rating="4.3 ⭐"/>
                <ReastroCard resImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/12/76d3e89f-2eec-4a04-8c0d-bd82bf153d78_6b7961a1-5a28-482a-a58d-c8e3c03fe112.jpg" resName="Macdonalds" cusine="Pizza, Burgers....." delivery="50 Minutes Delivery" rating="2.3 ⭐"/>
            </div>
        </div>
    );
}
const AppLayout = () => {
    return (
        <div className="app" style={StyleCard}> 
            <HeaderComponent />
            <Body />
        </div>
    );
}

// we can use like this also 
{/* <div className="app" style={{backgroundColor : "#80808024"}}>  */}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)