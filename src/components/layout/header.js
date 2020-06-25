import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <React.Fragment>
        <header style={headerStyle}>
            <h1>Todo Application</h1>
            <Link to="/" style={linkStyle} >Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
        </React.Fragment>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    background: '#333',
    color: '#fff',
    fontWeight: 'bold'
}

export default Header