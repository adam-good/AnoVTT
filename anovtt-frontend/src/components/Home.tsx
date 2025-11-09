import React from "react";

const Home: React.FC = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  return (
    <div>
      {!(token === null) ? <h1>Welcome!</h1> : <h1>AnoVTT Home Page</h1>}
    </div>
  );
};

export default Home;
