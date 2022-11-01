import React from 'react'
import PropTypes from 'prop-types';

// this card component is made to reuse many time
// good for build a container with style
// the prop children is anything that is going to display
// the prop reverse is in css file
function Card({children, reverse}) {
  return (
    // this class will look in to css file for card.reverse style
    // use template string
    // card class will always use, reverse is a condition, if prop reverse is true also use reverse class
    // <div className='card reverse'>

    // conditional class
    // <div className={`card ${reverse ? `reverse` : null}`}>
    // <div className={`card ${reverse && `reverse`}`}>
    //   {children}
    // </div>

    // conditioknal style
    <div 
        className='card' 
        style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#000'
        }}
    >
        {children}
    </div>
  )
}

Card.defaultProps = {
    reverse: false
}
Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}
// {showComments ? 'yes' : 'no'}
export default Card
