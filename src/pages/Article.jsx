import React from 'react';
import { Clock, Share2, Link as LinkIcon, MessageCircle, ArrowLeft, ArrowRight, Bookmark } from 'lucide-react';

const ArticleHero = () => (
  <div className="relative h-[70vh] min-h-[600px] w-full">
    <img 
      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop" 
      alt="Article Hero" 
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
  </div>
);

const ArticleSidebar = () => (
  <div className="w-full lg:w-1/3 sticky top-32 space-y-12">
    {/* Author Info */}
    <div className="bg-white p-8 rounded-luxury shadow-soft">
      <div className="flex items-center gap-4 mb-4">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Author" className="w-16 h-16 rounded-full" />
        <div>
          <h4 className="font-ui font-bold text-lg text-primary">Jonathan Sterling</h4>
          <span className="text-text-secondary text-sm font-ui">Editor-in-Chief</span>
        </div>
      </div>
      <p className="text-sm font-body text-text-secondary mb-4">Award-winning business journalist covering macroeconomics and technological innovation.</p>
      <button className="btn-outline w-full py-2 text-sm">Follow Author</button>
    </div>

    {/* Table of Contents */}
    <div className="bg-white p-8 rounded-luxury shadow-soft">
      <h4 className="font-ui font-bold text-lg text-primary mb-6 border-b border-border pb-4">Table of Contents</h4>
      <ul className="space-y-4 font-ui text-sm text-text-secondary">
        <li><a href="#executive-summary" className="hover:text-accent-blue transition-colors">Executive Summary</a></li>
        <li><a href="#the-ai-paradigm" className="hover:text-accent-blue transition-colors">The AI Paradigm Shift</a></li>
        <li><a href="#sustainable-growth" className="hover:text-accent-blue transition-colors">Sustainable Growth Models</a></li>
        <li><a href="#market-predictions" className="hover:text-accent-blue transition-colors">Market Predictions 2027</a></li>
        <li><a href="#key-takeaways" className="hover:text-accent-blue transition-colors">Key Takeaways</a></li>
      </ul>
    </div>
  </div>
);

