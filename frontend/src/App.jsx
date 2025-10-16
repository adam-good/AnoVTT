//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import UserProfile from './components/UserProfile.jsx';
import CharacterSheet from './components/CharacterSheet.jsx';
import Campaign from './components/Campaign.jsx';
import GameTable from './components/GameTable.jsx';
  

export const Header = () => {
  return (
    <div class='App-header'>
      <h1>AnoVTT</h1>
      <Navbar />
    </div>
  );
}

export const Footer = () => {
  return <p>Copywrite 2025 My Stuff</p>;
}

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <div class='App-body'>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={Signin} />
          <Route path="/profile" element={UserProfile} />
          <Route path="/character-sheet" element={CharacterSheet} />
          <Route path="/campaign" element={Campaign} />
          <Route path="/table" element={GameTable} />
        </Routes>
      </div>
      <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
