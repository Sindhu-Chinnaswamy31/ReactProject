import RestaurantCard from "./RestroCard";
import {useState} from "react";
import {restaurantList} from "../utils/mockData";
const Body = () => {
    //React hook normal javascript function, it is a utility function it give us some utility.
    //Local State variable - super powerfull variable  
    //When ever the state variable changes, the react component will re-render  
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

    return <div className="body">
        <div className="res-search">
            <button className="res-filter-btn" 
            onClick={() => {
                const filteredRestaurants = listOfRestaurants.filter(
                  (res) => res.data.avgRating > 4
                );
                setListOfRestaurants(filteredRestaurants);//updating the state
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {
                listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))
            }
        </div>
    </div>
}


export default Body;