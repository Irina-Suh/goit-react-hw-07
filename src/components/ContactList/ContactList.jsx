import React from 'react'
import s from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'
import { selectError, selectFilteredContacts, selectLoading } from '../../redux/contactsSlice'
import Loader from '../Loader/Loader'

const ContactList = () => {

  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const filteredContacts = useSelector(selectFilteredContacts);


  return (
    <>
         <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact name={contact.name} number={contact.number} id={contact.id} />
        </li>
      ))}
    </ul> 
      {loading && !error && <Loader/>}

      {error && <h2>{error}</h2>}
      </>
  )
}

export default ContactList