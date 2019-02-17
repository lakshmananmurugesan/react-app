import React from 'react';
import Radium, { StyleRoot } from 'radium';
import './Style/Person.css';

const person = (prop) => {
    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }    
    };
    return (
        <StyleRoot>
            <div onClick={prop.click} className='Person' style={style}>
                <p>Name: {prop.name}</p>
                <p>Skill: {prop.skill}</p>
                <p>{prop.children}</p>
                <input type='text' className='textName' onChange={prop.changed} /><br/>
            </div>
        </StyleRoot>
        );
}

export default Radium(person);