import React from 'react'
import clsx from 'clsx'; // Note: 'clsx' should be imported without curly braces

function FoterHeader({ title, className }: { title: any, className: any }) {
  return (
    <div className={clsx("text-[#FFFFFF] font-semibold font-mainFont text-lg", className)}>
      {title}
    </div>
  )
}

export default FoterHeader
