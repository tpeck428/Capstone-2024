import React from 'react'
import { useState, useRef } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import addEventModal from './addEventModal'

export default function Calendar() {

const [modalOpen, setModalOpen] = useState(false);
const calendarRef = useRef(null)


const onEventAdded = event => {
    const calendarApi = calendarRef.current.getApi()
    calendarApi.addEvent(event);
}

  return (
    <section>
        <button onClick={()=> setModalOpen(true)}>Add Event</button>
    <FullCalendar

      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    />

    <addEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} oneventAdded={event => onEventAdded(event)} />
    </section>
  )
}