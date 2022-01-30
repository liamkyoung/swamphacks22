import React from 'react';
import Calendar from './calendar'

function BottomClub ({name, description, schedule, meetingData}) {
  return (
    <div className='flex px-12 py-6'>
        <div className='flex-wrap'>
            <h1 className='text-4xl'>{name}</h1><br />
            <h2 className='font-bold text-2xl'>{schedule}</h2>
            <p className='w-3/4'>{description}</p>
        </div>
        <div className='flex flex-col justify-center px-6 py-1 text-center flex-grow'>
            <h1 className='text-2xl'>Future Meetings</h1>
            <div className='text-sm overflow-y-hidden pt-2'>
                <Calendar view="dayGridWeek" height='150px' data={meetingData} />
            </div>
        </div>
    </div>
  )
}

export default BottomClub;
