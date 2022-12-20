
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import Navbar from './Componentes/Navbar/Navbar'
import ItemDetailsContainer from './Componentes/itemDetailsContainer/ItemDetailsContainer'
import CartContainer from './Componentes/cartContainer/CartContainer'
import "./Componentes/Navbar/navbar.css"
import './App.css'
import "./Componentes/item/item.css"
import "./Componentes/ItemListContainer/itemListContainer.css"
import "./Componentes/itemDetails/itemDetails.css"


function App() {

  return (
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <ItemListContainer/> }/>
      <Route path='/details/:prodId' element={ <ItemDetailsContainer/> }/>  
      <Route path='/cart' element={ <CartContainer/> } />  
    </Routes>
  </BrowserRouter>
  )
  
}

export default App
