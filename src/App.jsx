import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import Layout from "./components/Layout";
import Home from './components/Home';
import FoodGallery from './components/FoodGallery';

// import './index.css';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route  index element={<Home/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='about-us' element={<AboutUs/>} />
        <Route path='food-gallery' element={<FoodGallery/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
