import React from 'react';
import * as uuid from 'uuid';
import { useHistory } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
import FormConstructor from '../form-constructor/FormConstructor';
import Head from '../head/Head';
import FabButton from '../fab-button/FabButton';

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
      <Head title="Add contact">
        <FormConstructor formFields={formFields} submitHandler={submitHandler} />
      </Head>
      <FabButton href="/">
        <ArrowBack fontSize="large" />
      </FabButton>
    </div>
  );
};
