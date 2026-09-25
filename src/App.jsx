import {Toaster} from "react-hot-toast"
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Header from './components/header/Header'
// import { CartProvider } from './contextStore/CartProvider'
// import { useContext } from 'react'
import Home from './pages/home/Home'
import Products from './components/products/Products'
import Favorit from './pages/Favorit'
import ShopCart from './pages/ShopCart'


function App() {



//fetch('https://dummyjson.com/products/category/smartphones')


  return (
 <>
 
 <Toaster/>
 <BrowserRouter>
 <Header/>
 
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<ShopCart/>}/>
  <Route path='/favorit' element={<Favorit/>}/>
  {/* <Route path='/home' element={<Home/>}/> */}
  <Route path='/products/category/:category' element={<Products/>}/>
 </Routes>
 </BrowserRouter>
 
 
 </>
  )
}

export default App
