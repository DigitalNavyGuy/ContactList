import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'

const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContactId, setSelectedContactId] = useState(null);

  const selectedContact = contacts.find((contact) => contact.id === selectedContactId);
  console.log(selectedContactId);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <div>
        <ContactList setSelectedContactId={setSelectedContactId}/>
        <SelectedContact selectedContact={selectedContact} />
    </div>
  );
}

export default App