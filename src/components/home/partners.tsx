import React from "react";
import "./Partners.css";

const Partners: React.FC = () => {
    return (
        //
        <div className="partners-section">
            <h1>AS SEEN IN</h1>

            <div className="slider-wrapper">
                <div className="partners-slider">
                    <img src="./L1.jpg" alt="Partner 1" />
                    <img src="./L2.jpg" alt="Partner 2" />
                    <img src="./L3.jpg" alt="Partner 3" />

                    {/* duplicate for smooth infinite loop */}
                    <img src="./L1.jpg" alt="Partner 1" />
                    <img src="./L2.jpg" alt="Partner 2" />
                    <img src="./L3.jpg" alt="Partner 3" />
                </div>
            </div>
        </div>
    );
};

export default Partners;
