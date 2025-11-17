import React from 'react';
import './Home.css';
import Partners from './partners';

const Home: React.FC = () => {
    return (
        <>
            <div className="home">
                <div className="box" style={{ backgroundImage: "url('./menu.jpg')" }}>
                    <div className="overlay">
                        <h1>MENU</h1>
                        <button className="cta-btn">VIEW MENU</button>
                    </div>
                </div>

                <div className="box" style={{ backgroundImage: "url('./catering.jpg')" }}>
                    <div className="overlay">
                        <h1>CATERING</h1>
                        <button className="cta-btn">ORDER CATERING</button>
                    </div>
                </div>

                <div className="box" style={{ backgroundImage: "url('./location.jpg')" }}>
                    <div className="overlay">
                        <h1>LOCATIONS</h1>
                        <button className="cta-btn">FIND LOCATION</button>
                    </div>
                </div>

                <div className="box" style={{ backgroundImage: "url('./cheffs.jpg')" }}>
                    <div className="overlay">
                        <h1>OUR STORY</h1>
                        <button className="cta-btn">READ STORY</button>
                    </div>
                </div>
            </div>

            {/* partners is now a full-width section below the grid */}
            <Partners />
        </>
    );
};

export default Home;
