import './App.css'
import classes from './App.module.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Todos los productos'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por Categoria '}/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            
            
          </Routes>
          <h2 className={classes.title}>Aloha!🌴  </h2>
        </BrowserRouter>
      </div>
    </>
  )
}


export default App
