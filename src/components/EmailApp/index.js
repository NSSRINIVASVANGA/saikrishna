import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import EmailList from '../EmailList';
import EmailDetails from '../EmailDetails';
import Navbar from '../Navbar';
import './index.css';

const EmailApp = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [filter, setFilter] = useState("All");

  const emails = [
    { id: 1, title: "Computer Science 101 | Coursera", date: "01/08/2014", sender: "Coursera", content: "Welcome to Computer Science 101...",type : "All" },
    { id: 2, title: "Mash - Induction", date: "01/08/2014", sender: "Mash", content: "Welcome to Digital Native. Please login...",type : "Unread" },
    { id: 3, title: "Computer Science 101 | Coursera", date: "01/08/2014", sender: "Coursera", content: "Welcome to Computer Science 101...",type : "To me" },
    { id: 4, title: "Mash - Induction", date: "01/08/2014", sender: "Mash", content: "Welcome to Digital Native. Please login...", type : "Flagged" },
    { id: 5, title: "Computer Science 101 | Coursera", date: "01/08/2014", sender: "Coursera", content: "Welcome to Computer Science 101...", type : "All" },
    { id: 6, title: "Mash - Induction", date: "01/08/2014", sender: "Mash", content: "Welcome to Digital Native. Please login...", type : "Unread" },
    { id: 7, title: "Computer Science 101 | Coursera", date: "01/08/2014", sender: "Coursera", content: "Welcome to Computer Science 101...", type : "Unread" },
    { id: 8, title: "Mash - Induction", date: "01/08/2014", sender: "Mash", content: "Welcome to Digital Native. Please login...", type : "All" },
    { id: 9, title: "Mash - Induction", date: "01/08/2014", sender: "Mash", content: "Welcome to Digital Native. Please login...", type : "All" },
    { id: 10, title: "Mash - Induction", date: "01/08/2014", sender: "Mash", content: "Welcome to Digital Native. Please login...", type : "All" },
    { id: 11, title: "Mash - Induction", date: "01/08/2014", sender: "Mash", content: "Welcome to Digital Native. Please login...", type : "All" },
    { id: 12, title: "Mash - Induction", date: "01/08/2014", sender: "Mash", content: "Welcome to Digital Native. Please login...", type : "All" },
    { id: 13, title: "Mash - Induction", date: "01/08/2014", sender: "Mash", content: "Welcome to Digital Native. Please login...", type : "All" },
    { id: 14, title: "Mash - Induction", date: "01/08/2014", sender: "Mash", content: "Welcome to Digital Native. Please login...", type : "All" },
  ];

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  return (
    <div className = "home">
      <Navbar />
    <div className="email-app">
        <div className = "part-1">
            <Sidebar setFilter={setFilter} filter = {filter}/>
            <EmailList emails={emails} onEmailClick={handleEmailClick} filter={filter} />
        </div>
        <EmailDetails email={selectedEmail} />
    </div>
    </div>
  );
};

export default EmailApp;