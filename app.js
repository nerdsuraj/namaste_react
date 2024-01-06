// const heading = React.createElement('h1', {id:"head"}, "Namaste React from using the react!!!!");

// const parent = React.createElement('div', { id: "parent" }, React.createElement('div', { id: "child" }, React.createElement('h1', { }, "this is call child and parent!!!")));


import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement('div', { id: "parent" }, React.createElement('div', { id: "child" }, [React.createElement('h1', {}, "this is h1 tag !"),React.createElement('h2', {}, "this is h2 tag!!!")]));


console.log("🚀 ~ file: app.js:4 ~ parent:", parent) //its a object

//jsx code transform into javascript code by ---> parcel ---> babel

// JSX ==> React.createElement  ==> React.createElement_JS Object ==> HTMLElement(render)
const jsxheading =  (<h1 id="head">Namaste React from using the react!!!!  </h1> )

//create the react function component
const Heading = () => (<h1 id="head">Namaste React from using the react!!!! {elem} </h1>  )

const elem = <span>hello</span>
const numbbers = 10000;

const HrChild = () => ( 
    <div>
        <h1 id="head">Namaste React from using child!!!</h1>
        <h3>{elem}</h3>
        <h2>{numbbers}</h2>
        <Heading />
        <Heading ></Heading>
        {Heading()}
    </div>
)




const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxheading);


//if we render it
root.render(<HrChild/>);