import { connect } from 'react-redux';
import { deleteContact } from 'redux/actions';
import PropTypes from 'prop-types';

import Section from 'components/Section';
import s from './Contacts.module.css';

const Contacts = ({ title, contacts, deleteContact }) => {
  return (
    <Section title={title}>
      {contacts.length !== 0 ? (
        <ul className={s.list}>
          {contacts.map(contact => {
            const { id, name, number } = contact;

            return (
              <li className={s.item} key={id}>
                <div className={s.position}>
                  <span>{name}:</span>
                  <span>{number}</span>
                </div>
                <button
                  className={s.button}
                  type="button"
                  onClick={() => deleteContact(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={s.notification}>No contacts found :(</p>
      )}
    </Section>
  );
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)),
  deleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (items, filter) => {
  window.localStorage.setItem('contacts', JSON.stringify(items));

  const normalaizedFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalaizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  title: 'Contacts',
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
