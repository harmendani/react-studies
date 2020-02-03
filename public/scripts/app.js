'use strict';

console.log('React is running...'); // JSX Sintax

var template = React.createElement("div", null, React.createElement("h1", null, "Hello World @Brazil!"), React.createElement("p", null, "There are new info today!"), React.createElement("ol", null, React.createElement("li", null, "Item One"), React.createElement("li", null, "Item Two"))); // Get element by id

var appRoot = document.getElementById('app'); // Render element

ReactDOM.render(template, appRoot);
