import React from "react";
import "./Intro.css";
import heart from "../../assets/3d-rendering-realistic-heart_23-2151837521.avif";
import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-part">
                <h1>An Advisor for Your Health</h1>
                <p>
                    Based on X-ray scan patterns, your symptom descriptions, and
                    MRI scans, our advanced AI models can identify potential
                    diseases, tumors, and injuries that you have and alert you
                    to them. We also provide you with some valuable information
                    about the possible disease.
                </p>
                <div className="buttons">
                    <Link to="/desc">
                        <button className="try-btn">Try it out</button>
                    </Link>
                    <button className="learn-btn">Learn More</button>
                </div>
            </div>
            <div className="logo">
                <img src={heart} alt="" />
            </div>
        </div>
    );
};

export default Intro;
