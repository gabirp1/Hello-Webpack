import add ,{substraction, multiply, division } from './app-utils.js'

import React from 'react'

import ReactDOM from 'react-dom'



console.log('hola desde app');


console.log(add(2,3));
console.log(substraction(2,3));
console.log(multiply(2,3));
console.log(division(2,3));

const HolaApp= ()=>{
    return <h2>Hola que tal</h2>
}  

ReactDOM.render(<HolaApp/>,document.querySelector('#appRoot'))