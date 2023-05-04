import './App.css';
import Times from './Times.js'
import React from 'react'

function Time(props) {
 
  return (
    <div>
      {props.showTime ?<h4>{props.date.toLocaleString("fi-FI", {day:'numeric', month:'numeric', year:'numeric'})}</h4> : null}
      {props.showTime ? <h3>2. Valitse aika:</h3> : null}
      {props.showTime ? <Times date={props.date}/> : null}
    </div>
  )
}

export default Time;