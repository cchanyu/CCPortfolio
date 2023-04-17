import React from 'react';
import { firestore } from '../firebase/firebase.config';
import '../css/Contact.scss';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target[0].value
        const email = event.target[1].value
        const message = event.target[2].value
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
        navigate("/CCPortfolio/home")
    };

    return (
        <div className="contact">
            <div className="contact-title">Contact Form</div>
            <div className="contact-email">Email: Chanyuabc@gmail.com</div>
            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="contact-input" />
                </div>
                <div className="contact-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="contact-input" />
                </div>
                <div className="contact-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="contact-input" rows="5" />
                </div>
                <button type="submit" className="contact-button">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
