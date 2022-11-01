// component can be .js or .jsx
// I installed extension "ES7 React/Redux/GraphQL/React-Native snippets"
// so I can type "rfce" then tab to generate template code
import React from 'react'
// PropTypes, props can have type, (not useful, we can use typescript, or just don't use type)
import PropTypes from 'prop-types'


// Props are like argument that can pass to component
// we can add inline style for individual component, with {}
// any CSS that use hyphrn "x-y", in javascrip use camel case "xY"
// we can use destructure {}, but I need to aware which object I am destructuring and its properties
// function Header({text, bgColor, textColor}) {
function Header(props) {
    const headerStyle = {
        backgroundColor: props.bgColor, 
        color: props.textColor
    }
  return (
    // use inline style, put style in variable
    // <header style={{backgroundColor: 'blue', color: 'red'}}>
    <header style={headerStyle}>
      <div className="container">
      {/* <h2>Feedback UI</h2> */}
      <h2>{props.text}</h2>
      </div>
    </header>
  )
}

// default props incase no props passing in
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}
// specify PropTypes, call with lower case "propTypes", specify with upper case "PropTypes"
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}
export default Header
