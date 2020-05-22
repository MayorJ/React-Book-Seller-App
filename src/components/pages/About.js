import React from 'react'


export default function about() {
    return (
        <React.Fragment>
            <h1 style={{ textAlign: 'center', color: '#ff4500'}}>About</h1>
            <p style={myStyle}>This is a random Project-CheckList app v1.0.0.</p><hr></hr><br />
            <div style={myStyle2}>This application helps the user to create a Todo list. You can delete the custom todo items and create a new one.</div>
            <div style={myStyle3}>
                <p>This project was created by</p>
                <hr />
                <p>Odunmorayo Mayowa</p>
            </div>
        </React.Fragment>
    )
}

const myStyle = {
    textAlign: 'center', 
    fontSize: '20px', 
    color: '#333',
    background: '#fff'
}

const myStyle2 = {
    textAlign: 'center', 
    fontSize: '20px', 
    color: '#fff'
}

const myStyle3 = {
    textAlign: 'center',
    color: '#fff',
    marginTop: '30vh',
    fontSize: '20px'
}

