import React from 'react'
import ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom/client'
// this is global css file
import './index.css'
// App is the root component (entry point)
import App from './App'

// 1, h1 placeholder
// ReactDOM has render function to render a element and send to a callback function
// in this case put h1 element into our main div with id name root
// now page will show My App
// next we will render our App component
// ReactDOM.render(<h1>My App</h1>, document.getElementById('root'))

// 2, App component
// React have root component name App, App component is the entry point,
// create App.js in src/
// component can be either class (old) or function (new use hook for states and life cycle).
// App.js return JSX
// now replace the old code of rendering h1 to our App component
// now the page change the display text
ReactDOM.render(<App />, document.getElementById('root'))

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)