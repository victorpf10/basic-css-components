import MenuHamburguerManagement from "./components/menu-hamburguer/MenuHamburguerManagement";
import InputAnimationManagement from "./components/input-animation/InputAnimationManagement";

const App = () => {



  return (
    <div style={{display: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px', backgroundColor: '#222'}}>
        <MenuHamburguerManagement />
        <InputAnimationManagement />
    </div>
  )
}

export default App