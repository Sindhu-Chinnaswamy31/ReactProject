import { useRouteError } from "react-router-dom";
//Returns the nearest ancestor Route error, which could be a loader/action error or a render error. 
// This is intended to be called from your ErrorBoundary/errorElement to display a proper error message.
const Error = () => {
    const err = useRouteError();
    return(
        <div>
            <h1>{err.data}</h1>
        </div>
    )
}

export default Error;