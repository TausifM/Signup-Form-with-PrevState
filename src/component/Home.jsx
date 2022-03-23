import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ top: "50%", right: "50%" }}>
      <h1>Home</h1>
      <Link to='/signup'><button>Signup</button> </Link>
    </div>
  );
};

export default Home;
