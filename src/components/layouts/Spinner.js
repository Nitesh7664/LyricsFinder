import React from 'react';
import spinner from './spinner1.gif';

function Spinner() {
    return (
        <div>
            <img src = {spinner} alt = "Loading" style = {{margin: '40px auto', width: '200px', display: 'block'}} /> 
        </div>
    )
}

export default Spinner
