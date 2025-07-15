import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleCartClear = () => {
        dispatch(clearCart());
    }
    return(
        <div className="shadow-md bg-gray-200 m-4">
            <h1 className="text-2xl font-bold text-center">Buy Now</h1>
            <div className="w-6/12 m-auto">
                <button className="m-2 p-2 bg-green-600 text-white shadow-lg cursor-pointer relative left-[120px]"
                    onClick={handleCartClear}
                >Clear Cart</button>
            </div>
            {cartItems.length === 0 && <h2 className="text-2xl font-bold text-center">Cart is Empty</h2>}
            <div className="flex flex-wrap justify-between">
                <ItemList data={cartItems} />
            </div>
        </div>
    )
}

export default Cart;