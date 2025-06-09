// const heading = React.createElement("h1",{id:"heading"},"First REACT Page");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// create multiple element

const parent = React.createElement("div",{id:"parent"},
    [
    React.createElement("div",{id:"child1"},
        React.createElement("h1",{id:"heading1"},"First REACT Page")
    ),
    React.createElement("div",{id:"child2"},
        [
        React.createElement("h2",{id:"heading2"},"Second REACT Page1"),
        React.createElement("h3",{id:"heading3"},"Second REACT Page2")
        ]
    )
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    parent  
)