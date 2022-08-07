import React from 'react';
import './style.css';

const MenuHamburguer = ({onClick}) => {
   
  return (
    <label onClick={onClick}  htmlFor='checkbox' className='hamburguer' >
        <input type='checkbox' id='checkbox' />
        <span className='line line--top'></span>
        <span className='line line--middle'></span>
        <span className='line line--bottom'></span>
    </label>

  )
}

export default MenuHamburguer