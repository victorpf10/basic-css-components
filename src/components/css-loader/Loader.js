import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div class="center">
        <div class="ring"></div>
        <span class="loadingspan">Cargando...</span>
    </div>
  )
}

export default Loader;