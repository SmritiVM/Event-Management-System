import React, { Component } from 'react';
import Axios from "axios";

import './ContactPage.css'; 

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      feedback: [],
      errors: {}, 
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!this.state.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!this.state.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email)) {
      errors.email = 'Invalid email format';
    }
    if (!this.state.message.trim()) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length === 0) {
      const newFeedback = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      };

      Axios.post("https://eventhub-t514.onrender.com/eventRoute/post-feedback", newFeedback)
      .then((res) => {
        if(res.status === 200)
          alert("Thank you for your feedback!");
        else
          Promise.reject();
      })
      .catch((err) => alert(err));

      this.setState((prevState) => ({
        feedback: [...prevState.feedback, newFeedback],
        errors: {},
      }));

   
      this.setState({
        name: '',
        email: '',
        message: '',
      });
    } else {
     
      this.setState({
        errors,
      });
    }
  };

  render() {
    return (
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form onSubmit={this.handleSubmit} className="contact-form">
          {/* Contact form */}
          <div className="formGroup">
            <label htmlFor="name" className="contact-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              className="contact-input"
            />
            {this.state.errors && this.state.errors.name && (
              <span className="contact-error">{this.state.errors.name}</span>
            )}
          </div>
          <div className="formGroup">
            <label htmlFor="email" className="contact-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              className="contact-input"
            />
            {this.state.errors && this.state.errors.email && (
              <span className="contact-error">{this.state.errors.email}</span>
            )}
          </div>
          <div className="formGroup">
            <label htmlFor="message" className="contact-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              className="contact-input"
            />
            {this.state.errors && this.state.errors.message && (
              <span className="contact-error">{this.state.errors.message}</span>
            )}
          </div>
          <button type="submit" className="contact-button">
            Submit
          </button>
        </form>

        {/* Feedback section */}
        <div>
          <h2>User Feedback</h2>
          {this.state.feedback.length === 0 ? (
            <p>No feedback yet.</p>
          ) : (
            <ul className="feedbackList">
              {this.state.feedback.map((entry, index) => (
                <li key={index} className="feedbackItem">
                  <strong>Name:</strong> {entry.name}
                  <br />
                  <strong>Email:</strong> {entry.email}
                  <br />
                  <strong>Message:</strong> {entry.message}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default ContactPage;
