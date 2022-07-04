import PropTypes from 'prop-types';
import s from './Contacts.module.scss';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.cotactsList}>
      {contacts.map(contact => (
        <li className={s.item} key={contact.id}>
          {`${contact.name}: ${contact.number}`}
          <button
            onClick={() => deleteContact(contact.id)}
            className={s.deleteButton}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default Contacts;
