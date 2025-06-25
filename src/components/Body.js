import RestaurantCard from "./RestroCard";
import {useState} from "react";
import {restaurantList} from "../utils/mockData";
const Body = () => {
    //React hook normal javascript function, it is a utility function it give us some utility.
    //Local State variable - super powerfull variable  
    //When ever the state variable changes, the react component will re-render  
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
    const [searchQuery, setSearchQuery] = useState('');

    return <div className="body">
        <div className="res-filter-search">
            <div className="res-filter">
                <button className="res-filter-btn" 
                onClick={() => {
                    const filteredRestaurants = listOfRestaurants.filter(
                    (res) => res.data.avgRating > 4
                    );
                    setListOfRestaurants(filteredRestaurants);//updating the state
                }}>Top Rated Restaurants</button>
            </div>
            <div classname="res-filter">
                <input type="text" className="search-input" placeholder="Search" value={searchQuery} onChange={(event) => {
                    const query = event.target.value;
                    setSearchQuery(query);
                    const filteredRestaurants = restaurantList.filter((res) =>
                        res.data.name.toLowerCase().includes(query.toLowerCase())
                    );
                    setListOfRestaurants(filteredRestaurants);
                }}/>
            </div>
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