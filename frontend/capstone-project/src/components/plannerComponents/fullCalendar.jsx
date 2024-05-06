import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from 'react-modal';
import AddEventModal from './AddEventModal';

Modal.setAppElement('#root');

export default function Calendar() {

  const [modalOpen, setModalOpen] = useState(false); //state mangement for modal to control calendar events/form
  const calendarRef = useRef(null) //useRef for calendarApi

//new event function
  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent(event);
  }

//function to connect backend api to front
  

  return (
    <section>
      <button onClick={() => setModalOpen(true)}>Add Event</button>

      <div style={{position: "relative", zIndex: 0}}>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: 'dayGridMonth,timeGridWeek,timeGridDay',
            center: 'title',
            end: 'today prev,next'
          }}
          eventAdd={event => handleEventAdd(event)}
        />

        <AddEventModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onEventAdded={event => onEventAdded(event)} />
      </div>
    </section>
  )
}