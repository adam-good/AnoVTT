//import logo from './logo.svg';
import { RouterProvider } from 'react-router';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Router from './router.jsx';

const Header = () => {
  return (
    <div class='App-header'>
      <h1>AnoVTT</h1>
      <Navbar />
    </div>
  );
}

const Footer = () => {
  return <p>Copywrite 2025 My Stuff</p>;
}

function App() {
  return (
    <div className="App">
    <Header />
    <div class='App-body'>
      <RouterProvider router={Router} />
    </div>
    <Footer />
    </div>
  );
}


export default App;
