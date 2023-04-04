import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListGroup from '../../componentes/ListGroup'

function App() {
  const [count, setCount] = useState(0)
  return (
    <ListGroup/>
  );
}

export default App
