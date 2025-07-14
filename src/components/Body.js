import RestaurantCard, { withPromotedLabel } from "./RestroCard";
import {useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import {SWIGGY_API_URL} from "../utils/contants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import {restaurantList} from "../utils/mockData";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
    const RestrocardPromoted = withPromotedLabel(RestaurantCard);
    // useEffect(()=>{
    //     fetchData();
    // }, [])

    const fetchData = async() => {
        const data = await fetch(
            SWIGGY_API_URL
        ); // give us from js engine, Fetch will retrun promise
        const json = await data.json();

        //optional chaning
        const resData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const filteredRestaurants = resData.filter(
           (res) => res.info.avgRating > 4
        );
       setListOfRestaurants(filteredRestaurants);
    }

    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus)

    if(onlineStatus === false){
        return <h1>Offline, please check your internet connection</h1>
    }

    const { loggedInUser, setUserName } = useContext(UserContext);

    //conditional rendering : rendering based on condition
    if(listOfRestaurants.length === 0){
        return <Shimmer/>
    }

    return <div className="body">
        <div className="flex justify-center align-baseline items-center">
            <div className="res-filter">
                <button className="p-2 m-2 bg-gray-200 rounded-lg" 
                onClick={() => {
                    const filteredRestaurants = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.5
                    );
                   setListOfRestaurants(filteredRestaurants);//updating the state
                }}>Top Rated Restaurants</button>
            </div>
            <div className="m-4 p-2">
                <input type="text" className="relative top-0 bottom-200 border border-black m-4 p-2 w-200" placeholder="Search" value={searchQuery} onChange={(event) => {
                    const query = event.target.value;
                    setSearchQuery(query);
                    const filteredRestaurants = listOfRestaurants.filter((res) =>
                        res.info.name.toLowerCase().includes(query.toLowerCase())
                    );
                    setListOfRestaurants(filteredRestaurants);
                }}/>
            </div>
            <div className="m-4 p-2">   
                <label className="relative top-0 bottom-200 m-2 p-2 w-200">User Name: </label>
                <input
                    type="text"
                    className="relative top-0 bottom-200 border border-black m-4 p-2 w-200"
                    value={loggedInUser}
                    onChange={(event) => setUserName(event.target.value)}
                />
            </div>
        </div>
        <div className="flex flex-wrap m-10 sm:justify-center">
            {
                listOfRestaurants.map((restaurant) => (
                    <Link to={`/restaurant/${restaurant.data.id}`} key={restaurant.data.id}>
                        {restaurant.data.promoted ?( 
                            <RestrocardPromoted resData={restaurant} />
                        ) : (
                            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                        )}
                    </Link>
                ))
            }
        </div>
    </div>
}

export default Body;