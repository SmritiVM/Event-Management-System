import React, { useState } from 'react';
import "./userprofileform.css"
const EditProfileForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    repassword: '',
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 1000);
  };
  return (
    <div>
      <div className= "editprofile-container">
        <h1>Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="repassword">Confirm New Password:</label>
            <input
              type="password"
              id="repassword"
              name="repassword"
              value={formData.repassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">UPDATE</button>
          {isSaved && <p>SAVED</p>}
        </form>
      </div>
    </div>
  );
};
export default EditProfileForm;