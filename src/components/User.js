import { useState } from "react";
const User = (props) => {
    const [count] = useState(0);
    //we can use props to access the props from parent, we can call like 
    //({name}) this also work
    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h2>Name : {props.name}</h2>
            <h3>Age : 20</h3>
            <h3>Gender : Male</h3>
            <h3>Location : Delhi</h3>
        </div>
    );
}

export default User;