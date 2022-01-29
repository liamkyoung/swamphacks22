import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Calendar() {
  return (
    <div className='text-md font-bold h-auto'>
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            selectable={true}
            className='overflow-y-hidden'
        />
    </div>
    
  )
}

export default Calendar
