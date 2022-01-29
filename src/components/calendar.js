import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Calendar() {
  return (
    <div className='m-2 text-2xl h-auto'>
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            selectable={true}
        />
    </div>
    
  )
}

export default Calendar
