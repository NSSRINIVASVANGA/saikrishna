import React from 'react';
import './index.css';

const EmailList = ({ emails, onEmailClick, filter }) => {
  // Filter emails based on the selected filter
//   const filteredEmails = emails.filter(email => {
//     // Implement filter logic based on your requirements
//     return true; // Just for the example, returning all
//   });

  const filteredEmails = emails.filter(eachItem => {
    if(eachItem.type !== filter){
        return false;
    }
    return eachItem;
  })

  return (
    <div className="email-list">
      {filteredEmails.map((email) => (
        <div key={email.id} className="email-item" onClick={() => onEmailClick(email)}>
            <div className = "text-part-1">
                <h4>{email.title}</h4>
                <p>{email.sender}</p>
            </div>
            <b className = "date">{email.date}</b>
        </div>
      ))}
    </div>
  );
};

export default EmailList;