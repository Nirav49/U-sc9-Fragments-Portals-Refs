import React, { useRef } from 'react'

const App = () => {
  const refs = useRef(null);
  const clicks = () => {
    refs.current.style.color = "red"
    refs.current.focus();
    refs.current.style.display = 'none';
  }
  return (
    <div>
      <center>
        <label>Type Something.</label><br />
        <input type="Text" ref={refs}></input>
        <button onClick={() => { clicks() }}>Click</button>
      </center>
    </div>
  )
}

export default App
