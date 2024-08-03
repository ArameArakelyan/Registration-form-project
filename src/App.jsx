import './App.css';
import { useState } from 'react';
import { text } from './comp';
import { maxLength } from './comp';

function App() {
  let [showText, setshowText] = useState(true)
 function show() {
    setshowText(!showText)
}
let [isDark, setIsDark] = useState(true)
function makeDark(params) {
  setIsDark(!isDark)
}
  return (
    <div className="App" style={{background:isDark?"white":"black", transition: "1s"}}>
      <button className='btn' onClick={makeDark} >{isDark?"Dark":"Light"}</button>
      <div className='textarea' style={{color:isDark?"black":"white",  transition: "1s"}}>
        <h1>Information</h1>
        <p>{showText?text.slice(0,maxLength):text}</p>
        <span onClick={show} style={{color:"red", cursor:'pointer'}}>{showText?"More":"Less"}</span>
      </div>
    </div>
  );
}

export default App;
