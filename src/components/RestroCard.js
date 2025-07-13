import {CDN_URL} from "../utils/contants"

//3. Restaurant Card
const RestroCard = (props) => {
    const {resData} = props;
    const data = resData.data || resData.info || {};
    return (<div className="m-4 p-4 w-[250px] h-[380px] hover:shadow-2xl bg-gray-200">
        {<img className="rounded-lg w-[200px] h-[140px] m-1 p-1 relative bottom-4 left-1" src={CDN_URL+data.cloudinaryImageId}/>}
        <h3 className="font-bold py-1 text-lg">{data.name}</h3>
        <h4 className="text-lg">{data.cuisines.join(", ")}</h4>
        <h4 className="text-lg">{data.costForTwo}</h4>
        <h4 className="text-lg">{data.deliveryTime} mins</h4>
        <h4 className="text-lg">{data.avgRating} ⭐</h4>
    </div>);
}

//Higher order component
//input - RestroCard => RestrocardPromoted.

export const withPromotedLabel = (RestroCard) => {
    return (props) => {
        return(
            <div className="relative">
                <label className="absolute bg-black text-white m-2 p-2 m-2 z-10 rounded-sm">Promoted</label>
                <RestroCard {...props}/>
            </div>
        )
    }

}

export default RestroCard;