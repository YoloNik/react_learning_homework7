import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserInput from './UserInput/UserInput';
import FilterPhonebook from './FilterPhonebook/FilterPhonebook';
import ContactList from './ContactList/ContactList';
import { filterChange } from 'redux/contacts/contactsSlice';
import {
  getContacts,
  postContact,
  deleteContact,
} from 'redux/contacts/contactsOperation';
import s from './Phonebook.module.css';
import * as contactsSelector from 'redux/contacts/contactsSelector';
import ReactLoading from 'react-loading';

const Phonebook = () => {
  const [user, setUser] = useState('');
  const [phone, setPhone] = useState('');
  const filter = useSelector(contactsSelector.getFilter);
  const contacts = useSelector(contactsSelector.getContacts);
  const loading = useSelector(contactsSelector.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setUser(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      case 'filter':
        dispatch(filterChange(e.target.value));
        break;

      default:
        break;
    }
  };

  const addContact = e => {
    const newContact = {
      name: user,
      phone: phone,
    };
    const searchSameName = contacts.map(cont => cont.name).includes(user);
    searchSameName
      ? alert(`${user} is already in contacts`)
      : dispatch(postContact(newContact));
    reset();
  };

  const removeContact = e => {
    dispatch(deleteContact(e.target.name));
  };

  const reset = () => {
    setUser('');
    setPhone('');
  };

  const filterByName = () => {
    return contacts.filter(el =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };

  return (
    <div className={s.phonebook}>
      <h2 className={s.title}>Phonebook</h2>
      <UserInput
        valueName={user}
        valueTel={phone}
        onChange={handleChange}
        addContact={addContact}
      />
      <div className={s.contactsTitle}>
        {loading ? (
          <>
            <p>We are processing your request, please wait</p>
            <ReactLoading type="spin" width={30} height={30} />
          </>
        ) : (
          <p>Сontacts:</p>
        )}
      </div>

      <FilterPhonebook filterValue={filter} onChange={handleChange} />
      <ContactList
        filter={filter}
        contacts={contacts}
        filterByName={filterByName}
        removeContact={removeContact}
      />
    </div>
  );
};

export default Phonebook;
