
import { useState } from "react";
import { X } from "lucide-react";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: "food" | "ambiance" | "events" | "all";
};

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState<"food" | "ambiance" | "events" | "all">("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Cozy restaurant interior with wooden tables",
      category: "ambiance",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Restaurant interior with warm lighting",
      category: "ambiance",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1600353565554-155246029dd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Traditional Nepali meal with rice and curries",
      category: "food",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Thali set with multiple dishes",
      category: "food",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1626401109487-256249cfc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Freshly steamed momos",
      category: "food",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1576095910326-9de5a8b207e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "People enjoying dinner at restaurant",
      category: "events",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Private event celebration",
      category: "events",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Restaurant terrace with outdoor seating",
      category: "ambiance",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Traditional Nepali masala tea",
      category: "food",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1597413545419-4013431dbfec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80",
      alt: "Cultural dance performance",
      category: "events",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1497671954146-59a89ff626ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Cozy coffee corner",
      category: "ambiance",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1633262912438-94079631248d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Traditional Nepali dessert",
      category: "food",
    },
  ];
  
  const filteredImages = activeCategory === "all" ? galleryImages : galleryImages.filter(image => image.category === activeCategory);
  
  return (
    <>
      {/* Gallery Hero */}
      <section className="pt-32 pb-12 bg-cafe-50 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-fixed"></div>
        <div className="container-custom relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-spice-600 font-medium mb-2">OUR GALLERY</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              Experience Old House Cafe
            </h1>
            <p className="text-muted-foreground text-lg">
              Take a visual tour of our restaurant, our delicious food, and memorable events.
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery Filters */}
      <section className="py-8 bg-white sticky top-16 z-20 shadow-sm">
        <div className="container-custom">
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setActiveCategory("all")} 
              className={`px-6 py-2 rounded-md transition-colors ${activeCategory === "all" ? "bg-primary text-white" : "bg-muted hover:bg-muted/80"}`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveCategory("food")} 
              className={`px-6 py-2 rounded-md transition-colors ${activeCategory === "food" ? "bg-primary text-white" : "bg-muted hover:bg-muted/80"}`}
            >
              Food
            </button>
            <button 
              onClick={() => setActiveCategory("ambiance")} 
              className={`px-6 py-2 rounded-md transition-colors ${activeCategory === "ambiance" ? "bg-primary text-white" : "bg-muted hover:bg-muted/80"}`}
            >
              Ambiance
            </button>
            <button 
              onClick={() => setActiveCategory("events")} 
              className={`px-6 py-2 rounded-md transition-colors ${activeCategory === "events" ? "bg-primary text-white" : "bg-muted hover:bg-muted/80"}`}
            >
              Events
            </button>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="section bg-accent">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="overflow-hidden rounded-lg cursor-pointer hover-scale transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white mt-4 text-center">{selectedImage.alt}</p>
          </div>
        </div>
      )}
      
      {/* Instagram CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <span className="inline-block text-spice-600 font-medium mb-2">FOLLOW US</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Share Your Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Tag us on Instagram using #OldHouseCafeDamak to share your experience and get featured on our page.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 3.96-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-3.96-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
            Follow us on Instagram
          </a>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
