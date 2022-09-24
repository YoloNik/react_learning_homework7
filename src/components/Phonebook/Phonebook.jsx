import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import UserInput from './UserInput/UserInput';
import FilterPhonebook from './FilterPhonebook/FilterPhonebook';
import ContactList from './ContactList/ContactList';
import phonebookData from 'data/phonebookData';
import {
  addContact,
  setContacts,
  removeContact,
} from 'redux/contacts/contactsActions';
import { filterChange } from 'redux/contacts/filtersActions';
import { nanoid } from 'nanoid';
import s from './Phonebook.module.css';

const Phonebook = ({
  contacts,
  onAddContact,
  onSetContacts,
  onRemoveContact,
}) => {
  const [user, setUser] = useState('');
  const [number, setNumber] = useState('');
  const filter = useSelector(state => state.filter);
  const filterDispatch = useDispatch();

  useEffect(() => {
    onSetContacts(phonebookData.contacts);
  }, [onSetContacts]);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setUser(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      case 'filter':
        filterDispatch(filterChange(e.target.value));
        break;

      default:
        break;
    }
  };

  const addContact = e => {
    e.preventDefault();

    const newContact = {
      name: user,
      number: number,
      id: nanoid(),
    };

    const searchSameName = contacts.map(cont => cont.name).includes(user);

    searchSameName
      ? alert(`${user} is already in contacts`)
      : onAddContact(newContact);
    reset();
  };

  const reset = () => {
    setUser('');
    setNumber('');
  };

  const deleteContact = e => {
    onRemoveContact(e.target.name);
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
        valueTel={number}
        onChange={handleChange}
        addContact={addContact}
      />

      <h3>Contacts</h3>
      <FilterPhonebook filterValue={filter} onChange={handleChange} />
      <ContactList
        filter={filter}
        contacts={contacts}
        filterByName={filterByName}
        deleteContact={deleteContact}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.items,
});

const mapDispatchToProps = dispatch => ({
  onSetContacts: contacts => dispatch(setContacts(contacts)),
  onAddContact: newContact => dispatch(addContact(newContact)),
  onRemoveContact: contact => dispatch(removeContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
