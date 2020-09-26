import React from 'react';
import * as uuid from 'uuid';
import { useHistory, Link } from 'react-router-dom';
import FormConstructor from '../form-constructor/FormConstructor';

const formFields = [
  {
    label: 'Contact Name',
    name: 'name',
    type: 'text',
    required: true,
    errorMessage: 'Name is required',
  }, {
    label: 'Number',
    name: 'number',
    type: 'number',
    required: true,
    errorMessage: 'Number is required',
  }, {
    label: 'Call time',
    name: 'callDate',
    type: 'date',
    required: false,
    errorMessage: 'Date is not valid',
  },
];

export default () => {
  const history = useHistory();

  const submitHandler = (data) => {
    const contactString = localStorage.getItem('contacts');
    const contacts = JSON.parse(contactString) || [];
    contacts.push({ ...data, id: uuid.v1() });
    localStorage.setItem('contacts', JSON.stringify(contacts));
    history.push('/');
  };

  return (
    <div>
      <h2>Add</h2>
      <Link to="/">Back</Link>
      <FormConstructor formFields={formFields} submitHandler={submitHandler} />
    </div>
  );
};
