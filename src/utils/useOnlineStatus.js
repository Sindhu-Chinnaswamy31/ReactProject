import { useEffect, useState } from "react";

const useOnlinestatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    //check if the suer is online or not, it wull return online status
    //online status is boolean
    //caller : where ever the hook is been used.
    useEffect(() => {
        window.addEventListener("online", () => {
            console.log("online");
            setOnlineStatus(true);
        });
        window.addEventListener("offline", () => {
            console.log("offline");
            setOnlineStatus(false);
        });
    }, []);

    return onlineStatus;

}

export default useOnlinestatus;