
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Building, Wrench, Paintbrush, Hammer, TreePine, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Complete home building services from foundation to finish.',
    features: ['Custom Home Design', 'New Construction', 'Home Additions', 'Kitchen & Bath Remodels'],
  },
  {
    icon: Building,
    title: 'Commercial Projects',
    description: 'Professional commercial construction for businesses.',
    features: ['Office Buildings', 'Retail Spaces', 'Warehouse Construction', 'Tenant Improvements'],
  },
  {
    icon: Wrench,
    title: 'Remodeling & Renovation',
    description: 'Transform your existing space with expert renovation.',
    features: ['Whole House Renovations', 'Room Additions', 'Basement Finishing', 'Structural Modifications'],
  },
  {
    icon: Paintbrush,
    title: 'Interior Design Build',
    description: 'Complete interior construction and design services.',
    features: ['Interior Design', 'Custom Millwork', 'Flooring Installation', 'Lighting Design'],
  },
  {
    icon: Hammer,
    title: 'Maintenance',
    description: 'Reliable maintenance for your property.',
    features: ['Emergency Repairs', 'Preventive Maintenance', 'Structural Repairs', '24/7 Service'],
  },
  {
    icon: TreePine,
    title: 'Outdoor Construction',
    description: 'Beautiful outdoor spaces and structures.',
    features: ['Deck Construction', 'Patio Installation', 'Outdoor Kitchens', 'Landscaping'],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Construction Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive construction solutions for residential and commercial projects. 
            Quality craftsmanship backed by 15+ years of experience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote for your construction project. 
              We're here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
