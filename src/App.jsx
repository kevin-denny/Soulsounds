import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Placeholder pages for now
const About = () => <div className="section container" style={{minHeight: '80vh', paddingTop: '150px'}}><h1 className="section-title">About <span>Us</span></h1><p>The story of the award-winning all-women choir.</p></div>;
const Gallery = () => <div className="section container" style={{minHeight: '80vh', paddingTop: '150px'}}><h1 className="section-title">Photo <span>Gallery</span></h1><p>Our memories and performances.</p></div>;
const Events = () => <div className="section container" style={{minHeight: '80vh', paddingTop: '150px'}}><h1 className="section-title">Tour <span>Dates</span></h1><p>Upcoming shows and events.</p></div>;
const Contact = () => <div className="section container" style={{minHeight: '80vh', paddingTop: '150px'}}><h1 className="section-title">Get in <span>Touch</span></h1><p>Contact information and bookings.</p></div>;

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
