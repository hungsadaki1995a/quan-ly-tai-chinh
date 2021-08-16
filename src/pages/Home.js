import React from 'react';
import money from '../assets/money.svg';
import './Home.scss';

function Home() {
        return (
                <div className="home-container">
                       <img src={money} alt="money background" className="home-background"></img>
                </div>
        )
}

export default Home
