import React from 'react'

export default (props) => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        { props.children }
    </div>
)


// function Car() {             ES5
//     return (
//         <div>This is car component</div>
//     )
// }

// const car = () => {
//     return (
//         <div>This is car component</div>
//     )
// }

// const car = ()=> (
//     <div>
//         This is car component
//         <strong>test</strong>
//     </div>
// )