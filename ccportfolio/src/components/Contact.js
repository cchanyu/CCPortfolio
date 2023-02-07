import React from 'react';
import { firestore } from '../firebase/firebase.config';
import '../css/Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
    }

    onNameChange(event) { this.setState({name: event.target.value}) }
    onEmailChange(event) { this.setState({email: event.target.value}) }
    onMessageChange(event) { this.setState({message: event.target.value}) }
    handleSubmit(event) {
        const { name, email, message } = this.state;
        this.postData();
        event.preventDefault();
        console.log("Message sent: ", name, email, message)
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }
    postData() {
        const { name, email, message } = this.state;
        const senderid = localStorage.getItem("email");
        const time = Date.now()
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
          minute: '2-digit'}).format(time),
        })
    }

    render(){
        const { name, email, message} = this.state;
        const { handleSubmit, onMessageChange, onEmailChange, onNameChange } = this;

        return(
            <div className="contact">
                <div className="contact-title">Contact Form</div>
                <div className="contact-email">Email: Chanyu.Choung@lc.cuny.edu</div>
                <form id="contact-form" className="contact-form">
                <div className="contact-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="contact-input" value={name} onChange={onNameChange.bind(this)} />
                </div>
                <div className="contact-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="contact-input" value={email} onChange={onEmailChange.bind(this)} />
                </div>
                <div className="contact-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="contact-input" rows="5" value={message} onChange={onMessageChange.bind(this)} />
                </div>
                <button type="submit" className="contact-button" onClick={handleSubmit.bind(this)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact;