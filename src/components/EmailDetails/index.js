import React from 'react';
import './index.css';

const EmailDetails = ({ email }) => {
  if (!email) return <div className="empty">Select an email to view details</div>;

  return (
    <div className="email-detail">
        <div className = "img-con">
            <img src = "https://res.cloudinary.com/dpfnim7rk/image/upload/v1730786102/images_sbqgvn.png" alt = "profile" className = "image"/>
            <div className = "img-text-con">
                <h3>{email.title}</h3>
                <p><strong>From:</strong> {email.sender}</p>
                <p><strong>Date:</strong> {email.date}</p>
            </div>
        </div>
        <div className = "content-con">
            <div>{email.content}</div>
        </div>
        <div className = "bottom-con">
            <h3>Mashood Ahmed</h3>
            <p>Head of IT Apprenticeships</p>
            <p>Digital Native UK</p>
            <a href = "https://www.busitron.com/" target = "_blank" rel = "noreferrer"> www.busitron.com </a>
        </div>
    </div>
  );
};

export default EmailDetails;