export default function Article() {
  return (
    <div className="bg-surface animate-fade-in pb-24">
      {/* Reading Progress Bar (Mock) */}
      <div className="fixed top-20 left-0 h-1 bg-accent-gold w-1/3 z-50"></div>

      <ArticleHero />
      
      <div className="container mx-auto px-6 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="text-accent-blue text-sm font-bold font-ui uppercase tracking-widest mb-6 block bg-white px-4 py-1.5 inline-block rounded-full shadow-soft">Global Markets</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary leading-tight mb-8">
            The Future of Global Markets in <span className="text-accent-gold italic">2027</span>
          </h1>
          <p className="text-2xl text-text-secondary font-heading italic max-w-3xl mx-auto">
            An exclusive look into how artificial intelligence, automated financing, and sustainable technology are reshaping international trade paradigms.
          </p>
          
          <div className="flex justify-center items-center gap-8 mt-12 py-6 border-y border-border">
            <div className="flex items-center gap-2 text-sm font-ui text-text-secondary">
              <Clock className="w-4 h-4" /> Published Oct 5, 2026
            </div>
            <div className="flex items-center gap-2 text-sm font-ui text-text-secondary">
              <Clock className="w-4 h-4" /> 12 min read
            </div>
            <div className="flex items-center gap-4 border-l border-border pl-8">
              <button className="text-text-secondary hover:text-accent-blue transition-colors"><Share2 className="w-5 h-5" /></button>
              <button className="text-text-secondary hover:text-accent-blue transition-colors"><LinkIcon className="w-5 h-5" /></button>
              <button className="text-text-secondary hover:text-accent-gold transition-colors ml-4"><Bookmark className="w-5 h-5" /></button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
          {/* Article Body */}
          <div className="w-full lg:w-2/3">
            <div className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-headings:text-primary prose-p:font-body prose-p:text-text-primary prose-p:leading-relaxed max-w-none">
              
              <div className="bg-white p-8 rounded-luxury shadow-soft mb-12 border-l-4 border-accent-gold" id="executive-summary">
                <h3 className="text-xl font-ui font-bold mt-0 mb-4 text-primary uppercase tracking-wider text-sm">Executive Summary</h3>
                <ul className="m-0 space-y-2 text-text-secondary font-ui text-sm">
                  <li>• Global trade volume expected to grow by 14% fueled by automated logistics.</li>
                  <li>• Enterprise AI adoption reaches 82% among Fortune 500 companies.</li>
                  <li>• Sustainable finance becomes the default standard for new IPOs.</li>
                </ul>
              </div>

              <p className="first-letter:text-7xl first-letter:font-heading first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:mt-2">
                As we approach the final years of the decade, the global economic landscape is undergoing a transformation unlike anything seen since the industrial revolution. The integration of advanced artificial intelligence systems into core financial infrastructure has shifted from experimental pilots to foundational architecture.
              </p>
              
              <p>
                In boardrooms from Wall Street to Shanghai, the conversation has fundamentally changed. It's no longer about whether to adopt these technologies, but how rapidly they can be scaled without disrupting existing operations. The transition requires a delicate balance of aggressive innovation and rigorous risk management.
              </p>

              <h2 id="the-ai-paradigm">The AI Paradigm Shift</h2>
              <p>
                Leading market analysts predict that by 2027, algorithmic trading powered by next-generation predictive models will account for over 85% of institutional market activity. This isn't just an evolution in speed; it's a revolution in data synthesis.
              </p>

              {/* Rich Pull Quote */}
              <blockquote className="my-12 py-8 border-y-2 border-accent-gold text-center relative">
                <p className="text-3xl font-heading font-bold text-primary italic leading-snug">
                  "The companies that will dominate the 2030s are currently rewriting their entire operational DNA with intelligent systems today."
                </p>
                <cite className="block mt-4 font-ui text-sm font-bold text-text-secondary uppercase tracking-wider">— Elena Rodriguez, Global Head of Strategy, Vanguard Group</cite>
              </blockquote>

              <h2 id="sustainable-growth">Sustainable Growth Models</h2>
              <p>
                Alongside technological advancements, the emphasis on ESG (Environmental, Social, and Governance) criteria has solidified into a non-negotiable metric for institutional investors. The "green premium" is no longer a theoretical concept—it's a verifiable market reality.
              </p>

              {/* Image Gallery */}
              <div className="my-12 grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Corporate Office" className="w-full h-64 object-cover rounded-luxury" />
                <img src="https://images.unsplash.com/photo-1554469232-0c9bea714ff9?auto=format&fit=crop&q=80&w=1200" alt="Business Meeting" className="w-full h-64 object-cover rounded-luxury" />
                <p className="col-span-2 text-center text-sm font-ui text-text-secondary mt-2">Modern corporate environments reflecting the shift towards sustainable architecture.</p>
              </div>

              <h2 id="key-takeaways">Key Takeaways for Leaders</h2>
              <p>
                For executive leadership, the mandate is clear. To navigate this upcoming paradigm, organizations must prioritize:
              </p>
              <ul>
                <li><strong>Agility over rigid planning:</strong> 5-year plans are obsolete. Scenario-based adaptable strategies are essential.</li>
                <li><strong>Data sovereignty:</strong> Owning and protecting proprietary data lakes will be a primary competitive advantage.</li>
                <li><strong>Human-AI synergy:</strong> Upskilling the workforce to collaborate with AI rather than compete against it.</li>
              </ul>
            </div>
            
            {/* Article Footer Actions */}
            <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-surface text-sm font-ui rounded-full">#Markets</span>
                <span className="px-4 py-2 bg-surface text-sm font-ui rounded-full">#AI</span>
                <span className="px-4 py-2 bg-surface text-sm font-ui rounded-full">#FutureOfWork</span>
              </div>
              <button className="flex items-center gap-2 font-ui font-medium text-accent-blue hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" /> 24 Comments
              </button>
            </div>
          </div>

          <ArticleSidebar />
        </div>
      </div>
      
      {/* Read Next Section */}
      <div className="bg-white py-24 mt-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <h3 className="text-3xl font-heading font-bold text-primary mb-12 text-center">Read Next</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="h-64 rounded-luxury overflow-hidden mb-6 shadow-soft">
                  <img src={`https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200&random=${item}`} alt="Related" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <span className="text-accent-gold text-xs font-bold font-ui uppercase tracking-wider mb-2 block">Technology</span>
                <h4 className="text-xl font-heading font-bold text-primary group-hover:text-accent-blue transition-colors">The Quantum Computing Race in Global Finance</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
