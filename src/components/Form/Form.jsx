import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';

import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/actions';
import Section from 'components/Section';

// import PropTypes from 'prop-types';
import s from './Form.module.css';

// const mapDispatchToProps = dispatch => ({
//   addContact: contact => dispatch(addContact(contact)),
// });

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

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

    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameId = shortid.generate();
  const numberId = shortid.generate();

  return (
    <Section title="Phonebook">
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

// Form.propTypes = {
// contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)),
// addContact: PropTypes.func.isRequired,
// };

export default Form;
