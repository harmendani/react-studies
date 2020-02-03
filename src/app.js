'use strict';

console.log('React is running...');

// JSX Sintax
var templateTwo = (

    <div>
        <h1>Pedro Harmendani</h1>
        <p>Age: 24</p>
        <p>Location: Minas Gerais, Brazil.</p>
    </div>
)

// Get element by id
var appRoot = document.getElementById('app');

// Render element
ReactDOM.render(templateTwo, appRoot);