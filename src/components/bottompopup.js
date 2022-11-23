import React from 'react'
import BottomClub from './bottomclub'

function BottomPopUp({ data }) {
  console.log('Data', data)
  const { name, loc } = data

  return (
    <div className="animate-box bottom-0 bg-GRAY absolute left-0 z-200 w-full h-1/3 drop-shadow-[35px_35px_35px_rgba(0,0,0,0.25)] rounded-lg overflow-hidden">
      {data ? <BottomClub data={data} /> : null}
    </div>
  )
}

export default BottomPopUp
