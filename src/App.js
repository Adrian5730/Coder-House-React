import './App.css';
import './components/Header/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Header/NavBar/NavBar';
import { ItemListContainer } from './components/Header/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

// import { CartWidget } from './components/NavBar/CartWidget';


function App() {

  return (
    <>
      <header id="header">
        <NavBar />
        <ItemDetailContainer />
      </header>
    </>
      
  );
}

export default App;
