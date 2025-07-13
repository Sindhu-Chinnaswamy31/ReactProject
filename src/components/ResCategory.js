import ItemList from "./itemList";
import { useState } from "react";
const ResCategory = ({data, showItemsData,setShowIndex}) => {

    // const [showItems, setShowItems] = useState(showItemsData);
    const handleClick = () => {
       setShowIndex();
    }
    return (
        <div>
            <div className="w-full bg-gray-50 shadow-lg p-4 my-4 flex flex-wrap cursor-pointer"
            onClick={handleClick}>
                <span className="font-bold text-lg">
                    {data.card.title} ({data.card.itemCards.length})
                </span>
                <span className="text-lg cursor-pointer ml-auto">{showItemsData ? "⬆️" : "⬇️"}</span>
                {showItemsData && <ItemList data={data.card.itemCards}/> }
            </div>
        </div>
    )
}

export default ResCategory;