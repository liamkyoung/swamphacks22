import React from 'react';
import BottomClub from './bottomclub';


function BottomPopUp ({ data }) {
  console.log("Data", data)
  const { name, loc } = data

  return (
    <div className='bg-GRAY absolute bottom-0 left-0 z-200 w-full h-1/3 rounded-lg overflow-hidden'>
      {
        data ? <BottomClub name={name} schedule={loc} /> : null
      }
      
    </div>
  )
}

export default BottomPopUp;
