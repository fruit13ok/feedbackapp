import React from 'react'
// hook, hook also start with the word 'useXY'
// State
// useState
import { useState } from 'react'

function FeedbackItem1() {
    // state has
    // [stateName_getter, function_to_update_state_setter] = useState(inititalize_value)
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of a feedback item')
    // use setState like "setRating()"to change state
    // setRating() can take value or function, 
    // when use function, we can use "prev" to access previous value
    // const handleClick = () => {
    //     setRating((prev) => {
    //         console.log(prev);
    //         return prev + 1
    //     })
    // }
  return (
    // card class already in global css 
    <div className='card'>
        {/* get and set state  */}
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </div>
  )
}

export default FeedbackItem1 