import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import classes from './App.module.css';
import ItemCount from './Components/ItemCount/ItemCount.jsx';

function App() {
  return (
    <>
    <div>
    <NavBar />
    <ItemCount initial={1} stock={30} onAdd={(quantity) => console.log('Cantidad Agregada', quantity)} />
    <ItemListContainer greeting={'Bienvenidos a Freestyle Clothes'} />
    <h2 className={classes.title}>Aloha!🌴
    </h2>
      
    </div>
    </>
  )
}

export default App
