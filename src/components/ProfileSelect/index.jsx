import React from 'react';
import './ProfileSelect.css';

function ProfileSelect({name, placeholder}) {
  return (
    <>
        <label htmlFor={name} className='profileSelectLabel'>{name}</label>
        <select className='profileSelectInput' id={name} placeholder={placeholder}>
            <option>{placeholder}</option>
            <option>item_1</option>
            <option>item_2</option>
        </select>
    </>
  )
}

export default ProfileSelect