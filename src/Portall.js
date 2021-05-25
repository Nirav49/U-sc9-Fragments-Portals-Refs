import React from 'react'
import ReactDOM from 'react-dom';

function Portall() {
    return (
        ReactDOM.createPortal(
            <h1>Hello portal</h1>,
            document.getElementById('portals')
        )
    )
}

export default Portall;
