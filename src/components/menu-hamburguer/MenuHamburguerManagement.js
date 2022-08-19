import MenuHamburguer from "./MenuHamburguer";

const MenuHamburguerManagement = () => {
    const handleClickHamburguer = (e) => {    
        console.log("You clicked the hamburguer");
      }
  return (
    <div>
        <MenuHamburguer onClick={handleClickHamburguer} />
    </div>
  )
}

export default MenuHamburguerManagement