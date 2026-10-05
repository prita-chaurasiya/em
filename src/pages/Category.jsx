import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Clock, User, TrendingUp, Filter } from 'lucide-react';

export default function Category() {
  const { id } = useParams();
  
  if (id === 'home' || id === '') {
    return <Navigate to="/" replace />;
  }
  
  const title = id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Category';

  // Seed images based on category id to make pages look unique
  const getImages = () => {
    switch(id) {
      case 'technology': return [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop"
      ];
      case 'markets': return [
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2940&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2940&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
      ];
      case 'leadership': return [
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2940&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2940&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
      ];
      case 'startups': return [
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2940&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515378960530-7c0da622941f?q=80&w=2940&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop"
      ];
      default: return [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2940&auto=format&fit=crop"
      ];
    }
  };

  const images = getImages();

  return (
    <div className="animate-fade-in bg-surface min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        <div className="mb-16 pb-8 border-b border-border">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/" className="text-text-secondary hover:text-accent-gold transition-colors font-ui text-xs font-bold uppercase tracking-widest">Home</Link>
            <ChevronRight className="w-3 h-3 text-text-secondary" />
            <span className="text-primary font-ui text-xs font-bold uppercase tracking-widest">{title}</span>
          </div>
          <div className="flex justify-between items-end">
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary">{title}</h1>
            <button className="hidden md:flex items-center gap-2 font-ui text-xs font-bold uppercase tracking-widest text-primary hover:text-accent-gold transition-colors border border-border px-4 py-2 rounded-full hover:shadow-soft">
              <Filter className="w-4 h-4" /> Filter Topics
            </button>
          </div>
        </div>

        {/* Featured Story for Category */}
        <div className="mb-16 group cursor-pointer relative overflow-hidden rounded-luxury shadow-soft h-[500px]">
          <img 
            src={images[0]} 
            alt="Featured" 
            className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-10 md:p-16 flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-3xl">
              <span className="bg-accent-gold text-primary text-[10px] font-bold font-ui uppercase tracking-widest px-3 py-1 mb-4 inline-block">Featured in {title}</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-4 group-hover:text-accent-gold transition-colors">The Next Evolution of {title} Starts Here</h2>
              <p className="text-white/80 font-body text-xl">Exclusive insights into how {id} is reshaping global paradigms and driving the next decade of corporate strategy.</p>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((item, idx) => (
            <Link to="/article/example" key={item} className="group cursor-pointer block border-b border-border pb-8 md:border-b-0 md:pb-0">
              <div className="overflow-hidden mb-6 h-[250px] rounded-luxury shadow-sm border border-border/50">
                <img 
                  src={images[idx % 3]} 
                  alt="Article Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter group-hover:brightness-110"
                />
              </div>
              <span className="text-accent-gold text-xs font-bold font-ui uppercase tracking-wider mb-3 block">
                {title} Intelligence
              </span>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3 leading-snug group-hover:text-accent-blue transition-colors">
                Navigating the complex landscape of {title} in emerging markets
              </h3>
              <p className="text-text-secondary font-body line-clamp-2 mb-4">
                An in-depth analysis of the trends defining the {id} sector, featuring interviews with top executives and proprietary data.
              </p>
              <div className="flex items-center justify-between border-t border-border pt-4 mt-4">
                 <div className="flex items-center gap-2 text-text-secondary text-xs font-ui font-medium">
                  <User className="w-3 h-3" /> Editorial Board
                 </div>
                 <div className="flex items-center gap-2 text-text-secondary text-xs font-ui font-medium">
                  <Clock className="w-3 h-3" /> {item + 3} min read
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
