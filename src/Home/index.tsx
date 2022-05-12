import React from "react";
import { Link, Outlet, } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/cat/5pf">
        <button>Cat 1</button>
      </Link>


      <br/>

      <Link to="/cat/x8sLRmUBQ/description/Abyssinian">
        <button>Cat 2</button>
      </Link>
      <br/>
      <Link to="/cat/OC2m-JoSp">
        <button>Cat 3</button>
      </Link>

      <Outlet />
    </div>
  );
};

export default Home;
