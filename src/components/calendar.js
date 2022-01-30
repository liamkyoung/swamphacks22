import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

function Calendar({ view, height, data }) {
  const handleDate = (args) => {
    console.log(args)
  }

  return (
    <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin ]}
      initialView={view}
      selectable
      aspectRatio={1}
      height={height}
      events={data}
      dateClick={handleDate}
      className='overflow-y-hidden text-md font-bold'
    />
  )
}

export default Calendar
