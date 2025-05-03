import React from 'react'
import s from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'

const ContactList = () => {

  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());
  
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    
         <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact name={contact.name} number={contact.number} id={contact.id} />
        </li>
      ))}
    </ul> 
  )
}

export default ContactList