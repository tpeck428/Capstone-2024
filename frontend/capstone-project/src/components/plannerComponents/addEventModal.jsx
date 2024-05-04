import React from "react";
import ReactModal from "react-modal";
import { useState } from "react";
import Datetime from 'react-datetime';

export default function ({ isOpen, onClose, onEventAdded }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

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

                <button onClick={()=> setModalOpen(true)}>Add Event</button>
            </form>
        </Modal>
    )
}