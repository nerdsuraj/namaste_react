// const heading = React.createElement('h1', {id:"head"}, "Namaste React from using the react!!!!");



// const parent = React.createElement('div', { id: "parent" }, React.createElement('div', { id: "child" }, React.createElement('h1', { }, "this is call child and parent!!!")));


const parent = React.createElement('div', { id: "parent" }, React.createElement('div', { id: "child" }, [React.createElement('h1', {}, "this is h1 tag !"),React.createElement('h2', {}, "this is h2 tag!!!")]));


console.log("🚀 ~ file: app.js:4 ~ parent:", parent) //its a object


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);