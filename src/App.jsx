import { useState } from 'react'

function App(props) {

  const setUser = (name) => {
    props.setUsername(name)
    console.log(props.user)
  }

  return (
    <div className="App">
      <header className="App-header">
        Hello {props.username}
        <button onClick={()=>setUser('Jay')}>Click</button>
      </header>
    </div>
  )
}

export default App
