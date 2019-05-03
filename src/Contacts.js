import React from 'react';
import { NavLink } from 'react-router-dom'



function Contacts({ contacts, searchWord, match }) {
    console.log({searchWord})
    
    // console.log( contacts )
    // console.log( match )
    const contactLinks = contacts.map((contact, i) => (
        contact.name.toLowerCase().includes(searchWord) || contact.surname.toLowerCase().includes(searchWord) ?
        <NavLink key={i} className='contacts-list' activeClassName=' active' to={`${match.path}/${i}`}>{contact.name} {' '} {contact.surname}</NavLink> : null
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

