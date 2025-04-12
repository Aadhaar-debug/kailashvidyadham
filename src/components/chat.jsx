import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ChatButton = () => {
    const buttonStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'rgb(191,0,0)',
        color: 'white',
        borderRadius: '50px',
        padding: '10px 20px',
        display: 'flex',
        width: '130px',
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        border: 'none',
    };

    const iconStyle = {
        marginRight: '10px',
        fontSize: '40px',
    };

    return (
        <a
        href="https://wa.me/919419362813"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
        >
        <button style={buttonStyle}>
            <FaWhatsapp style={iconStyle} />
            Chat
        </button>
        </a>

    );
};

export default ChatButton;