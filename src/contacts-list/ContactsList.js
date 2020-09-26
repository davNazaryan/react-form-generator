import React from 'react';
import AddButton from './AddButton';

class ContactsList extends React.Component {
  constructor(props) {
    super(props);
    const contactString = localStorage.getItem('contacts');
    const contacts = JSON.parse(contactString) || [];
    this.state = { contacts };
  }

  render() {
    const { contacts } = this.state;
    console.log('++++++++++++++++++++');
    console.log(contacts);
    console.log('++++++++++++++++++++');
    return (
      <div>
        <h2>List</h2>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <p key="contact-name">{contact.name}</p>
            <p key="contact-number">{contact.number}</p>
            <p key="contact-callDate">{contact.callDate}</p>
          </div>
        ))}
        <AddButton href="/add-contact" />
      </div>
    );
  }
}

export default ContactsList;
