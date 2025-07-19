import React from 'react'
import Header from "./components/Header"
import BlockOne from './components/BlockOne';
import BlockTwo from './components/BlockTwo'
import BlockThree from "./components/BlockThree"
import BlockFour from "./components/BlockFour"
const App = () => {
  return (
    <div>
      <Header/>
      <BlockOne/>
      <BlockTwo/>
      <BlockThree/>
      <BlockFour/>
    </div>
  )
}

export default App
