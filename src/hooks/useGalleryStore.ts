
import { useState, useEffect } from 'react';

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

// Initial gallery data - this will be the single source of truth
const initialGalleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Modern Family Home',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
    description: 'Beautiful 3-bedroom family home with modern design',
  },
  {
    id: 2,
    title: 'Office Building Renovation',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
    description: 'Complete renovation of downtown office building',
  },
  {
    id: 3,
    title: 'Kitchen Remodel',
    category: 'Renovation',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop',
    description: 'Luxury kitchen renovation with custom cabinetry',
  },
  {
    id: 4,
    title: 'Outdoor Deck Construction',
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop',
    description: 'Multi-level deck with outdoor living space',
  },
  {
    id: 5,
    title: 'Retail Space Build-out',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop',
    description: 'Custom retail space for boutique store',
  },
  {
    id: 6,
    title: 'Home Addition',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
    description: 'Two-story addition with master suite',
  },
];

// Global gallery store using localStorage for persistence
class GalleryStore {
  private static instance: GalleryStore;
  private listeners: Array<() => void> = [];
  
  static getInstance(): GalleryStore {
    if (!GalleryStore.instance) {
      GalleryStore.instance = new GalleryStore();
    }
    return GalleryStore.instance;
  }

  getItems(): GalleryItem[] {
    const stored = localStorage.getItem('galleryItems');
    if (stored) {
      return JSON.parse(stored);
    }
    // Initialize with default data if nothing in localStorage
    this.setItems(initialGalleryItems);
    return initialGalleryItems;
  }

  setItems(items: GalleryItem[]): void {
    localStorage.setItem('galleryItems', JSON.stringify(items));
    this.notifyListeners();
  }

  addItem(item: Omit<GalleryItem, 'id'>): void {
    const items = this.getItems();
    const newItem = { ...item, id: Date.now() };
    this.setItems([...items, newItem]);
  }

  updateItem(id: number, updatedItem: Omit<GalleryItem, 'id'>): void {
    const items = this.getItems();
    const updatedItems = items.map(item =>
      item.id === id ? { ...updatedItem, id } : item
    );
    this.setItems(updatedItems);
  }

  deleteItem(id: number): void {
    const items = this.getItems();
    this.setItems(items.filter(item => item.id !== id));
  }

  subscribe(callback: () => void): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(callback => callback());
  }
}

export const useGalleryStore = () => {
  const store = GalleryStore.getInstance();
  const [items, setItems] = useState<GalleryItem[]>(store.getItems());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setItems(store.getItems());
    });
    return unsubscribe;
  }, [store]);

  return {
    items,
    addItem: (item: Omit<GalleryItem, 'id'>) => store.addItem(item),
    updateItem: (id: number, item: Omit<GalleryItem, 'id'>) => store.updateItem(id, item),
    deleteItem: (id: number) => store.deleteItem(id),
  };
};
