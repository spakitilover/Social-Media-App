import React from "react";
import Leftbar from "../../components/leftbar/leftbar";
import Mid from "../../components/mid/mid";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Mid />
        <Leftbar />
      </div>
    </>
  );
};

export default Home;
