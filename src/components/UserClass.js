import React from "react";

class UserClass extends React.Component {
    //constructor will recive the props
    constructor(props){
        super(props); //to access the props
        console.log("child constructor called");

        //state variable, state is a keyword, it is object contains key value pair
        this.state = {
            count : 0,
            // count2 : 1
            userInfo : {
                name : 'Sindhu',
                location  : "Mysore",
                avatar_url : "dummy-image"
            }
        }
    }

    //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    async componentDidMount(){ 
        // this.timer = setInterval(() => {
        //     this.setState({
        //         count : this.state.count + 1
        //     })
        // }, 1000)
        console.log(this.props.name + " child component did mount called");
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json,
        })
    }

    componentDidUpdate(prevProps, prevState){
        this.timer = setInterval(() => {
            // this.setState({
            //     count : this.state.count + 1
            // })
            console.log("did updated child")
        }, 1000)
        if(this.state.count !== prevState.count){
            console.log("if child component did update called");
        }
        console.log("child component did update called");  // it will  call after the call of did mount
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        //to clean  up code we use component will unmount, it will call quickly when we are leaving a page.
        console.log("child component will unmount called");
    }

    //whenever the class instant created, state will be created
    //envoking = mounting
    //loading a class base componant in our web page (is called mounting), means creating instance of class.
    render(){ //return piece of jsx it will display on the screen
       // const { name } = this.props;// no need to write this.props.name
        // const { count, count2 } = this.state;// destructuring
        const { count } = this.state;
        const { name, location, avatar_url } = this.state.userInfo;
        console.log(this.props.name + " child render called");
        return (
            <div className="user-card">
                <h1>Count : {count}</h1>
                <button onClick={
                    //never update state variable directly, always use setState
                    //this.setState({count : count+1});
                    //this.setState({count : count+1}, () => {});
                    () => {
                        this.setState({count : count+1});//inbuilt keyword setState, it contains the updated value.
                    } //if we want to update with count 2 add it here only no need to create another setState
                    }>Increment</button>
                {/* <h1>Count2 : {count2}</h1> */}
                <img className="avatar-class" src={avatar_url}></img>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                {/* <h3>Gender : Female</h3>
                <h3>Location : Banglore</h3> */}
            </div>
        );
    }
}

export default UserClass;