import React from 'react';

function ContactDetails ({contacts, match}){
    // console.log(contacts)
    // console.log(match)
    let contactDetails = contacts.find((contact, i) => {
        return(
            i === parseInt(match.params.index)
        );
    })
    console.log(contactDetails);
    return(
        <div className='details-container'>
            {contactDetails ? <img src={contactDetails.photo}/> : null}
            {contactDetails ? <h3>{contactDetails.name}{' '}{contactDetails.surname}</h3> : null}
            {contactDetails ? <p>age: {contactDetails.age}</p> : null}
            {contactDetails ? <p>address: {contactDetails.address}</p> : null}
            {contactDetails ? <p>phone: {contactDetails.phone}</p> : null}
            {contactDetails ? <p>email: {contactDetails.email}</p> : null}
            {contactDetails ? <p>birthday: {contactDetails.birthday.mdy}</p> : null}
            
        </div>
    )
}



export default ContactDetails;