import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

import Head from '../head/Head';
import FabButton from '../fab-button/FabButton';
import './ContactsList.css';

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
        <Head title="Contacts">
          {contacts.map((contact) => (
            <div key={contact.id} className="contact-item">
              <List>
                <ListItem>
                  <ListItemText primary={contact.name} secondary={contact.callDate || 'not set'} />
                  {contact.number}
                </ListItem>
              </List>
            </div>
          ))}
        </Head>
        <FabButton href="/add-contact">
          <Add fontSize="large" />
        </FabButton>
      </div>
    );
  }
}

export default ContactsList;
