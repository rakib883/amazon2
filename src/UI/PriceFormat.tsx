import React from 'react'

function PriceFormat({prize,className}:{prize:any,className:any}) {

    const priceFormat = new Number(prize).toLocaleString("en-US",{
        style : "currency",
        currency : "USD",
        minimumFractionDigits : 0,
    })
  return (
    <div className={className}>{priceFormat}</div>
  )
}

export default PriceFormat