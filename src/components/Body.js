import RestaurantCard from "./RestroCard";
import {restaurantList} from "../utils/mockData";
const Body = () => {
    return <div className="body">
        <div className="res-search">
            Search
        </div>
        <div className="res-container">
            {
                restaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))
            }
        </div>
    </div>
}


export default Body;