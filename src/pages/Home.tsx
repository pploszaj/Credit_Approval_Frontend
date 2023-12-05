import React from "react";
import { useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h3 className="text-5xl">Welcome to</h3>
        <h1 className="text-8xl">Credit+</h1>
        <button className="text-xl mt-3 text-blue-700" onClick={() => navigate('/form')}>Get Started</button>
      </div>
    </>
  );
}

export default Home;
