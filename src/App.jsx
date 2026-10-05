import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Article from './pages/Article';
import Category from './pages/Category';
import Lenis from '@studio-freight/lenis';
import emLogo from './assets/em.jpg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  const mainLinks = [
    "Latest News", "Business", "Markets", "Finance", 
    "Technology", "AI", "Startups", "Leadership", "More"
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F9FA]/95 backdrop-blur-2xl border-b border-border shadow-md" onMouseLeave={() => setActiveMegaMenu(null)}>
      {/* Ticker */}
      <div className="bg-[#0B1220] text-white py-1.5 text-[11px] font-ui font-medium overflow-hidden whitespace-nowrap flex items-center border-b border-accent-gold/20">
        <div className="container mx-auto px-6 flex items-center">
          <span className="text-accent-gold font-bold mr-4 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse"></span>
            Live
          </span>
          <div className="flex gap-8 animate-marquee opacity-80 font-ui">
            <span>S&P 500 hits record high as AI rally continues</span>
            <span>•</span>
            <span>European Central Bank holds interest rates steady</span>
            <span>•</span>
            <span>Global tech M&A activity surges 40% in Q3</span>
            <span>•</span>
            <span>Oil prices stabilize amid easing geopolitical tensions</span>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between relative text-primary">
        
        {/* Left: Logo */}
        <div className="flex-none flex items-center pr-8">
          <Link to="/" className="flex items-center group">
            <img 
              src={emLogo} 
              alt="Business Walk Ins" 
              className="h-10 w-10 md:h-12 md:w-12 object-cover shadow-sm group-hover:scale-105 transition-all duration-300 rounded" 
              onError={(e) => { e.target.onerror = null; e.target.outerHTML='<div class="text-xl md:text-2xl font-heading font-bold text-primary tracking-tight">BUSINESS <span class="text-accent-gold">WALKINS</span></div>' }} 
            />
          </Link>
        </div>

        {/* Center: Navigation Menu */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-5 xl:gap-7 font-ui text-[10px] xl:text-xs font-bold uppercase tracking-widest text-primary/80">
          {[
            "News", "Interviews", "Awards", "Events", 
            "Media", "Startups", "Magazine", "More"
          ].map((link) => (
            <div 
              key={link}
              className="relative group h-16 md:h-20 flex items-center cursor-pointer"
              onMouseEnter={() => setActiveMegaMenu(link === "Awards" || link === "Events" || link === "Magazine" ? link : null)}
            >
              <Link to={`/category/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-accent-gold transition-colors relative pb-1">
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Right: Actions */}
        <div className="flex-none flex items-center justify-end gap-4 md:gap-5">
          <button className="hidden xl:flex items-center gap-2 text-[10px] font-ui font-bold uppercase tracking-widest text-primary/60 hover:text-primary transition-colors">
            <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></span> AI Search
          </button>
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors hidden sm:block">
            <Search className="w-5 h-5 text-primary" />
          </button>
          <button className="hidden md:block font-ui text-[10px] font-bold uppercase tracking-widest text-primary/80 hover:text-accent-gold transition-colors">
            Newsletter
          </button>
          <button className="bg-transparent border border-primary/20 text-primary font-ui text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-primary hover:text-white transition-colors rounded-full hidden sm:block">
            Subscribe
          </button>
          <button className="bg-primary text-white font-ui text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-accent-gold hover:text-primary transition-colors rounded-full shadow-soft hidden lg:block">
            Premium
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden items-center gap-2 group hover:text-accent-gold transition-colors z-50 ml-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-primary group-hover:text-accent-gold transition-colors" /> : <Menu className="w-6 h-6 text-primary group-hover:text-accent-gold transition-colors" />}
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      {activeMegaMenu && (
        <div className="absolute top-full left-0 right-0 bg-surface border-b border-border shadow-2xl text-primary hidden lg:block animate-fade-in origin-top">
          <div className="container mx-auto px-6 py-12 flex gap-12">
            <div className="w-1/4">
              <h4 className="font-ui font-bold text-lg mb-6 border-b border-border pb-4">{activeMegaMenu}</h4>
              <ul className="space-y-4 font-ui text-sm text-text-secondary">
                <li><Link to="/category/interviews" className="hover:text-accent-blue transition-colors">Featured Articles</Link></li>
                <li><Link to="/category/reports" className="hover:text-accent-blue transition-colors">Popular Categories</Link></li>
                <li><Link to="/category/trending" className="hover:text-accent-blue transition-colors">Trending Stories</Link></li>
                <li><Link to="/category/editor-picks" className="hover:text-accent-blue transition-colors">Editor's Picks</Link></li>
                <li><Link to="/category/quick-links" className="hover:text-accent-blue transition-colors">Quick Links</Link></li>
              </ul>
            </div>
            <div className="w-3/4 grid grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="overflow-hidden mb-4 h-40 rounded-luxury">
                    <img src={`https://images.unsplash.com/photo-1554469232-0c9bea714ff9?auto=format&fit=crop&q=80&w=600&random=${item+activeMegaMenu}`} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <span className="text-accent-gold text-[10px] font-bold font-ui uppercase tracking-widest mb-2 block">{activeMegaMenu} Insights</span>
                  <h5 className="font-heading font-bold text-lg leading-snug group-hover:text-accent-blue transition-colors">The strategic importance of global supply chain optimization</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-xl border-b border-white/10 shadow-2xl lg:hidden text-white h-screen overflow-y-auto pb-32">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4 font-ui font-bold uppercase tracking-widest text-white/80 text-sm">
            {mainLinks.map(link => (
               <Link key={link} to={`/category/${link.toLowerCase().replace(' ', '-')}`} onClick={() => setMobileMenuOpen(false)} className="py-3 hover:text-accent-gold transition-colors border-b border-white/5">{link}</Link>
            ))}
            <div className="flex flex-col gap-4 mt-8">
              <Link to="/subscribe" onClick={() => setMobileMenuOpen(false)} className="bg-transparent border border-white/20 text-white py-3 rounded-full hover:bg-white hover:text-primary transition-colors text-center">Subscribe</Link>
              <Link to="/category/magazine" onClick={() => setMobileMenuOpen(false)} className="bg-accent-gold text-primary py-3 rounded-full hover:bg-white transition-colors text-center">Premium Membership</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-primary text-white py-24 border-t border-white/10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-6">
             <img 
               src={emLogo} 
               alt="Business eMagazine" 
               className="h-14 w-14 object-cover rounded-full border-2 border-accent-gold/40 shadow-[0_0_15px_rgba(200,164,93,0.3)] hover:border-accent-gold hover:scale-105 transition-all duration-300" 
               onError={(e) => { e.target.onerror = null; e.target.outerHTML='<div class="text-3xl font-heading font-bold text-white">BUSINESS MAGAZINE</div>' }} 
             />
          </div>
          <p className="text-white/60 font-body max-w-md text-lg mb-8">
            The premier digital business eMagazine for global insights, luxury lifestyle, and emerging market trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Subscribe to Newsletter" className="bg-white/10 px-4 py-3 font-ui text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent-gold w-full sm:w-64 rounded-full" />
            <button className="bg-accent-gold text-primary px-8 py-3 font-ui font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-colors rounded-full">Subscribe</button>
          </div>
        </div>
        <div>
          <h4 className="font-ui font-bold text-lg mb-6 text-accent-gold">Premium Content</h4>
          <ul className="space-y-4 text-white/70 font-body text-sm">
            <li><Link to="/category/interviews" className="hover:text-white transition-colors">Executive Interviews</Link></li>
            <li><Link to="/category/reports" className="hover:text-white transition-colors">Research Reports</Link></li>
            <li><Link to="/category/markets" className="hover:text-white transition-colors">Market Intelligence</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-ui font-bold text-lg mb-6 text-accent-gold">Company</h4>
          <ul className="space-y-4 text-white/70 font-body text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Editorial Team</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Advertise With Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Become Contributor</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('welcomePopupV3');
    if (!hasSeenPopup) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden'; // Disable scroll
    }

    const handleEsc = (e) => {
      if (e.key === 'Escape') closePopup();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'auto'; // Re-enable scroll
      sessionStorage.setItem('welcomePopupV3', 'true');
    }, 600); // Matches cinematic exit animation duration
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-700 ${isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-fade-in'}`}>
      {/* Dark Blurred Backdrop */}
      <div className="absolute inset-0 bg-[#0B1220]/95 backdrop-blur-3xl transition-opacity duration-700" onClick={closePopup}></div>
      
      {/* Background Particles (Subtle) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-gold/5 via-transparent to-transparent opacity-50"></div>

      {/* Glassmorphism Card */}
      <div className={`relative w-[95%] max-w-5xl bg-surface/5 backdrop-blur-md rounded-luxury overflow-hidden shadow-[0_0_50px_rgba(200,164,93,0.15)] flex flex-col lg:flex-row h-auto max-h-[90vh] lg:h-[600px] border border-accent-gold/20 transition-transform duration-700 ${isClosing ? 'scale-110 opacity-0' : 'scale-100 animate-fade-in-up'}`}>
        
        {/* Left Image Section - Magazine Cover & Guest */}
        <div className="w-full lg:w-5/12 h-64 lg:h-full relative overflow-hidden flex-shrink-0">
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2940&auto=format&fit=crop" alt="Special Guest" className="w-full h-full object-cover opacity-90 animate-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10">
            <span className="text-accent-gold text-[10px] font-bold font-ui uppercase tracking-widest mb-3 block flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse"></span> Special Guest
            </span>
            <h3 className="text-white font-heading font-bold text-3xl md:text-4xl leading-snug drop-shadow-xl mb-2">Mahima Chaudhary</h3>
            <p className="text-white/80 font-ui text-sm">Bollywood Celebration | Sham-E-Banaras</p>
          </div>
        </div>
        
        {/* Right Content Section */}
        <div className="w-full lg:w-7/12 p-8 lg:p-14 flex flex-col justify-center relative bg-primary text-white border-l border-white/5 overflow-y-auto lg:overflow-visible">
          <button onClick={closePopup} className="absolute top-6 right-6 text-white/40 hover:text-accent-gold transition-colors z-10 bg-white/5 hover:bg-white/10 p-2.5 rounded-full border border-white/5 hover:border-accent-gold/30">
            <X className="w-5 h-5" />
          </button>
          
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
               <span className="text-accent-gold text-xs font-bold font-ui uppercase tracking-widest">Business Walkins Magazine</span>
               <span className="w-12 h-[1px] bg-accent-gold/50"></span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-5 text-white leading-[1.1]">
              Indian Iconic <br/>
              <span className="text-accent-gold">Excellence Award 2026</span>
            </h2>
            <p className="text-white/70 font-body text-base leading-relaxed mb-8 max-w-lg">
              The premier international editorial event recognizing visionaries, leaders, and startups shaping the future of global commerce. Join our latest edition launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 font-ui text-xs font-bold uppercase tracking-widest text-white/90 mb-8 bg-surface/5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-inner">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center">
                    <span className="text-accent-gold text-sm">📅</span> 
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/50 text-[9px] mb-0.5">Date</span>
                    17 Dec 2026
                  </div>
               </div>
               <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center">
                    <span className="text-accent-gold text-sm">📍</span> 
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/50 text-[9px] mb-0.5">Venue</span>
                    Taj Ganges, Varanasi
                  </div>
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
            <button onClick={closePopup} className="bg-accent-gold text-primary px-6 py-4 font-ui font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors rounded-full text-center shadow-[0_0_20px_rgba(200,164,93,0.3)]">
              Continue to Website
            </button>
            <Link to="/category/magazine" onClick={closePopup} className="bg-white/10 border border-white/10 text-white px-6 py-4 font-ui font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-colors rounded-full text-center">
              Explore Magazine
            </Link>
            <Link to="/category/awards" onClick={closePopup} className="bg-transparent border border-white/20 text-white px-6 py-4 font-ui font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors rounded-full text-center">
              Register Now
            </Link>
            <Link to="/subscribe" onClick={closePopup} className="bg-transparent border border-white/20 text-white px-6 py-4 font-ui font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors rounded-full text-center">
              Subscribe Newsletter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <div className="bg-surface min-h-screen text-text-primary selection:bg-accent-gold selection:text-white overflow-x-hidden relative">
        <WelcomePopup />
        <Header />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
