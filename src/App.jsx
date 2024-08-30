import { useState } from 'react'
import './App.css'
import planDeViajes from './data'
import GridCard from './components/GridCards/GridCards'
import Results from './components/Results/Results'

function App() {
 

  return (
    <>
    <GridCard></GridCard>
    <Results></Results>
   </>
  )
}


export default App
