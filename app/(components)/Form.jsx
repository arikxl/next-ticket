'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Form = ({ ticket }) => {

    const router = useRouter();
    const editMode = ticket._id === 'new' ? false : true;

    const initialData = {
        title: "",
        desc: "",
        category: "web dev",
        priority: 1,
        progress: 0,
        status: "Not Started"
    };

    if (editMode) {
        initialData['title'] = ticket.title;
        initialData['desc'] = ticket.desc;
        initialData['category'] = ticket.category;
        initialData['priority'] = ticket.priority;
        initialData['progress'] = ticket.progress;
        initialData['status'] = ticket.status;
    }

    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editMode) {
            const res = await fetch(`/api/tickets/${ticket._id}`, {
                method: 'PUT',
                body: JSON.stringify({ formData }),
                "content-type": "application/json"
            })

            if (!res.ok) {
                throw new Error('Failed to edit ticket.')
            }
        } else {

            const res = await fetch('/api/tickets', {
                method: 'POST',
                body: JSON.stringify({ formData }),
                "content-type": "application/json"
            })

            if (!res.ok) {
                throw new Error('Failed to create ticket.')
            }
        }
        router.refresh();
        router.push('/')
    }

    return (
        <div className='flex justify-center '>
            <form className='flex flex-col gap-3 w-1/2' method='post' onSubmit={handleSubmit}>
                <h3>{editMode ? 'Edit' : 'Create'} your Ticket</h3>
                <label >Title</label>
                <input type="text" id='title' name='title' required={true}
                    onChange={handleChange} value={formData.title} />
                <label >Description</label>
                <textarea id='desc' name='desc' required={true} rows={5}
                    onChange={handleChange} value={formData.desc} />
                <label >Category</label>
                <select name='category' id='category'
                    onChange={handleChange} value={formData.category}>
                    <option value='Web Dev'>Web Dev</option>
                    <option value='Car'>Car</option>
                    <option value='Home'>Home</option>
                    <option value='Gaming'>Gaming</option>
                </select>
                <label >Priority</label>
                <div>
                    <input type='radio' id='priority-1' name='priority'
                        onChange={handleChange} value={1} checked={formData.priority == 1} />
                    <label >1</label>
                    <input type='radio' id='priority-2' name='priority'
                        onChange={handleChange} value={2} checked={formData.priority == 2} />
                    <label >2</label>
                    <input type='radio' id='priority-3' name='priority'
                        onChange={handleChange} value={3} checked={formData.priority == 3} />
                    <label >3</label>
                    <input type='radio' id='priority-4' name='priority'
                        onChange={handleChange} value={4} checked={formData.priority == 4} />
                    <label >4</label>
                    <input type='radio' id='priority-5' name='priority'
                        onChange={handleChange} value={5} checked={formData.priority == 5} />
                    <label >5</label>
                </div>

                <label >Progress</label>
                <input type="range" id='progress' name='progress'
                    onChange={handleChange} min='0' max='100' value={formData.progress} />
                <label >Status</label>
                <select name='status' id='status'
                    onChange={handleChange} value={formData.status}>
                    <option value='Not Started'>Not Started</option>
                    <option value='Started'>Started</option>
                    <option value='Done'>Done</option>
                </select>
                <input type="submit" className='btn'
                    value={editMode ? 'Edit Ticket' : 'Create Ticket'} />
            </form>
        </div>
    )
}

export default Form