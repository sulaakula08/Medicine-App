import React, { useState } from "react";
import "./Description.css";
import Header from "../../components/header/Header";

const Description = () => {
    const [description, setDescription] = useState("");
    const [isOutcome, setIsOutcome] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleInputChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = () => {
        if (description.trim() === "") {
            setShowError(true); // Показать ошибку, если описание пустое
        } else {
            setShowError(false);
            alert("Description Submitted: " + description);
            setIsOutcome(true); // Показать результаты
        }
    };

    const handleCloseError = () => {
        setShowError(false); // Закрыть блок ошибки
    };

    return (
        <>
            <Header />
            <div className="desc">
                <div className="desc-area">
                    <div className="desc-prompt">
                        <h1 className="heading">Describe Your Symptoms</h1>
                        <textarea
                            placeholder="Write your description..."
                            value={description}
                            onChange={handleInputChange}
                            className="desc-input"
                        />
                    </div>
                    <button onClick={handleSubmit} className="submit-btn">
                        Submit
                    </button>
                    {showError && (
                        <div className="error-message">
                            <span>Please fill in the description.</span>
                            <button
                                onClick={handleCloseError}
                                className="close-btn"
                            >
                                &times;
                            </button>
                        </div>
                    )}
                </div>
                {isOutcome && (
                    <div className="desc-outcome">
                        <div className="possible-des outcome-box">
                            <h1>Possible Diseases</h1>
                            <div className="area"></div>
                        </div>
                        <div className="desc-des outcome-box">
                            <h1>Description of Disease</h1>
                            <div className="area"></div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Description;
