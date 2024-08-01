import './App.css';
import { useState } from 'react';
import Header from "./components/header"
import Main from "./components/main"

function App() {
  let [showText, setShowText] = useState(true)
  let text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nulla doloremque harum dolorum earum sapiente error et ratione commodi. Distinctio officia recusandae similique libero accusamus. Velit consectetur aut repellat fugiat?"
  let maxLength = 50
  const handelClick = () =>{
    setShowText(!showText)
  }
  return (
    <div className="App" style={{  }}>
      {/* <Header/>
      <Main/> */}
      <div className='textdiv'>
        <p>
          {showText?text.slice(0,maxLength):text}
        </p>
        <span onClick={handelClick}>{showText?"More":"Less"}</span>
      </div>
    </div>
  );
}

export default App;
