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
            <h3>Contacts</h3>
            <div className='item-container'>
                {contacts.map((contact) => (
                    <div className='card'>
                        <div class="row">
                            <div class="col-4">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" width={150} class="img-fluid" alt="..."></img>
                                {/* <p>ssddsd</p> */}
                            </div>
                            <div class="col-8">
                                {/* <div class="row"></div>
                                <div class="row"></div>
                                <div class="row"></div> */}
                                <p>username : {contact.username}</p>
                                <p>email : {contact.email}</p>
                                <p>phone : {contact.phone}</p>
                            </div>
                        </div>

                        {/* <p>username : {contact.username}</p>
                        <p>email : {contact.email}</p>
                        <p>phone : {contact.phone}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ContactList;