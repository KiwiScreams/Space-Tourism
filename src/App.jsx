import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/home/Home'
import Destination from './pages/destination/Destination'
import Crew from './pages/crew/Crew'
import Technology from './pages/technology/Technology'
import Header from './components/header/Header'
import Mars from './pages/destination/destination-components/Mars'
import Moon from './pages/destination/destination-components/Moon'
import Europa from './pages/destination/destination-components/Europa'
import Titan from './pages/destination/destination-components/Titan'
import Hurley from './pages/crew/crew-components/Hurley'
import Shuttleworth from './pages/crew/crew-components/Shuttleworth'
import Glover from './pages/crew/crew-components/Glover'
import Ansari from './pages/crew/crew-components/Ansari'
import Vehicle from './pages/technology/technology-components/Vehicle'
import Spaceport from './pages/technology/technology-components/Spaceport'
import Capsule from './pages/technology/technology-components/Capsule'
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/destination' element={<Destination />}>
          <Route index element={<Moon />}></Route>
          <Route path='moon' element={<Moon />}></Route>
          <Route path='mars' element={<Mars />}></Route>
          <Route path='europa' element={<Europa />}></Route>
          <Route path='titan' element={<Titan />}></Route>
        </Route>
        <Route path='/crew' element={<Crew />}>
          <Route index element={<Hurley />}></Route>
          <Route path='hurley' element={<Hurley />}></Route>
          <Route path='shuttleworth' element={<Shuttleworth />}></Route>
          <Route path='glover' element={<Glover />}></Route>
          <Route path='ansari' element={<Ansari />}></Route>
        </Route>
        <Route path='/technology' element={<Technology />}>
          <Route index element={<Vehicle/>}></Route>
          <Route path='vehicle' element={<Vehicle />}></Route>
          <Route path='spaceport' element={<Spaceport/>}></Route>
          <Route path='capsule' element={<Capsule/>}></Route>
        </Route>
      </Routes >
    </>
  )
}

export default App
