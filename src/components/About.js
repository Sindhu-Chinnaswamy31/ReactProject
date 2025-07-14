import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from '../utils/UserContext';

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
            <div className="shadow-md bg-gray-200 m-4">
                <h1 className="text-2xl font-bold text-center">About Us</h1>
                <h4 className="text-2xl text-center">This is out About Us page</h4>
                {/* <User name={"Ankitha nagraj"}/> */}
                <UserClass name={"Shany agarwal"} />
                {/* <UserClass name={"Chaithanya agarwal"} /> */}
                <h2 className="text-2xl font-bold text-center">
                   <UserContext.Consumer>
                    {
                        (data) => {
                            return <p>Hello {data.loggedInUser}</p>
                        }
                    }
                    </UserContext.Consumer>
                 </h2>
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