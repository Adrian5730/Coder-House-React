import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={ <Home />} />
          <Route exact path='/categories' element={ <ItemListContainer />} />
          <Route exact path='/category/:categoryId' element={ <ItemListContainer />} />
          <Route exact path='/item/:productId' element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
      
  );
}

export default App;
