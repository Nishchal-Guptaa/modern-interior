import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Award, label: 'Years Experience', value: '15+' },
  { icon: Users, label: 'Projects Completed', value: '500+' },
  { icon: CheckCircle, label: 'Happy Clients', value: '450+' },
  { icon: Clock, label: 'On-Time Delivery', value: '98%' },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Building Excellence Since 2008
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in the construction industry, Modern Interior 
              has established itself as a trusted partner for residential and commercial projects. 
              Our commitment to quality, safety, and customer satisfaction sets us apart.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe in building more than just structures – we build relationships, communities, 
              and dreams. Every project is approached with meticulous attention to detail and a 
              dedication to exceeding expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/about">Learn More About Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
