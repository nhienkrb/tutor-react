
import React from 'react';

function Message() {
    alert("Message sent!");
}   

export default function MessageBtn() {

    return (
        <div className="message">
        <button className="" onClick={Message}>Send Message</button>
        </div>
    );
}