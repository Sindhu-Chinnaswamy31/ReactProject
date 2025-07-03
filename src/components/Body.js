import RestaurantCard from "./RestroCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {SWIGGY_API_URL} from "../utils/contants";
import {Link} from "react-router-dom";
const Body = () => {
    //React hook normal javascript function, it is a utility function it give us some utility.
    //Local State variable - super powerfull variable  
    //When ever the state variable changes, the react component will re-render  
    // const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
    const [searchQuery, setSearchQuery] = useState('');
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    //when ever state variable update, react triggers a re-render of the component

    // synatx of useEffect hook
    // useEffect(() => {
    //     console.log("useEffect called")}, 
    // []);
    // arraow(call back function), dependency array are two params pass to useEffect hook
    //callback function will after the initial render of the component and also on re-renders if there is a change in the dependency array
    //useEffect hook will run only once after the initial render of the component and also on re-renders if there is a change in the dependency array
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async() => {
        //to avoid cross error without extension use below link
        // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

        const data = await fetch(
            SWIGGY_API_URL
        ); // give us from js engine, Fetch will retrun promise
        const json = await data.json();
        //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //optional chaning
        const resData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const filteredRestaurants = resData.filter(
           (res) => res.info.avgRating > 4
        );
       setListOfRestaurants(filteredRestaurants);
    }

    //conditional rendering : rendering based on condition
    if(listOfRestaurants.length === 0){
        return <Shimmer/>
    }

    return <div className="body">
        <div className="res-filter-search">
            <div className="res-filter">
                <button className="res-filter-btn" 
                onClick={() => {
                    const filteredRestaurants = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.5
                    );
                   setListOfRestaurants(filteredRestaurants);//updating the state
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-filter">
                <input type="text" className="search-input" placeholder="Search" value={searchQuery} onChange={(event) => {
                    const query = event.target.value;
                    setSearchQuery(query);
                    const filteredRestaurants = listOfRestaurants.filter((res) =>
                        res.info.name.toLowerCase().includes(query.toLowerCase())
                    );
                    setListOfRestaurants(filteredRestaurants);
                }}/>
            </div>
        </div>
        <div className="res-container">
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