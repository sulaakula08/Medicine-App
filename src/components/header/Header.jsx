import React, { useState, useEffect } from "react";
import "./Header.css";
import sun from "../../assets/sun-svgrepo-com (3).svg";
import moon from "../../assets/moon-svgrepo-com (1).svg";
import { Link } from "react-router-dom";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMoon, setIsMoon] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    const handleChange = () => {
        setIsMoon(!isMoon);
        document.body.classList.toggle("dark-theme", !isMoon);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="links">
                <ul>
                    <Link to="/">
                        {" "}
                        <li>Home</li>
                    </Link>

                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </div>
            {!isScrolled && (
                <div className="sign">
                    <button className="sign-in-btn">Sign In</button>
                    <button className="sign-up-btn">Sign Up</button>
                </div>
            )}
            <div className="dark-btn">
                <button onClick={handleChange}>
                    <div className="icon">
                        <img src={isMoon ? sun : moon} alt="Theme Icon" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Header;
