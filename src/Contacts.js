import React from 'react';
import { NavLink } from 'react-router-dom'

function Contacts({ contacts, match }) {
    // console.log( contacts )
    // console.log( match )
    const contactLinks = contacts.map((contact, i) => (
        <NavLink key={i} className='contacts-list active' to={`${match.path}/${i}`}>{contact.name} {' '} {contact.surname}</NavLink>
    ))
    return(
        <div>
            <div className='contacts-container'>
                {contactLinks}

            </div>
            
        </div>
    )
}

export default Contacts;