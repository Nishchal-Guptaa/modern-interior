import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Your image URL
  
  return (
    <section className="relative min-h-screen flex items-center geometric-pattern overflow-hidden">
      {/* Background image container (new addition) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Dark overlay - only affects the background image */}
      <div className="absolute inset-0 z-1 bg-black/50"></div>

      {/* Existing content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-6xl text-white font-bold leading-tight mb-7">
            Building Your{' '}
            <span className="text-primary">Dreams</span>{' '}
            Into Reality
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Professional construction services with 15+ years of experience. Quality 
            craftsmanship and reliable service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white hover:text-black"
              onClick={() => window.location.href = 'tel:8448373478'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (+91) 8448373478
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
