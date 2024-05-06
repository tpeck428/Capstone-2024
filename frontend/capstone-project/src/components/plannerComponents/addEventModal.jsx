import React from "react";
import { useState } from "react";
import Datetime from 'react-datetime';
import Modal from "react-modal";

function AddEventModal({ isOpen, onClose, onEventAdded }) {

//statement management for form data
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    //function for button submission to create new event
    const onSubmit = (e) => {
        e.preventDefault();

        onEventAdded({
            title,
            content,
            start,
            end,
        })
        onClose();
    }

//form set up and mangement 
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    placeholder="Content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <div>
                    <label>Start Date</label>
                    <Datetime value={start} onChange={date => setStart(date)} />
                </div>
                <div>
                    <label>End Date</label>
                    <Datetime value={end} onChange={date => setEnd(date)} />
                </div>

                <button onClick={() => isOpen(true)}>Add Event</button>
            </form>
        </Modal>
    )
}

export default AddEventModal;