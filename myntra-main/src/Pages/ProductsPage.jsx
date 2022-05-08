import React from 'react'
import Brandfilter from "../components/filters/brand/Brandfilter";
import Card from "../components/cards/Card";

function ProductsPage() {
  return (
      <div style={{display:"flex"}}>
          <Brandfilter />
          <Card/>
    </div>
  )
}

export default ProductsPage