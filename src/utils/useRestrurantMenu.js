import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/contants";
const useRestrurantMenu = (resId) => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        const fetchMenu = async () => {
            const data = await fetch(MENU_URL + resId);
            const json = await data.json();
            console.log(json.data);
            setMenu(json.data);
        }
        fetchMenu();
    }, []);
    return menu;
}

export default useRestrurantMenu;