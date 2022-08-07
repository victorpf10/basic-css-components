import React from 'react'
import MenuHamburguer from './components/menu-hamburguer/MenuHamburguer'

const App = () => {

  const handleClickHamburguer = (e) => {    
    console.log("You clicked the hamburguer");
  }
  return (
    <div>
      <MenuHamburguer  onClick={handleClickHamburguer}/>
    </div>
  )
}

export default App