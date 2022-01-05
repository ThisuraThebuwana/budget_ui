import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = () => {
        axios
            .get('http://localhost:9000/contacts')
            .then((res) => {
                console.log(res);
                setContacts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>Contacts</h1>
            <div className='item-container'>
                {contacts.map((contact) => (
                    <div className='card'>
                        <p>username : {contact.username}</p>
                        <p>email : {contact.email}</p>
                        <p>phone : {contact.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ContactList;