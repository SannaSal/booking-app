import React from 'react'
import {useState} from 'react';
import './App.css';

const time = ['08:00','09:00','10:00','14:00','15:00']

function Times(props) {
  const [event, setEvent] = useState(null)
  const [info, setInfo] = useState(false)

  function displayInfo(e) {
    setInfo(true);
    setEvent(e.target.innerText);
  }

  return (
    <div className="times"> 
      {time.map(times => {
        return (
          <div>
            <button 
              onClick={(e)=> displayInfo(e)}
            > 
              {times} 
            </button>
          </div>
        )
      })}
      <div>
        {info ? <h4>Olet valinnut ajan: klo {event} {props.date.toLocaleString("fi-FI", {day:'numeric', month:'numeric', year:'numeric'})}</h4> : null}
      </div>
    </div>
  )
}

export default Times;