import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";    
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/contants";
const RestroMenuPage = () => {
    const [menu, setMenu] = useState([]);
    const {resId} = useParams();
    
    useEffect(() => {
        //console.log("useEffect called");
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        //console.log(json.data);
        setMenu(json.data);
    }

    if(menu.length === 0) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage, locality, avgRating, totalRatingsString} = menu?.cards[2]?.card?.card?.info;
    const {itemCards} = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log({itemCards});
    return (
        <div className="restro-menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")} </h2>
            <h3>{costForTwoMessage}</h3>
            <h3>{locality}</h3>
            <h3>{avgRating + "⭐"}</h3>
            <h3>{totalRatingsString}</h3>
            <h3>Menu</h3>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100} $</li>
                ))}
            </ul>
        </div>
    )
}

export default RestroMenuPage;