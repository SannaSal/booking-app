import { useState } from 'react';
import Calendar from 'react-calendar';
import Time from './Time.js';
import './App.css';

function App() {
  const [ date, setDate ] = useState(new Date())
  const [ showTime, setShowTime ] = useState(false)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Ajanvaraus</h1>
      </header>
      <main> 
        <div>
          <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
        </div>
        <div className='time-container'>
          <h3>1. Valitse päivä</h3>
          <Time showTime={showTime} date={date}/>
        </div>
      </main>
      <footer>
        Page created by Sanna
      </footer>
    </div>
  );
}

export default App;
