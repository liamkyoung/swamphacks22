import { React, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

function Calendar({ view, height, data, callback }) {
  let prevDate = new Date().toISOString().slice(0, 10)
  const [currentDate, setDate] = useState(prevDate)

  return (
    <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      initialView={view}
      selectable
      aspectRatio={1}
      height={height}
      events={data}
      dateClick={(args) => {
        setDate(args)
        
        if (prevDate != currentDate) {
          prevDate = currentDate
          callback(currentDate)
          console.log("CLICKED", args)
        }
      }}
      className='overflow-y-hidden text-md font-bold'
    />
  )
}

export default Calendar
