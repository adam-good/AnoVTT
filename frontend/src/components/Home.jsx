
import "../App.css";
import { Header, Footer, Body } from "./utils"; 

const homeContent = () => {
  return (
    <h1>AnoVTT Home Page</h1>
  );
}

const Home = () => {
  return (<>
    <Header />
    <Body element={homeContent()} />
    <Footer />
  </>);
}

export default Home;
