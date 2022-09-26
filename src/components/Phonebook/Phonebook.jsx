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

const Phonebook = () => {
  const [user, setUser] = useState('');
  const [phone, setPhone] = useState('');
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.data.items);
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

      <h3>Contacts</h3>
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
