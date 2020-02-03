'use strict';

console.log('React is running...'); // JSX Sintax

var templateTwo = React.createElement("div", null, React.createElement("h1", null, "Pedro Harmendani"), React.createElement("p", null, "Age: 24"), React.createElement("p", null, "Location: Minas Gerais, Brazil.")); // Get element by id

var appRoot = document.getElementById('app'); // Render element

ReactDOM.render(templateTwo, appRoot);
