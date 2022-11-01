// section 2 lecture
import React from 'react'
// return JSX (javascript xml)
// way to put html into javascript
// JSX require to return a single element, so wrap elements into 1 element
// use fregment <></> element, is a enpty element, so don't show extra <div> in DOM
// JSX use className instead of class for element
// JSX use htmlFor instead of for for label

// this replace the initial h1
function App1() {
    // variable, normally should use state, we will see later
    const title = 'Blog Post'
    const body = 'This is my blog post'
    const conmments = [
        {id: 1, text: 'comment one'},
        {id: 2, text: 'comment two'},
        {id: 3, text: 'comment three'}
    ]

    // conditional
    const loading = false
    const showComments = true
    if(loading) return <h1>Loading...</h1>

    const commentBlock = (
        <div className="comment">
            <h3>Comments ({Comment.length})</h3>
            <ul>
                {conmments.map((comment, index) => (
                    // each child should have unique key prop, so use index or comment.id
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>
        </div>
    )

    // this h1 is JSX
    // return <h1>My App component</h1>
    // return wrap elements
    return (
        <div className="container">
            <h1>My App component</h1>
            {/* using variable with {} */}
            <h2>{title.toUpperCase()}</h2>
            <p>{body} {Math.random() * (5+5)}</p>
            {/* conditional */}
            {/* {showComments ? 'yes' : 'no'} */}
            {/* <div className="comment">
                <h3>Comments ({Comment.length})</h3>
                <ul>
                    {conmments.map((comment, index) => (
                        // each child should have unique key prop, so use index or comment.id
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div> */}
            {/* pull our code in a condition, with () */}
            {/* {showComments ? (
                <div className="comment">
                    <h3>Comments ({Comment.length})</h3>
                    <ul>
                        {conmments.map((comment, index) => (
                            // each child should have unique key prop, so use index or comment.id
                            <li key={index}>{comment.text}</li>
                        ))}
                    </ul>
                </div>
            ) : null} */}
            {/* cleaner by use more variable */}
            {showComments ? (
                commentBlock
            ) : null}
            {/* another condition by use ternary operator, harder to read */}
            {/* {showComments && commentBlock} */}
        </div>
    )

    // this use javascript instead of JSX
    // arguments are: element, list if attributes, inside this element
    // return React.createElement('div', {className: 'container'}, React.createElement('h1', {}, 'My App component'))
}

// export App function to who import it
// index.js will import it
export default App1