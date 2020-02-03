'use strict';

console.log('React is running...');

// JSX Sintax
var template = (
    <div>
        <h1>Hello World @Brazil!</h1>
        <p>There are new info today!</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

// Get element by id
var appRoot = document.getElementById('app');

// Render element
ReactDOM.render(template, appRoot);