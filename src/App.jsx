import { useState } from 'react'

import './App.css'
import PostForm from './PostForm'
import Cursor from './Cursor'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cursor />
   <PostForm/ >

    </>
  )
}

export default App
