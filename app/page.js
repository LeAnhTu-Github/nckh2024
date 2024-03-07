import React from "react";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import UserStatis from "./components/UserStatis/UserStatis";

const Home = () => {
  return (
    <div className=" w-full h-auto flex flex-col gap-6">
      <Navbar />
      <News />
      <UserStatis />
    </div>
  );
};

export default Home;
