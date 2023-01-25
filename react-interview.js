// what is react js

a javascript library for building user interfaces created by facebook in may 29 2013

// difference between virtual dom and real dom and shallow dom

Real DOM 

DOM stands for Document Object Model it is the structural representation of all nodes in an HTML document DOM represents the Ul of your applications.  DOM manipulation is required to dynamically change the content of a web page. DOM is an interface that allows the script to update the content, style, and structure of the document

Virtual DOM

VDOM is the virtual representation of Real DOM React update the state changes in Virtual DOM first and then it syncs with Real DOM
Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine
Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory synced with “Real DOM ” by a library such as ReactDOM and this process is called reconciliation

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

this is an uncontrolled component because we use programatic manipulation to handle data

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

// jsx

// babel

// webpack

// redux

// reducer action and store

// middlewares

// data flow in react

// redux thunk vs redux saga

// class components vs functional components

// componentWillUnmount in functional component

// useEffect, useState, useMemo, useCallback, useRef

// lifecycle method

// export default vs export

// portals

// reconciliation

// SSR

// useStrict

// fragments

// react router

// node modules

// local server port

// high order component

// pure components

// state vs props

// context API

// super, render and constructor





