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
                setContacts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h4>Contacts</h4>
            <div className='item-container'>
                {contacts.map((contact) => (
                    <div className='card contact-card'>
                        <div class="row">
                            <div class="col-4">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" width={150} class="img-fluid" alt="..."></img>
                            </div>
                            <div class="col-8">
                                <p>{contact.username}</p>
                                <p>{contact.email}</p>
                                <p>{contact.phone}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ContactList;