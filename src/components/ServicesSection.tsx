
import { Home, Building, Wrench, Paintbrush, Hammer, TreePine } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Custom homes, renovations, and additions with attention to detail and quality craftsmanship.',
  },
  {
    icon: Building,
    title: 'Commercial Projects',
    description: 'Office buildings, retail spaces, and commercial renovations for businesses of all sizes.',
  },
  {
    icon: Wrench,
    title: 'Remodeling & Renovation',
    description: 'Transform your existing space with our comprehensive remodeling and renovation services.',
  },
  {
    icon: Paintbrush,
    title: 'Interior Design Build',
    description: 'Complete interior construction and design services to bring your vision to life.',
  },
  {
    icon: Hammer,
    title: 'Maintenance',
    description: 'Reliable maintenance services to keep your property in perfect condition.',
  },
  {
    icon: TreePine,
    title: 'Outdoor Construction',
    description: 'Decks, patios, landscaping, and outdoor living spaces for your enjoyment.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Construction Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential homes to commercial buildings, we provide comprehensive 
            construction services with unmatched quality and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
