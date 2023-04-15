import React, { useState } from 'react';
import { firestore } from '../firebase/firebase.config';
import '../css/Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onNameChange = (event) => { setName(event.target.value) };
    const onEmailChange = (event) => { setEmail(event.target.value) };
    const onMessageChange = (event) => { setMessage(event.target.value) };
    const handleSubmit = (event) => {
        event.preventDefault();
        postData();
        console.log("Message sent: ", name, email, message)
        setName('');
        setEmail('');
        setMessage('');
    };

    const postData = () => {
        const senderid = localStorage.getItem("email");
        const time = Date.now();
        firestore.collection("contact").add({
            Name: name,
            Email: email,
            Message: message,
            SenderID: senderid,
            PostedOn: new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }).format(time),
        });
    }

    return (
        <div className="contact">
            <div className="contact-title">Contact Form</div>
            <div className="contact-email">Email: Chanyu.Choung@lc.cuny.edu</div>
            <form id="contact-form" className="contact-form">
                <div className="contact-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="contact-input" value={name} onChange={onNameChange} />
                </div>
                <div className="contact-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="contact-input" value={email} onChange={onEmailChange} />
                </div>
                <div className="contact-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="contact-input" rows="5" value={message} onChange={onMessageChange} />
                </div>
                <button type="submit" className="contact-button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Contact;
