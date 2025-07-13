import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";    
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/contants";
import useRestrurantMenu from "../utils/useRestrurantMenu";
import { resInfo } from "../utils/menuData"; //resInfo from "../utils/menuData";
import ResCategory from "./ResCategory";
import { RecommendedMenu } from  "../utils/RecommendedMenu";

const RestroMenuPage = () => {
    const [menu, setMenu] = useState(resInfo);
    const {resId} = useParams(); // utility functions
    const [showIndex, setShowIndex] = useState(null);
    // const resInfo = useRestrurantMenu(resId);
    console.log(resInfo);
    
    //trying to abstract the code of useEffect
    // useEffect(() => {
    //     //console.log("useEffect called");
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_URL + resId);
    //     const json = await data.json();
    //     //console.log(json.data);
    //     setMenu(json.data);
    // }

    if(resInfo === 0) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage, locality, avgRating, totalRatingsString} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const category = RecommendedMenu.REGULAR.cards;
    console.log({itemCards});
    return (
        <div className="restro-menu max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>

            <div className="text-gray-600 space-y-1 mb-6">
            <h2 className="text-lg">{cuisines.join(", ")}</h2>
            <h3 className="text-md">{costForTwoMessage}</h3>
            <h3 className="text-md">{locality}</h3>
            <h3 className="text-md text-yellow-500 font-semibold">{avgRating} ⭐</h3>
            <h3 className="text-md text-gray-500">{totalRatingsString}</h3>
            </div>

            {category.map((category, index) => (
                <ResCategory key={index} data={category.card} 
                showItemsData={showIndex === index ? true : false}
                setShowIndex={() => showIndex === index ? setShowIndex(null) : setShowIndex(index)}/>
            ))}

            <h3 className="text-2xl font-semibold mb-3 border-b pb-1 border-gray-200">Menu</h3>

            <ul className="space-y-2">
            {itemCards.map((item) => (
                <li
                key={item.card.info.id}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-md hover:bg-gray-100 transition"
                >
                <span className="font-medium text-gray-800">{item.card.info.name}</span>
                <span className="text-gray-700 font-semibold">₹{item.card.info.price / 100}</span>
                </li>
            ))}
            </ul>
        </div>
        );

}

export default RestroMenuPage;