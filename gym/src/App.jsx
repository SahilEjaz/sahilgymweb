import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>GymFluncer</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <section className="hero">
                    <h2>Welcome to GymFluncer</h2>
                    <p>Your journey to fitness starts here!</p>
                    <button className="cta-button">Get Started</button>
                </section>
                <section className="services" id="services">
                    <h2>Our Services</h2>
                    <div className="service-card">Personal Training</div>
                    <div className="service-card">Group Classes</div>
                    <div className="service-card">Nutrition Coaching</div>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2024 GymFluncer. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;