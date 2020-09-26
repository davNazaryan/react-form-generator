import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ContactsList from './contacts-list/ContactsList';
import ContactAdd from './contact-add/ContactAdd';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add-contact">
          <ContactAdd />
        </Route>
        <Route path="/">
          <ContactsList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
