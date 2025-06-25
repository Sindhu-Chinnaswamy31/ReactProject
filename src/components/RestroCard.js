import {CDN_URL} from "../utils/contants"

//3. Restaurant Card
const RestroCard = (props) => {
    const {resData} = props;

    return (<div className="res-card">
        {<img className="res-logo-image" src={CDN_URL+resData.data.cloudinaryImageId}/>}
        <h3 className="res-name">{resData.data.name}</h3>
        <h4 className="res-cuisine">{resData.data.cuisines.join(", ")}</h4>
        <h4 className="res-delivery">₹{resData.data.costForTwo/100} FOR TWO</h4>
        <h4 className="res-deliveryTime">{resData.data.deliveryTime} mins</h4>
        <h4 className="res-rating">{resData.data.avgRating} ⭐</h4>
    </div>);
}

export default RestroCard;