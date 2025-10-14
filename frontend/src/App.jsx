//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Header />
    <div class='App-body'>
      <Home />
    </div>
    <Footer />
    </div>
  );
}


export default App;
