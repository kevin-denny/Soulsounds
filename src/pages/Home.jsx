import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title animate-fade-in">
            Voices That Touch <br />
            <span>The Soul</span>
          </h1>
          <p className="hero-subtitle animate-fade-in delay-100">
            Award winning all-women choir from Sri Lanka. Experience our latest album out now!
          </p>
          <div className="hero-cta animate-fade-in delay-200">
            <Link to="/events" className="btn-primary">Upcoming Shows</Link>
            <Link to="/about" className="btn-outline">Our Story</Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="featured-grid">
            <div className="featured-content">
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Latest <span>Album</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Available at iTunes, Amazon, Spotify, Bandcamp and old fashion CD with digital booklet limited edition.
              </p>
              <button className="btn-primary">Listen Now</button>
            </div>
            <div className="featured-image-placeholder glass">
              <div className="placeholder-text">Album Art placeholder</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
