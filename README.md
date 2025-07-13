# Namaste React 🚀


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles



# Namaste Food


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



 Two types of Export/Import


- Default Export/Import

export default Component;
import Component from "path";


- Named Export/Import

export const Component;
import {Component} from "path";


# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
- useEffect()



#  2 types Routing in web apps
 - Client Side Routing
 - Server Side Routing




 # Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action)
  - Selector


# Types of testing (devloper)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e testing

# Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel 
 - Configure Parcel Config file to disable default babel transpilation 
 - Jest  - npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom


react-router-dom@7.6.3 does not export RouterProvider or createBrowserRouter — because v7 is a completely new experimental release and not compatible with v6.x APIs.
npm install react-router-dom@6.23.0 react-router@6.23.0


- in classs component first constructor will call later render method will call.
- when the parent component will loaded
 - contructor will call then render will call so their it will see the child component and it will trigger the child life cycle after compliting the mounted of children after that parent did mount will call
    - Parent constructor called
    - Parent render called
    - child constructor called
    - child render called
    - child component did mount called
    - parent component did mount called

  - component did mount use : is used to make API calls.
  - when we have two child component
    Parent constructor called
    Parent render called
    child constructor called
    First child render called
    child constructor called
    Second child render called
    First child component did mount called
    Second child component did mount called
    parent component did mount called
  - why this is happing means
    1) constructor will call, then render will call it will update the DOM, once Dom loaded then didmount will call. -> Mounting Life Cycle Method.
    2) React will batch the render phase of child's component -> optimisation of react -> commit phase will be batched.thats why output will be in this order.

  - Life cycle methods:
    -> mounting -> 1 execute
    -> update -> 2 execute
    -> unmount -> when the component disaper from the html. -> 3 execute


    - when we break our code as small small component/utilities, we test small smal test cases. if all the testcase pass.
    - reusable, maintanable, testable.
    - single responsiblity principle.(no hard nad fast rule)
    - custome hooks: special js function given by react.
      - hooks are utility functions.
      - why to create custome hook : it is not mandatory but it is good practice.


- install tailwind for css(style)
  - npm install -D tailwindcss postcss autoprefixer
  - npx tailwindcss init
  -   .postcssrc.json // create file in root path
      {
        "plugins": {
          "tailwindcss": {}
        }
      }
  - /src/style.css // create file inside src
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  - tailwind.config.js
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}"
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
  - import './styles.css'; /    <link href="/dist/output.css" rel="stylesheet">


session - 11
- Higher order component is a function that takes a component and return a component.
      


 