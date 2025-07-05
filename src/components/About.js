import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
//we can aslo use like this inseted of React.Component
//Class component
class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent constructor called");
    }

    async componentDidMount(){ 
        console.log("parent component did mount called");
    }
    
    render(){
        console.log("Parent render called");
        return(
            <div>
                <h1>About Us</h1>
                <h4>This is out About Us page</h4>
                {/* <User name={"Ankitha nagraj"}/> */}
                <UserClass name={"Shany agarwal"} />
                {/* <UserClass name={"Chaithanya agarwal"} /> */}
            </div>
        )
    }
}

//Functional component
// const About = () => {
//     return(
//         <div>
//             <h1>About Us</h1>
//             <h4>This is out About Us page</h4>
//             {/* <User name={"Ankitha nagraj"}/> */}
//             <UserClass name={"Shany agarwal"} />
//         </div>
//     )
// }

export default About;