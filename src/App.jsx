import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import classes from './App.module.css';

function App() {
  return (
    <>
    <div>
    <NavBar />
    <ItemListContainer greeting={'Bienvenidos a Freestyle Clothes'} />
    <h2 className={classes.title}>Aloha!🌴
    </h2>
      
    </div>
    </>
  )
}

export default App
