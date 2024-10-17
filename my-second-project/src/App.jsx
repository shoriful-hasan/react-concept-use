import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './work'
import User from './user'
import Team from './friends'

function App() {
  const handleclick = ()=>{
    alert('hellow bangladesh')
  }

  const sum = (num)=>{
    alert(num + 5)
  }

  return (
    <>


<Team></Team>
<User></User>
    <Count></Count>
      <h2>hello user</h2>
      <button onClick={handleclick}>click now</button>
      <button  onClick={()=>{sum(10)}}>second_button</button>
    </>
  )
}

export default App
