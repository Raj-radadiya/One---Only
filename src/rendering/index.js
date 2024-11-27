import React from 'react'
import Home from './home'
import Resorts from './resorts'
import Experience from './experience'
import PrivateHomes from './privateHomes'
import Stories from './stories'
import Offers from './offers'
import Portonovi from './portonovi'

export default function Rendering() {
  return (
    <div>
      <Home />
      <Resorts />
      <Experience />
      <PrivateHomes />
      <Stories />
      {/* <Offers/> */}
      {/* <Portonovi /> */}
    </div>
  )
}
