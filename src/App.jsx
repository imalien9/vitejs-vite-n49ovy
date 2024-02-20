import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const fxx = "oops";
  function LogoVite(){
    return (<img src={viteLogo} className="logo" alt="Vite logo" />)
  }
  function Card(props){
    return (
      <div>
        <div>名字：{props.name}</div>
        <div>性別：{props.gender}</div>
      </div>
    )
  }
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
          <LogoVite></LogoVite>
          <LogoVite></LogoVite>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <p>{fxx}</p>
      <Card name="Ray" gener="男"></Card>
    </>
  )
}

export default App
