import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ title: '', notes: '' });

  //non working, cannot access event once it's been created
  const handleEventClick = (clickInfo) => {
    const clickedEvent = events.find(event => event.id === clickInfo.event.id);
    setSelectedEvent(clickedEvent);
    setFormData({ title: clickedEvent.title, notes: clickedEvent.notes });
    setIsModalOpen(true);
  };

  //working, allows you to click on the date and add event
  const handleDateClick = (selectInfo) => {
    setSelectedEvent(null); // Clear selected event
    setFormData({ title: '', notes: '', date: selectInfo.startStr });
    setIsModalOpen(true);
  };

  //change input functionality
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //partially working, can save on newly created event
  const handleSaveEdit = () => {
    if (selectedEvent) {
      const updatedEvents = events.map(event =>
        event.id === selectedEvent.id ? { ...event, title: formData.title, notes: formData.notes } : event
      );
      setEvents(updatedEvents);
    } else {
      const newEvent = {
        id: events.length + 1,
        title: formData.title,
        notes: formData.notes,
        date: formData.date
      };
      setEvents(prevEvents => [...prevEvents, newEvent]);
    }
    setIsModalOpen(false);
  };

  //non working, cannot access saved event to delete it
//   const handleDeleteEvent = () => {
//     const filteredEvents = events.filter(event => event.id !== selectedEvent.id);
//     setEvents(filteredEvents);
//     setIsModalOpen(false);
//   };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

//   const handleEditEvent = () => {
//     setIsModalOpen(true);
//   };

  return (
    <section style={{ position: 'relative' }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: 'dayGridMonth,timeGridWeek,timeGridDay',
          center: 'title',
          end: 'today prev,next'
        }}
        events={events}
        selectable={true}
        select={handleDateClick}
        eventClick={handleEventClick}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999 // Ensure modal is on top of everything
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: 600,
            maxHeight: '80%',
            overflowY: 'auto',
            backgroundColor: '#fff',
            border: '2px solid #000',
            borderRadius: '8px',
            padding: '20px',
          }
        }}
      >
        <h2>{selectedEvent ? 'Edit Event' : 'New Event'}</h2>
        <form>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            style={{ width: '100%', height: '100px', marginBottom: '10px' }}
          />
        </form>
        <button onClick={handleSaveEdit} style={{ marginRight: '10px' }}>Save</button>
        {/* {selectedEvent &&
        //   <button onClick={handleDeleteEvent} style={{ marginRight: '10px' }}>Delete</button>
        } */}
        <button onClick={handleCloseModal}>Cancel</button>
      </Modal>
      {selectedEvent &&
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h2>{selectedEvent.title}</h2>
          <p>{selectedEvent.notes}</p>
          <button onClick={handleEditEvent}>Edit</button>
        </div>
      }
    </section>
  );
}
