import React from 'react';
import { NavLink } from 'react-router-dom'

function Contacts({ contacts, match }) {
    console.log( contacts )
    console.log( match )
    const contactLinks = contacts.map((contact, i) => (
        <NavLink key={i} className='contacts-list' to=''>{contact.name} {' '} {contact.surname}</NavLink>
    ))
    return(
        <div>
            <h3>Contacts</h3>
            <div className='contacts-div'>
                {contactLinks}

            </div>
            
        </div>
    )
}

export default Contacts;