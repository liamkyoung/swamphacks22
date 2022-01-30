import React from 'react';
import Calendar from './calendar'

function BottomClub ({ data }) {
  const { description, date, organization, price, start_time, end_time } = data 
  return (
    <div className='flex px-12 py-6 campussy2'>
        <div className='flex-wrap p-2'>
            <h1 className='text-4xl text-bold'>{organization}</h1><br />
            <h2 className='text-2xl'>{start_time} - {end_time}</h2>
            <h2 className='font-bold text-2xl'>{date}</h2>
            <p className='w-3/4 text-md'>{description}</p>
            <p className=''>{price}</p>
        </div>
        <div className='flex flex-col justify-center px-6 py-1 text-center flex-grow'>
            <h1 className='text-2xl'>Future Meetings</h1>
            <div className='text-sm overflow-y-hidden pt-2'>
                <Calendar view="dayGridWeek" height='150px' />
            </div>
        </div>
    </div>
  )
}

export default BottomClub;
