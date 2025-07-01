import {CDN_URL} from "../utils/contants"

//3. Restaurant Card
const RestroCard = (props) => {
    const {resData} = props;
    const data = resData.data || resData.info || {};
    console.log(data)
    return (<div className="res-card">
        {<img className="res-logo-image" src={CDN_URL+data.cloudinaryImageId}/>}
        <h3 className="res-name">{data.name}</h3>
        <h4 className="res-cuisine">{data.cuisines.join(", ")}</h4>
        <h4 className="res-delivery">{data.costForTwo}</h4>
        <h4 className="res-deliveryTime">{data.deliveryTime} mins</h4>
        <h4 className="res-rating">{data.avgRating} ⭐</h4>
    </div>);
}

export default RestroCard;