'use strict';

console.log('React is running...');

// JSX
// <p>This is an App build with React!</p>

// Create an element
var template = React.createElement(
'p',
{id: 'someId'},
'This is an App build with React!'
)

// Get element by id
var appRoot = document.getElementById('app');

// Render element
ReactDOM.render(template, appRoot);