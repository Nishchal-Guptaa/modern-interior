import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Clock, CheckCircle, Star, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const stats = [
  { icon: Award, label: 'Years Experience', value: '15+' },
  { icon: Users, label: 'Projects Completed', value: '500+' },
  { icon: CheckCircle, label: 'Happy Clients', value: '450+' },
  { icon: Clock, label: 'On-Time Delivery', value: '98%' },
];

const values = [
  {
    icon: Star,
    title: 'Quality First',
    description: 'We never compromise on quality. Every project is executed with the highest standards and attention to detail.',
  },
  {
    icon: Shield,
    title: 'Safety Priority',
    description: 'Safety is paramount in everything we do. We maintain strict safety protocols and certifications.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Our clients are at the center of everything we do. We listen, understand, and deliver beyond expectations.',
  },
  {
    icon: CheckCircle,
    title: 'Reliability',
    description: 'You can count on us to deliver on time, on budget, and exactly as promised.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Modern Interior
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Building excellence since 2008 with a commitment to quality, 
            safety, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008, Modern Interior began as a small family business with a 
                simple mission: to provide exceptional construction services with integrity, 
                quality, and personalized attention.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we've grown into a trusted construction company serving both 
                residential and commercial clients throughout the region. Despite our growth, 
                we've maintained our core values and commitment to treating every client like family.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, with over 500 completed projects and countless satisfied customers, 
                we continue to build not just structures, but lasting relationships and communities.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we approach every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the BuildPro difference. Let's discuss your project and 
            see how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/gallery">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
