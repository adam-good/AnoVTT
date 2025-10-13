import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

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

const Body = () => {
  return (
    <div className='App-body'>
      <h1>Helo World</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
