import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

// Premium placeholders for other pages
const PlaceholderPage = ({ title, subtitle, highlight }) => (
  <div className="section container page-wrapper">
    <h1 className="section-title animate-fade-in">{title} <span>{highlight}</span></h1>
    <p className="section-subtitle animate-fade-in delay-100">{subtitle}</p>
    
    <div className="placeholder-card animate-fade-in delay-200">
      <div className="glass-dark" style={{
        width: '100px', 
        height: '100px', 
        borderRadius: 'var(--radius-organic)', 
        margin: '0 auto 2rem',
        background: 'var(--accent-gradient)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      </div>
      <h3 style={{ marginBottom: '1rem' }}>Content Coming Soon</h3>
      <p style={{ color: 'var(--text-secondary)' }}>This section is currently being harmonized.</p>
    </div>
  </div>
);

const About = () => <PlaceholderPage title="About" highlight="Us" subtitle="The story of the award-winning all-women choir." />;
const Gallery = () => <PlaceholderPage title="Photo" highlight="Gallery" subtitle="Our memories and performances." />;
const Events = () => <PlaceholderPage title="Tour" highlight="Dates" subtitle="Upcoming shows and events." />;
const Contact = () => <PlaceholderPage title="Get in" highlight="Touch" subtitle="Contact information and bookings." />;

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
