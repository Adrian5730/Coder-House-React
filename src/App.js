import './App.css';
import './components/Header/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Header/NavBar/NavBar';
// import { CartWidget } from './components/NavBar/CartWidget';


function App() {

  return (
    <header id="header">
      <NavBar />
    </header>
      
  );
}

export default App;
