import React from 'react';
import s from './ContactList.module.css';
import { AiOutlineUserDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';

function ContactList({ filter, contacts, filterByName, removeContact }) {
  return (
    <div className={s.test}>
      <ul className={s.contactList}>
        {(filter &&
          filterByName().map(el => {
            return (
              <li className={s.contactItem} key={el.id}>
                <img className={s.avatar} src={el.avatar} alt={el.name} />
                <p>
                  {el.name}: {el.phone}
                </p>
                <button
                  name={el.id}
                  onClick={removeContact}
                  className={s.button}
                  type="button"
                >
                  <AiOutlineUserDelete /> Delete
                </button>
              </li>
            );
          })) ||
          contacts.map(el => {
            return (
              <li className={s.contactItem} key={el.id}>
                <img className={s.avatar} src={el.avatar} alt={el.name} />
                <p>
                  {el.name}: {el.phone}
                </p>
                <button
                  name={el.id}
                  onClick={removeContact}
                  className={s.button}
                  type="button"
                >
                  <AiOutlineUserDelete /> Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ContactList;

ContactList.prototype = {
  filter: PropTypes.string,
  contacts: PropTypes.array.isRequired,
  filterByName: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
