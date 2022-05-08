import React from 'react'
import Brandfilter from "../Component/filters/brand/Brandfilter";
import Card from "../Component/cards/Card";

function MensPage() {
  return (
      <div style={{display:"flex"}}>
          <Brandfilter />
          <Card/>
    </div>
  )
}

export default MensPage