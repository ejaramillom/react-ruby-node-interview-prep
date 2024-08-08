// what is react js

a javascript library for building user interfaces created by facebook in may 29 2013

// difference between virtual dom and real dom and shallow dom

/*
  
Real DOM 

DOM stands for Document Object Model it is the structural representation of all nodes in an HTML document DOM represents the Ul of your applications.  DOM manipulation is required to dynamically change the content of a web page. DOM is an interface that allows the script to update the content, style, and structure of the document

Virtual DOM

VDOM is the virtual representation of Real DOM React update the state changes in Virtual DOM first and then it syncs with Real DOM
Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine
Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory synced with “Real DOM ” by a library such as ReactDOM and this process is called reconciliation

*/

// controlled vs uncontrolled components

this is a controlled component becuase we manage data using state (declarative manipulation)

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit() {
    console.log("Name value: " + name);
    console.log("Email value: " + email);
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input type="submit" value="Submit" />
    </form>
  );
}


// this is an uncontrolled component because we use programatic manipulation to handle data

function App() {
  const nameRef = useRef();
  const emailRef = useRef();

  function onSubmit() {
    console.log("Name value: " + nameRef.current.value);
    console.log("Email value: " + emailRef.current.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" ref={nameRef} required />
      <input type="email" name="email" ref={emailRef} required />
      <input type="submit" value="Submit" />
    </form>
  );
}

// hooks

// a hook is a method used to manipulate react state and lifecycle methods

// jsx

// javascript xml is a syntax extension created to allow javascript include html syntax in its declarations. 

const element = <img src={user.avatarUrl}></img>;

// when we  have a json that includes two tags outside a div separation

return (
  <h2>hi there! </h2>
  <p>this does not work </p>
);

// this does not work in JSX, you cant return more than one "root" JSX element.

// This is also not valid javascript code

return (
  React.createElement('h2', {}, 'Hi there!')
  React.createElement('p', {}, 'This does not work ')
);

// because you cannot return two things from a function by separate

/*
a workaround is using a div to wrap inside the things you want to return
or then you can use an array [] but you have to add "key" attribute to each object
inependently they are a function or an attribute or a JSX object

it does not have to be a div, but this creates the "div soup"
*/

// babel

/*
convert the latest version of JavaScript code into the one that the browser understands. The latest standard version which JavaScript follows is ES2020 which is not fully supported by all the browsers and hence we make use of a tool such as ‘babel’ so that we can convert it into the code that today’s browser understands.
*/

// webpack

/*
javascript library. Webpack is a module bundler that lets you compile JavaScript modules (Files, Images, Fonts, JS, CSS, HTML, etc.). Webpack offers multiple functions, like merging modules, code minimization (or minimizing code by eliminating spaces, remarks, junk code, and code reduction), SASS or TypeScript compiling, integration with npm, and other features.
*/

// redux

/*
a state management system for cross component or app wide state, for example local state state (data) that belongs to single component

eg listening to user input in an input field toggling a show more details field

should be managed component internal with useState/useReducer

cross component state that affects multiple components

eg open closed state in a modal overlay requires 'props chains' or props drilling

app wide state state that affects the entire app

eg user authentication status

requires 'props chains' or 'props drilling'

REDUX SOLVES THE CROSS COMPONENT OR APP WIDE STATE MANAGEMENT

*/

export const BottleDisplay = (props) => {
  return (
    <div>
      <ExportCSV csvData={props.bottlesToDisplay} fileName="bottles" />
      {props.bottlesToDisplay.map((element) => (
        <Tile kind="ancestor" className="App">
          <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification color="light">
              <Heading size={7} renderAs="h6">{element.name}
                <Tag color="dark" className="App"> Drawing </Tag>
                <Tag color="info"> {element.drawing}</Tag>
                <Tag color="dark"> Thread </Tag>
                <Tag color="info"> {element.thread}</Tag>
                <Tag color="dark"> Depth </Tag>
                <Tag color="info"> {element.depth}</Tag>
              <Button
                type="submit"
                color="info"
                onClick={() => {
                  props.addBottleClick(element);
                }}
                size="small"
              >
                Add Bottle
              </Button>
              </Heading>
            </Tile>
          </Tile>
        </Tile>
      ))}
    </div>
  );
}

// reducer action and store

// reducer function --------------------------------

mutates the store data (these are not reducer hooks)

reducer function => mutation => central data => subscription => components

central data => subscription => components

components => dispatch => action => forwarded to reducer

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

// actions ---------------------------------

components trigger certain actions

import { useDispatch } from 'react-redux';

import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice.js'; 

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

// store -------------------------------------

redux has one central data store for states

one store for an entire app

central data => subscription => components

so the subscription sends the state data to the component

components never manipulate the store data!!!

we use reducer function

components => dispatch => action => forwarded to reducer

import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;

// middlewares

The action/reducer pattern is very clean for updating the state within an application. But what if we need to communicate with an external API? Or what if we want to log all of the actions that are dispatched? We need a way to run side effects without disrupting our action/reducer flow.

Middleware allows for side effects to be run without blocking state updates.

// data flow in react

1. An event occurs
2. An action is dispatched
3. Middleware receives the action
4. Reducer creates a new state from the change prescribed by the action
5. New state is passed into the React app via props

unidirectional data flow

state is passed to the view and to child components
actions are triggered by the view
actions can update the state
the state change is passed to the view and to child components

// redux thunk vs redux saga

middleware handling libraries

// class components vs functional components

functional components were widely adopted with the introduction of hooks in react 16.8

class components before react 16.8 were the only way of instantiating components to handle data flow

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function.

// componentWillUnmount in functional component

so, the class based components cannot use hooks, so we use the lifecycle promises

componentDidMount() => it is called once component is mounted (was evaluated and rendered)

it is equivalent to useEffect(..., []) in functional components with empty dependencies

componentDidUpdate() => it is called once component is updated (was re-evaluated and rendered)

it is equivalent to useEffect(..., [someValue]) in functional components with some dependencies included

componentWillUnmount() => called right before component is unmounted (removed from DOM)

it is equivalent a useEffect function with a cleanUp function useEffect(() => return () => {})

// useEffect, useState, useMemo, useCallback, useRef, useSelector, createSlice

useEffect ---------------------------------------

The useEffect Hook allows you to perform side effects in your components.

useEffect(() => {
  fetchMoviesHandler();
}, [fetchMoviesHandler]);

useCallback ------------------------------------

The React useCallback Hook returns a memoized callback function.

Think of memoization as caching a value so that it does not need to be recalculated. This allows us to isolate resource intensive functions so that they will not automatically run on every render. The useCallback Hook only runs when one of its dependencies update.

The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useMemo in the useMemo chapter.

const fetchMoviesHandler = useCallback(async () => {
  setIsLoading(true);
  setError(null);
  try {
    const response = await fetch(
      "https://react-http-59b0a-default-rtdb.firebaseio.com/movies.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    const loadedMovies = [];

    for (const key in data) {
      loadedMovies.push({
        id: key,
        title: data[key].title,
        openingText: data[key].openingText,
        releaseDate: data[key].releaseDate,
      });
    }
    
    setMovies(loadedMovies);
  } catch (error) {
    setError(error.message);    
  }
  setIsLoading(false);
}, []);    

// useRef -------------------------------------

The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

<Card className={classes.input}>
  <form onSubmit={addUserHandler}>
  <label htmlFor="username">Username</label>
  <input
    id="username"
    type="text"
    ref={nameInputRef}

// lifecycle method

// export default vs export

// SSR

// useStrict


// <StrictMode>

Use StrictMode to enable additional development behaviors and warnings for the entire component tree inside:

/*
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
*/
    
// portals

Another issue in react is a semantic problem of making modals thar overlay in an application for example

/*
return (
<>
  <MyModal />
  <MyInputForm />
</>
);

*/
    
this will render

<section>
 <h2> Content from another component</h2>
 <div class="my-modal">
   <h2> Modal title</h2>
 </div>
 <Form>
   <> more content
 </Form>
</section>

so, the modal is a SEMANTIC ERROR because it overlays the application, is like trying to create a button starting from a div, like this

<div onClick={clickHandler}>Click me, i am a bad button </div>

does not mean that because this works, it is a good practice

# PORTALS CHANGE THE LOCATION OF THE MODAL LOCATION IN THE DOM

<div class="my-modal">
  <h2> Modal title</h2>
</div>

<section>
 <h2> Content from another component</h2>
 <Form>
   <> more content
 </Form>
</section>

Something like this

// fragments

# new limitation: the <div> soup

many div are created so many unnecessary divs add no semantic meaning or structure

<div>
  <div>
    <div>
      <div>

many elements and its a bad idea if you have a 1000 elements 

# React fragments

this problem is solved using fragments: We wrap the elements we created on the component with a built in class named React.fragment

return (
  <React.Fragment>
    <h2>Hi there! </h2>
    <h2>Now this works! </h2>
  </React.Fragment>
);

// react router v5

Create React App doesn't include page routing.

React Router is the most popular solution.

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        

// node modules


        
// local server port

        

// high order component

A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.

import React from 'react'
  
const EnhancedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
  
        // Logic here
  
        render() {
            // Pass the callable props to Original component
            return <OriginalComponent name="GeeksforGeeks"  /> 
        }
    }
    // Returns the new component
    return NewComponent
}
  
export default EnhancedComponent;

// pure components

used to avoid re render of component

Now, ReactJS has provided us a Pure Component. If we extend a class with Pure Component, there is no need for shouldComponentUpdate() Lifecycle Method. ReactJS Pure Component Class compares current state and props with new props and states to decide whether the React component should re-render itself or  Not.

import React from ‘react’;
  
export default class Test extends React.PureComponent{
   render(){
      return <h1>Welcome to GeeksforGeeks</h1>;
   }
}

// state vs props

// context API

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

import React, { createContext, useState } from "react";

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    username: "John Doe"
  });

  return (
    <UserContext.Provider value={userDetails}>
      <UserDispatchContext.Provider value={setUserDetails}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserDispatchContext };

function Main() {
  return (
    <div className="dashboardContent">
      <UserProvider>
        <TopNav />
        <Page />
      </UserProvider>
    </div>
  );
}

function Profile() {
  const userDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  return <h1> {userDetails.username} </h1>;
}

      const [userDetails, setUserDetails] = useState({
    username: "John Doe"
});

// super, render and constructor

// react memo

Using memo will cause React to skip rendering a component if its props have not changed.

import { memo } from "react";

const Todos = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);
