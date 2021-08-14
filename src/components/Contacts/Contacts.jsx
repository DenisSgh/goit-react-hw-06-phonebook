import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/actions';
// import PropTypes from 'prop-types';

import Section from 'components/Section';
import s from './Contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <Section title="Contacts">
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
                  onClick={() => dispatch(deleteContact(id))}
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

// Contacts.propTypes = {
// contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)),
// deleteContact: PropTypes.func.isRequired,
// };

export default Contacts;
