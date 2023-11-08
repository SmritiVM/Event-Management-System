import Axios from 'axios';
import React, { useState } from 'react';

export default function EventRegistrationForm () {
  const [formData, setFormData] = useState({
    name: '',
    startTime: '',
    endTime: '',
    date: '',
    place: '',
    description: '',
    club: '',
    registrationFee: '',
    slots: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/eventRoute/create-event", formData)
    .then((res) => {
      if(res.status === 200)
        alert("Record added successfully");
      else
        Promise.reject();
    })
    .catch((err) => alert(err));
    // console.log(formData);
  };

  return (
    <div>
      <h1>Event Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Event Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="startTime">Event Start Time:</label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="endTime">Event End Time:</label>
          <input
            type="time"
            id="endTime"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Event Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="place">Event Place:</label>
          <input
            type="text"
            id="place"
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="club">Name of the Club:</label>
          <input
            type="text"
            id="club"
            name="club"
            value={formData.club}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="registrationFee">Registration Fee:</label>
          <input
            type="number"
            id="registrationFee"
            name="registrationFee"
            value={formData.registrationFee}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="slots">Number of Slots:</label>
          <input
            type="number"
            id="slots"
            name="slots"
            value={formData.slots}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

//