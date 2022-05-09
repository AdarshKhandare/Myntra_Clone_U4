import React from 'react'
import Card from "../Component/cards/WomenCard"
import Brandfilter from '../Component/filters/brand/WomenBrandFilter'
function WomensPage() {
  return (
      <div>
          <Brandfilter/>
          <Card/>
    </div>
  )
}

export default WomensPage