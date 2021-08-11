import { useState, useEffect } from 'react';
import shortid from 'shortid';

import Form from 'components/Form';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmitContact = data => {
    const { name, number } = data;
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts(prev => [...prev, newContact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = () => {
    const normalaizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalaizedFilter),
    );
  };

  return (
    <>
      <Form
        title="Phonebook"
        contacts={contacts}
        onSubmit={handleSubmitContact}
      />
      <Filter value={filter} changeFilter={changeFilter} />
      <Contacts
        title="Contacts"
        contacts={visibleContacts()}
        buttonDelete={deleteContact}
      />
    </>
  );
}
