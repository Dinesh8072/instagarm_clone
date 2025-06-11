import React from 'react'
import LeftPart from './Components/LeftPart'
import Suggestion from './Components/Suggestion'
import Feed from './Components/Feed'

function App() {
  return (
    <div className='d-flex vh-100'>
      <div className='LeftPart w-20'> <LeftPart/> </div>
      <div className="Feed d-flex w-50 "><Feed/></div>
      <div className="Suggestion  w-30"><Suggestion/></div>
    </div>
  )
}

export default App