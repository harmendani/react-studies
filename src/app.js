'use strict';

console.log('React is running...');

// JSX
var template = <h1>Hello World @Brazil!</h1>;

/*// Create an element with native js calls
var template = React.createElement(
    'p',
    { id: 'someId' },
    'This is an App build with React!'
)*/

// Get element by id
var appRoot = document.getElementById('app');

// Render element
ReactDOM.render(template, appRoot);