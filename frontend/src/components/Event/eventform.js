import React, { useState } from 'react';

export default function EventRegistrationForm () {
  const [formData, setFormData] = useState({
    eventName: '',
    eventTime: '',
    eventDate: '',
    eventPlace: '',
    description: '',
    clubName: '',
    registrationFee: '',
    slots: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // can handle sending data to a server.
    console.log(formData);
  };

  return (
    <div>
      <h1>Event Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="eventTime">Event Time:</label>
          <input
            type="text"
            id="eventTime"
            name="eventTime"
            value={formData.eventTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="eventDate">Event Date:</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="eventPlace">Event Place:</label>
          <input
            type="text"
            id="eventPlace"
            name="eventPlace"
            value={formData.eventPlace}
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
          <label htmlFor="clubName">Name of the Club:</label>
          <input
            type="text"
            id="clubName"
            name="clubName"
            value={formData.clubName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="registrationFee">Registration Fee:</label>
          <input
            type="text"
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