import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Intro />
        </div>
    );
};

export default Home;
