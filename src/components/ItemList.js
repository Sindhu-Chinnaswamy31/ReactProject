import { CDN_URL } from "../utils/contants";    
const ItemList = ({data, dummy_data}) => {
    console.log(data)
    return (
        <div>
            {data.map((item, index) => {
                return (
                    <div
                        key={item.card.info.id} 
                        className="m-20 p-2 border-gray-200 border-b-2 text-left flex">
                            <div className="w-3/12 p-4">
                                <div className="absolute"> 
                                    <button className="my-20 p-1 m-6 bg-green-600 text-white shadow-lg">
                                        Add +
                                    </button> 
                                </div>
                                <img className="w-[500px]" src={CDN_URL+item.card.info.imageId}/>
                            </div>
                            <div>
                                <div className="py-2">
                                    <span className="font-bold p-2">{item.card.info.name}</span>
                                    <span className="float-right p-2">$ {item.card.info.price/100}</span>
                                </div>
                                <p className="text-xs p-2">{item.card.info.description}</p>
                                <p className="text-xs p-2">{dummy_data}</p>
                            </div> 
                    </div>
                )
            })}
        </div>
    );
}

export default ItemList;