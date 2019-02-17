import React from 'react';

const SimplePerson = (prop) => {
    return (
        <div>
            <h1>SP</h1>
            <p>{prop.first_name}</p>
            <p>{prop.last_name}</p>
        </div>
        );
}

export default SimplePerson;