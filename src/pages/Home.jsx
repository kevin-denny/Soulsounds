import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Abstract floating shapes for "movement of music" */}
        <div className="shape shape-1 animate-float"></div>
        <div className="shape shape-2 animate-float delay-200"></div>
        <div className="shape shape-3 animate-float delay-400"></div>

        <div className="container hero-content">
          <div className="hero-text-wrapper glass-dark animate-fade-in">
            <h1 className="hero-title">
              Your Voice <br />
              <span className="text-gradient">Matters Here</span>
            </h1>
            <p className="hero-subtitle delay-100">
              Join the award-winning all-women choir that inspires, empowers, and brings joy through the movement of music.
            </p>
            <div className="hero-cta delay-200">
              <Link to="/events" className="btn-primary">Experience Live</Link>
              <Link to="/about" className="btn-light">Our Journey</Link>
            </div>
          </div>
        </div>
        
        {/* Wave divider at the bottom of hero */}
        <div className="wave-divider wave-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--bg-primary)"></path>
          </svg>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section featured-section">
        <div className="container">
          <div className="featured-grid">
            <div className="featured-content animate-fade-in">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                Latest <span className="text-gradient">Album</span>
              </h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 2.5rem 0' }}>
                Available at iTunes, Amazon, Spotify, Bandcamp and old fashion CD with digital booklet limited edition.
              </p>
              <button className="btn-primary">Listen Now</button>
            </div>
            
            <div className="featured-image-wrapper animate-fade-in delay-200">
              <div className="featured-image-placeholder glass animate-organic">
                {/* Real photo placeholder */}
                <div className="photo-placeholder">
                  <span className="placeholder-text">Album Art placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Harmony Section */}
      <section className="section bg-dark text-light harmony-section">
        <div className="wave-divider wave-top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="var(--bg-primary)"></path>
          </svg>
        </div>
        
        <div className="container">
          <div className="harmony-content">
            <h2 className="section-title" style={{ color: 'white' }}>
              Finding <span className="text-gradient">Harmony</span>
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
              A community focused, faith-centered artistic expression.
            </p>
            <div className="harmony-cards">
              <div className="harmony-card glass-dark">
                <h3>Empowering</h3>
                <p>Lifting each other up through the power of collective voices.</p>
              </div>
              <div className="harmony-card glass-dark delay-100">
                <h3>Joyful</h3>
                <p>Spreading happiness and artistic creativity to every audience.</p>
              </div>
              <div className="harmony-card glass-dark delay-200">
                <h3>Professional</h3>
                <p>Award-winning dedication to musical excellence and performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
