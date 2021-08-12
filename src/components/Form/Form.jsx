import { useState } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

import { addContact } from 'redux/actions';
import PropTypes from 'prop-types';
import Section from 'components/Section';
import s from './Form.module.css';

const Form = ({ title, contacts, addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleCreateContact = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);

      case 'number':
        return setNumber(value);

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in the contact list`);
    }

    addContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameId = shortid.generate();
  const numberId = shortid.generate();

  return (
    <Section title={title}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor={nameId}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleCreateContact}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            id={nameId}
            required
          />
        </label>
        <label htmlFor={numberId}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleCreateContact}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            id={numberId}
            required
          />
        </label>
        <button type="submit" className={s.button}>
          Add new contact
        </button>
      </form>
    </Section>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)),
  addContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  title: 'Phonebook',
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
