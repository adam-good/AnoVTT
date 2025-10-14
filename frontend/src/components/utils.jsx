
import Navbar from "./Navbar"; 

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

export const Body = (props) => {
  return (
    <div className='App-body'>
      {props.element}
    </div>
  )
}
