import RestaurantCard from "./RestroCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {SWIGGY_API_URL} from "../utils/contants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// import {restaurantList} from "../utils/mockData";

const Body = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    
    useEffect(()=>{
        fetchData();
    }, [])

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
        </div>
        <div className="flex flex-wrap m-10 sm:justify-center bg-yellow-400">
            {
                listOfRestaurants.map((restaurant) => (
                    <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
                        <RestaurantCard key={restaurant.id} resData={restaurant} />
                    </Link>
                ))
            }
        </div>
    </div>
}

export default Body;