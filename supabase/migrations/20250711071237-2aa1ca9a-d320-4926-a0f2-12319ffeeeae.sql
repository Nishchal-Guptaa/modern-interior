
-- Create a table for gallery items
CREATE TABLE public.gallery_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  image TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert the initial gallery data
INSERT INTO public.gallery_items (title, category, image, description) VALUES
('Modern Family Home', 'Residential', 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop', 'Beautiful 3-bedroom family home with modern design'),
('Office Building Renovation', 'Commercial', 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop', 'Complete renovation of downtown office building'),
('Kitchen Remodel', 'Renovation', 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop', 'Luxury kitchen renovation with custom cabinetry'),
('Outdoor Deck Construction', 'Outdoor', 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop', 'Multi-level deck with outdoor living space'),
('Retail Space Build-out', 'Commercial', 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop', 'Custom retail space for boutique store'),
('Home Addition', 'Residential', 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop', 'Two-story addition with master suite');

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language plpgsql;

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_gallery_items_updated_at 
    BEFORE UPDATE ON public.gallery_items 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
