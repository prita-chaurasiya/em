import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, User, TrendingUp, PlayCircle, ArrowRight, BarChart2, Briefcase, Zap, Globe, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Reusing the existing HeroCover
const HeroCover = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
      category: "Global Markets",
      readTime: "12 min read",
      title: "The Future of Global Markets in 2027",
      desc: "An exclusive look into how artificial intelligence, automated financing, and sustainable technology are reshaping international trade paradigms.",
      author: "Jonathan Sterling",
      role: "Editor-in-Chief"
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop",
      category: "Leadership",
      readTime: "8 min read",
      title: "The New Architecture of Corporate Leadership",
      desc: "As AI integrates deeper into workflows, the definition of executive leadership is experiencing a massive paradigm shift.",
      author: "Elena Rodriguez",
      role: "Global Strategy Head"
    },
    {
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2940&auto=format&fit=crop",
      category: "Finance",
      readTime: "15 min read",
      title: "Sustainable Fintech: The Green Revolution",
      desc: "How the next generation of financial technology is prioritizing ESG criteria over traditional rapid growth metrics.",
      author: "Michael Chang",
      role: "Finance Editor"
    },
    {
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2940&auto=format&fit=crop",
      category: "Technology",
      readTime: "10 min read",
      title: "The Semiconductor Supremacy Race",
      desc: "Inside the multi-billion dollar global battle to secure supply chains and dominate the next generation of microchips.",
      author: "Sarah Jenkins",
      role: "Tech Correspondent"
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2940&auto=format&fit=crop",
      category: "Startups",
      readTime: "7 min read",
      title: "Unicorn Valuations Face Reality Check",
      desc: "Why top venture capital firms are quietly slashing valuations of late-stage startups ahead of potential IPOs.",
      author: "David Ross",
      role: "Venture Capital Analyst"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop",
      category: "AI & Innovation",
      readTime: "20 min read",
      title: "Beyond the LLM: The Next Phase of AI",
      desc: "Experts predict the shift from language models to autonomous action agents will redefine knowledge work by 2028.",
      author: "Dr. Anya Petrova",
      role: "AI Research Director"
    }
  ];

  return (
    <section className="relative h-screen w-full bg-primary overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1500}
        parallax={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true, renderBullet: (index, className) => `<span class="${className} w-16 h-1 bg-white/20 hover:bg-white/50 rounded-none transition-all duration-300 relative after:content-[''] after:absolute after:bottom-4 after:left-0 after:text-white/50 after:text-[10px] after:font-ui after:font-bold after:content-['0${index + 1}']"></span>` }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full group">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center animate-kenburns origin-center transition-transform duration-[10000ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            <div className="container mx-auto px-6 h-full relative z-10 flex flex-col justify-end pt-32 pb-24 md:pb-32">
              <div className="max-w-4xl" data-swiper-parallax="-300">
                <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                  <span className="px-4 py-1.5 bg-accent-gold text-primary text-xs font-bold font-ui uppercase tracking-widest">{slide.category}</span>
                  <span className="text-white/80 font-ui text-sm flex items-center gap-2"><Clock className="w-4 h-4" /> {slide.readTime}</span>
                </div>
                <Link to="/article/example">
                  <h1 className="text-5xl md:text-8xl font-heading font-bold text-white leading-[1.05] mb-6 hover:text-accent-gold transition-colors duration-500 opacity-0 animate-fade-in-up drop-shadow-2xl" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                    {slide.title}
                  </h1>
                </Link>
                <p className="text-xl md:text-2xl text-white/80 font-body max-w-3xl mb-10 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                  {slide.desc}
                </p>
                <div className="flex items-center justify-between opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                  <div className="flex items-center gap-4">
                    <img src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&random=${index}`} alt="Author" className="w-12 h-12 rounded-full border-2 border-white/20" />
                    <div>
                      <div className="text-white font-ui font-medium">By {slide.author}</div>
                      <div className="text-accent-gold text-xs font-ui uppercase tracking-wider">{slide.role}</div>
                    </div>
                  </div>
                  
                  <Link to="/article/example" className="hidden md:flex items-center gap-2 bg-transparent border border-white/30 text-white font-ui text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-primary transition-colors rounded-full group/btn">
                    Read Story <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const AwardsHighlight = () => (
  <section className="py-24 bg-primary text-white border-y border-white/10 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-gold/5 blur-[150px] rounded-full pointer-events-none"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-6 border-b border-white/20">
        <div>
          <span className="text-accent-gold text-xs font-bold font-ui uppercase tracking-widest mb-3 block flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent-gold rounded-full"></span> Recognizing Excellence, Celebrating Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-2">Indian Iconic Excellence Award 2026</h2>
          <p className="font-ui text-white/60 text-sm max-w-xl mt-4 mb-6">Honouring visionaries across industries. Your brand on a bigger stage with powerful visibility and prestigious associations.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 font-ui text-xs font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                 <span className="text-accent-gold">📍</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white/50 text-[10px]">Place</span>
                <span className="text-white">Varanasi</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                 <span className="text-accent-gold">📅</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white/50 text-[10px]">Event Month</span>
                <span className="text-white">Dec 2026</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 mt-8 md:mt-0 items-end">
          <Link to="/category/awards" className="font-ui text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-2 bg-accent-gold border border-accent-gold px-8 py-4 rounded-full hover:bg-transparent shadow-lg w-full sm:w-auto text-center justify-center">
            Submit Nomination <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="text-right">
            <span className="text-white/50 font-ui text-[10px] font-bold uppercase tracking-widest block mb-1">Nomination Start WhatsApp On</span>
            <div className="text-accent-gold font-heading font-bold text-lg">9250430016 / 7007667808</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {[
          { title: "Entrepreneur of the Year", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2940&auto=format&fit=crop", cat: "Leadership" },
          { title: "Healthcare Excellence Award", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop", cat: "Healthcare" },
          { title: "Young Achiever Award", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2940&auto=format&fit=crop", cat: "Youth" },
          { title: "Women's Achiever Award", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2940&auto=format&fit=crop", cat: "Empowerment" },
          { title: "Digital Quality Content Award", img: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2940&auto=format&fit=crop", cat: "Media" }
        ].map((award, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="aspect-[4/5] rounded-luxury overflow-hidden mb-6 relative border border-white/10 shadow-xl">
              <img src={award.img} alt={award.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 text-center">
                 <div className="w-12 h-12 mx-auto bg-accent-gold/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-accent-gold/50 group-hover:bg-accent-gold transition-colors">
                    <Briefcase className="w-5 h-5 text-accent-gold group-hover:text-primary" />
                 </div>
              </div>
            </div>
            <h3 className="font-heading font-bold text-lg leading-snug group-hover:text-accent-gold transition-colors text-center">{award.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EventsBanner = () => (
  <section className="py-24 bg-surface">
    <div className="container mx-auto px-6">
      <div className="flex items-center gap-4 mb-16 border-b border-border pb-6">
        <Globe className="w-8 h-8 text-primary" />
        <h2 className="text-4xl font-heading font-bold text-primary">Global Conferences & Events</h2>
      </div>
      
      <div className="bg-white rounded-luxury shadow-2xl border border-border overflow-hidden flex flex-col md:flex-row">
         <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <span className="bg-accent-gold text-primary text-[10px] font-bold font-ui uppercase tracking-widest px-3 py-1 mb-6 inline-block w-max rounded-full">Upcoming Summit</span>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">The Future of Global Finance Summit 2027</h3>
            <p className="text-text-secondary font-body text-lg mb-8">Join 500+ global CEOs, investors, and policymakers in Dubai for an exclusive two-day summit exploring the intersection of AI, sustainability, and automated markets.</p>
            
            <div className="flex flex-col sm:flex-row gap-8 mb-10">
               <div>
                 <div className="text-xs font-bold font-ui uppercase tracking-widest text-text-secondary mb-1">Date</div>
                 <div className="font-heading font-bold text-primary text-xl">Nov 15-16, 2026</div>
               </div>
               <div>
                 <div className="text-xs font-bold font-ui uppercase tracking-widest text-text-secondary mb-1">Location</div>
                 <div className="font-heading font-bold text-primary text-xl">Dubai, UAE</div>
               </div>
            </div>
            
            <Link to="/events" className="bg-primary text-white font-ui text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-accent-gold transition-colors text-center w-max">
              Register Interest
            </Link>
         </div>
         <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop" alt="Conference" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent md:block hidden"></div>
         </div>
      </div>
    </div>
  </section>
);

const TrendingStories = () => (
  <section className="py-24 bg-primary text-white border-y border-white/10">
    <div className="container mx-auto px-6">
      <div className="flex items-center gap-4 mb-16 border-b border-white/20 pb-6">
        <TrendingUp className="w-8 h-8 text-accent-gold" />
        <h2 className="text-4xl font-heading font-bold">Trending Today</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { num: "01", title: "Global Supply Chains Prepare for the Next Decade", cat: "Logistics" },
          { num: "02", title: "How Remote Work is Reshaping Real Estate Markets", cat: "Real Estate" },
          { num: "03", title: "The IPO Boom: What Investors Need to Know", cat: "Investment" },
          { num: "04", title: "Healthcare Tech Startups Raising Record Funding", cat: "Healthcare" }
        ].map((item, i) => (
          <div key={i} className="group cursor-pointer border-l-2 border-white/10 pl-6 hover:border-accent-gold transition-colors">
            <div className="text-5xl font-heading font-bold text-white/10 mb-4 group-hover:text-accent-gold transition-colors">{item.num}</div>
            <span className="text-accent-gold text-xs font-bold font-ui uppercase tracking-wider mb-2 block">{item.cat}</span>
            <h3 className="text-xl font-heading font-bold text-white leading-snug group-hover:text-white/80 transition-colors">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BentoFeatured = () => (
  <section className="py-24 bg-surface">
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-end mb-16 border-b border-border pb-6">
        <h2 className="text-4xl font-heading font-bold text-primary">Featured Business News</h2>
        <Link to="/category/business" className="font-ui text-sm font-bold uppercase tracking-widest text-primary hover:text-accent-gold transition-colors flex items-center gap-2">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]">
        {/* Large Main Box */}
        <div className="md:col-span-2 md:row-span-2 group cursor-pointer relative overflow-hidden rounded-luxury shadow-soft">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop" alt="Tech" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <span className="text-accent-gold text-xs font-bold font-ui uppercase tracking-widest mb-3 block">Technology</span>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight group-hover:text-accent-gold transition-colors">Silicon Valley's Secret Pivot to Advanced Quantum Infrastructure</h3>
            <div className="flex items-center gap-2 text-white/70 font-ui text-sm"><User className="w-4 h-4" /> James Carter</div>
          </div>
        </div>

        {/* Top Right Box */}
        <div className="md:col-span-2 group cursor-pointer relative overflow-hidden rounded-luxury shadow-soft bg-white p-8 flex flex-col justify-center border border-border">
          <span className="text-accent-blue text-xs font-bold font-ui uppercase tracking-widest mb-3 block">Finance</span>
          <h3 className="text-2xl font-heading font-bold text-primary mb-4 leading-snug group-hover:text-accent-blue transition-colors">The New Currency: Data Assets in the Corporate Balance Sheet</h3>
          <p className="text-text-secondary font-body line-clamp-2 mb-6">How CFOs are recalculating company valuations by factoring in proprietary data sets alongside traditional assets.</p>
          <div className="flex items-center gap-2 text-text-secondary font-ui text-sm"><Clock className="w-4 h-4" /> 7 min read</div>
        </div>

        {/* Bottom Right 1 */}
        <div className="group cursor-pointer relative overflow-hidden rounded-luxury shadow-soft">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop" alt="Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <span className="text-accent-gold text-[10px] font-bold font-ui uppercase tracking-widest mb-2 block">Startups</span>
            <h3 className="text-lg font-heading font-bold text-white leading-tight">Seed Funding Drops, Series A Soars</h3>
          </div>
        </div>

        {/* Bottom Right 2 */}
        <div className="group cursor-pointer relative overflow-hidden rounded-luxury shadow-soft">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop" alt="Data" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <span className="text-accent-gold text-[10px] font-bold font-ui uppercase tracking-widest mb-2 block">AI</span>
            <h3 className="text-lg font-heading font-bold text-white leading-tight">Ethical Algorithms in Banking</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const DataDashboards = () => (
  <section className="py-24 bg-white border-y border-border">
    <div className="container mx-auto px-6">
      <div className="flex items-center gap-4 mb-16 border-b border-border pb-6">
        <BarChart2 className="w-8 h-8 text-primary" />
        <h2 className="text-4xl font-heading font-bold text-primary">Market Insights & Data</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-surface p-8 rounded-luxury border border-border hover:shadow-soft transition-shadow">
          <div className="flex justify-between items-center mb-6">
            <span className="font-ui font-bold text-sm text-text-secondary uppercase tracking-widest">S&P 500</span>
            <span className="text-success font-ui font-bold">+1.24%</span>
          </div>
          <div className="text-4xl font-heading font-bold text-primary mb-2">5,432.10</div>
          <p className="text-sm font-body text-text-secondary">Record highs driven by strong tech sector earnings in Q3.</p>
        </div>
        <div className="bg-surface p-8 rounded-luxury border border-border hover:shadow-soft transition-shadow">
          <div className="flex justify-between items-center mb-6">
            <span className="font-ui font-bold text-sm text-text-secondary uppercase tracking-widest">Global AI Investment</span>
            <span className="text-success font-ui font-bold">+18.5% YoY</span>
          </div>
          <div className="text-4xl font-heading font-bold text-primary mb-2">$142.6B</div>
          <p className="text-sm font-body text-text-secondary">Venture capital flowing aggressively into generative AI models.</p>
        </div>
        <div className="bg-surface p-8 rounded-luxury border border-border hover:shadow-soft transition-shadow">
          <div className="flex justify-between items-center mb-6">
            <span className="font-ui font-bold text-sm text-text-secondary uppercase tracking-widest">Clean Energy Index</span>
            <span className="text-success font-ui font-bold">+4.1%</span>
          </div>
          <div className="text-4xl font-heading font-bold text-primary mb-2">1,204.45</div>
          <p className="text-sm font-body text-text-secondary">Surge following new international climate policy agreements.</p>
        </div>
      </div>
    </div>
  </section>
);

const CEOOfTheWeek = () => (
  <section className="py-24 bg-surface">
    <div className="container mx-auto px-6">
      <div className="bg-primary text-white rounded-luxury shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[600px] relative">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2938&auto=format&fit=crop" alt="CEO" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary md:hidden" />
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center relative">
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center hidden md:flex shadow-2xl cursor-pointer hover:scale-110 transition-transform">
            <PlayCircle className="w-8 h-8 text-primary ml-1" />
          </div>
          <span className="text-accent-gold text-sm font-bold font-ui uppercase tracking-widest mb-6 block">CEO of the Week</span>
          <h2 className="text-5xl font-heading font-bold mb-6">Marcus Chen <br/> <span className="text-3xl text-white/50 font-medium italic">Visionary behind Vertex AI</span></h2>
          <p className="text-white/80 font-body text-lg mb-8 leading-relaxed border-l-2 border-accent-gold pl-6">
            "The future of enterprise software doesn't lie in complex interfaces, but in invisible intelligence that anticipates needs before they arise."
          </p>
          <Link to="/article/example" className="bg-white text-primary font-ui text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-accent-gold transition-colors rounded-full self-start">
            Read Exclusive Interview
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const MagazineArchive = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 pb-6 border-b border-border">
        <div>
          <h2 className="text-4xl font-heading font-bold text-primary mb-2">Magazine Issues</h2>
          <p className="font-ui text-text-secondary text-sm">Access our premium digital archives</p>
        </div>
        <Link to="/magazine" className="font-ui text-sm font-bold uppercase tracking-widest text-primary hover:text-accent-gold transition-colors flex items-center gap-2 mt-4 md:mt-0">
          View All Issues <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { month: "October 2026", title: "The AI Revolution", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" },
          { month: "September 2026", title: "Global Supply Chains", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop" },
          { month: "August 2026", title: "The New Leadership", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop" },
          { month: "July 2026", title: "Sustainable Future", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2940&auto=format&fit=crop" }
        ].map((issue, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="aspect-[3/4] rounded-luxury overflow-hidden mb-6 shadow-soft border border-border relative">
              <img src={issue.img} alt={issue.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <h4 className="font-ui font-bold text-sm uppercase tracking-widest text-primary mb-1">{issue.month}</h4>
            <h3 className="font-heading font-bold text-xl text-text-secondary group-hover:text-accent-gold transition-colors">{issue.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PremiumNewsletter = () => (
  <section className="py-24 bg-primary relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[200%] bg-accent-gold rounded-full blur-[150px]"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <Newspaper className="w-12 h-12 text-accent-gold mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">The Daily Edge Newsletter</h2>
        <p className="text-white/70 font-body text-lg mb-10">
          Get the world's most critical business intelligence, market data, and exclusive interviews delivered directly to your inbox every morning.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input type="email" placeholder="Enter your business email" className="bg-white/10 border border-white/20 px-8 py-4 font-ui text-white focus:outline-none focus:border-accent-gold rounded-full w-full sm:w-96 text-sm" />
          <button className="bg-accent-gold text-primary font-ui font-bold uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors rounded-full flex-shrink-0">
            Subscribe Now
          </button>
        </div>
        <p className="text-white/40 font-ui text-xs mt-6">By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </div>
  </section>
);

const InnovationHub = () => (
  <section className="py-24 bg-surface border-t border-border">
    <div className="container mx-auto px-6">
      <div className="flex items-center gap-4 mb-16 border-b border-border pb-6">
        <Zap className="w-8 h-8 text-accent-gold" />
        <h2 className="text-4xl font-heading font-bold text-primary">Innovation Hub</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
        {/* Large Left */}
        <div className="md:col-span-8 group cursor-pointer relative overflow-hidden rounded-luxury shadow-soft">
          <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940&auto=format&fit=crop" alt="Robotics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-10 max-w-2xl">
            <span className="bg-accent-gold text-primary text-[10px] font-bold font-ui uppercase tracking-widest px-3 py-1 mb-4 inline-block">Deep Tech</span>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight group-hover:text-accent-gold transition-colors">The Autonomous Workforce: Factory Automation in 2027</h3>
            <p className="text-white/80 font-body text-lg">How next-generation robotics are solving global supply chain bottlenecks.</p>
          </div>
        </div>

        {/* Right Stack */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="flex-1 group cursor-pointer relative overflow-hidden rounded-luxury shadow-soft">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop" alt="Chip" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-accent-gold text-[10px] font-bold font-ui uppercase tracking-widest mb-2 block">Semiconductors</span>
              <h3 className="text-xl font-heading font-bold text-white leading-tight">Next-Gen Quantum Chips</h3>
            </div>
          </div>
          <div className="flex-1 group cursor-pointer relative overflow-hidden rounded-luxury shadow-soft bg-primary p-8 border border-white/10 flex flex-col justify-center hover:border-accent-gold transition-colors">
            <span className="text-white/50 text-[10px] font-bold font-ui uppercase tracking-widest mb-3 block">Opinion</span>
            <h3 className="text-xl font-heading font-bold text-white mb-4 leading-snug group-hover:text-accent-gold transition-colors">Why AI regulation might actually accelerate enterprise adoption.</h3>
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full" alt="Author" />
              <span className="text-white/80 font-ui text-xs">Dr. Alan Reed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const VideoStories = () => (
  <section className="py-24 bg-primary text-white">
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-end mb-16 pb-6 border-b border-white/20">
        <div>
          <h2 className="text-4xl font-heading font-bold mb-2">Exclusive Interviews</h2>
          <p className="font-ui text-white/60 text-sm">Watch conversations with global leaders</p>
        </div>
        <Link to="/videos" className="font-ui text-sm font-bold uppercase tracking-widest text-white/80 hover:text-accent-gold transition-colors flex items-center gap-2 mt-4 md:mt-0">
          All Videos <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Satya Nadella on the Future of Work", time: "12:45", cat: "Leadership", img: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2938&auto=format&fit=crop" },
          { title: "How Rivian Plans to Scale Production", time: "08:20", cat: "Automotive", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2940&auto=format&fit=crop" },
          { title: "The State of Global Venture Capital", time: "15:10", cat: "Finance", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2940&auto=format&fit=crop" }
        ].map((video, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="aspect-video rounded-luxury overflow-hidden mb-4 relative shadow-2xl border border-white/10">
              <img src={video.img} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-accent-gold/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-white transition-all">
                  <PlayCircle className="w-8 h-8 text-primary ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-primary/80 backdrop-blur-md px-3 py-1 rounded font-ui text-xs font-bold">
                {video.time}
              </div>
            </div>
            <span className="text-accent-gold text-[10px] font-bold font-ui uppercase tracking-widest mb-2 block">{video.cat}</span>
            <h3 className="font-heading font-bold text-xl leading-snug group-hover:text-accent-gold transition-colors">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="animate-fade-in bg-surface">
      <HeroCover />
      <BentoFeatured />
      <AwardsHighlight />
      <TrendingStories />
      <InnovationHub />
      <EventsBanner />
      <CEOOfTheWeek />
      <DataDashboards />
      <VideoStories />
      <MagazineArchive />
      <PremiumNewsletter />
    </div>
  );
}
