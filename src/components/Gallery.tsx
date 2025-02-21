import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
// import Interior from './assets/images/photo1.jpg';
// import Interior1 from './assets/images/photo2.jpg';
// import Interior2 from './assets/images/photo3.jpg';
// import Interior3 from './assets/images/photo4.jpg';
// import Interior4 from './assets/images/photo5.jpg';

// import Seating from './assets/images/photo6.jpg';
// import Seating1 from './assets/images/photo7.jpg';
// import Seating2 from './assets/images/photo8.jpg';
// import Seating3 from './assets/images/photo9.jpg';
// import Seating4 from './assets/images/photo10.jpg';

// import Theater from './assets/images/photo11.jpg';
// import Theater1 from './assets/images/photo12.jpg';
// import Theater2 from './assets/images/photo13.jpg';
// import Theater3 from './assets/images/photo14.jpg';
// import Theater4 from './assets/images/photo15.jpg';

// import Sound from './assets/images/photo16.jpg';
// import Sound1 from './assets/images/photo17.jpg';
// import Sound2 from './assets/images/photo18.jpg';
// import Sound3 from './assets/images/photo19.jpg';
// import Sound4 from './assets/images/photo20.jpg';

// import Ambiance from './assets/ambiance/ambience.jpg';
// import Ambiance1 from './assets/ambiance/ambience1.jpg';
// import Ambiance2 from './assets/ambiance/ambience2.jpg';
// import Ambiance3 from './assets/ambiance/ambience3.jpg';
// import Ambiance4 from './assets/ambiance/ambience4.jpg';





const Gallery = () => {
  type GalleryImage = {
    url: string;
    title: string;
    category: string;
    description: string;
    nestedImages: {
      url: string;
      title: string;
      description: string;
    }[];
  };

  const galleryImages: GalleryImage[] = [
    {
      url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//interior1.jpeg",
      title: "Luxury Theater Interior",
      category: "Interior",
      description: "Experience premium comfort in our state-of-the-art theater",
      nestedImages: [
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//interior2.jpeg",
          title: "Premium Seating Area",
          description: "Luxurious reclining seats for ultimate comfort"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//interior3.jpeg",
          title: "Theater Lighting",
          description: "Ambient lighting for the perfect atmosphere"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//interior.JPG",
          title: "Sound System",
          description: "State-of-the-art surround sound experience"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//interior4.jpeg",
          title: "Ambiance Details",
          description: "Carefully curated interior elements"
        }
      ]
    },
    {
      url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//screening1.jpg",
      title: "Premium Screening Room",
      category: "Screening",
      description: "State-of-the-art projection and sound system",
      nestedImages: [
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//screening.jpg",
          title: "4K Projection",
          description: "Crystal clear picture quality"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//screening2.jpg",
          title: "Surround Sound",
          description: "Immersive audio experience"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//ambience4.jpg",
          title: "Screen Setup",
          description: "Professional cinema screen"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//interior.JPG",
          title: "Lighting System",
          description: "Perfect ambiance control"
        }
      ]
    },
    {
      url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//couples.jpg",
      title: "Couple's Theater",
      category: "Romance",
      description: "Perfect setting for romantic dates",
      nestedImages: [
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//coulples1.jpeg",
          title: "Intimate Setting",
          description: "Cozy and private atmosphere"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//interior1.jpeg",
          title: "Luxury Seating",
          description: "Comfortable couple seating"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//coulples2.jpeg",
          title: "Mood Lighting",
          description: "Romantic ambiance"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//ambience1.jpg",
          title: "Service Area",
          description: "Premium refreshments service"
        }
      ]
    },
    {
      url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//celebration.jpeg",
      title: "Birthday Celebrations",
      category: "Events",
      description: "Make your birthday extra special",
      nestedImages: [
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//celebration1.jpg",
          title: "Party Setup",
          description: "Festive decorations and arrangements"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//celebration2.jpg",
          title: "Group Seating",
          description: "Comfortable space for friends and family"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//interior1.jpeg",
          title: "Celebration Area",
          description: "Perfect for cake cutting and photos"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//ambience1.jpg",
          title: "Entertainment Setup",
          description: "Music and lighting arrangements"
        }
      ]
    },
    {
      url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//snacks1.jpg",
      title: "Refreshment Service",
      category: "Service",
      description: "Premium food and beverage options",
      nestedImages: [
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//snack2.jpg",
          title: "Snack Counter",
          description: "Wide variety of premium snacks"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//snack3.JPG",
          title: "Beverage Station",
          description: "Refreshing drink selections"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//snack4.jpeg",
          title: "Service Area",
          description: "Professional service setup"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//snack.jpeg",
          title: "Premium Options",
          description: "Gourmet food selections"
        }
      ]
    },
    {
      url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//ambience1.jpg",
      title: "Special Occasions",
      category: "Events",
      description: "Perfect for any celebration",
      nestedImages: [
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//ambience.jpg",
          title: "Event Setup",
          description: "Customizable arrangements"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//ambience3.jpg",
          title: "Decoration Options",
          description: "Themed decoration services"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//ambience2.jpg",
          title: "Celebration Space",
          description: "Versatile event area"
        },
        {
          url: "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//ambience4.jpg",
          title: "Group Activities",
          description: "Entertainment options"
        }
      ]
    }
  ];

  const categories = ["All", ...new Set(galleryImages.map(img => img.category))];
  
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('gallery');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isVisible) {
          element.classList.add('animate-fade-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
    setCurrentImageIndex(0);
  };

  const handlePrevious = () => {
    if (selectedImage) {
      setCurrentImageIndex((prev) => 
        (prev - 1 + selectedImage.nestedImages.length) % selectedImage.nestedImages.length
      );
    }
  };

  const handleNext = () => {
    if (selectedImage) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedImage.nestedImages.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Gallery</h2>
          <p className="text-gray-600 text-lg mb-8">Take a visual tour of our premium theater experiences</p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  {selectedCategory === category && <Filter className="w-4 h-4" />}
                  <span>{category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                alt={image.title}
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 bg-indigo-600/90 text-white text-xs rounded-full mb-2 w-fit">
                  {image.category}
                </span>
                <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                <p className="text-white/90 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && handleClose()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={handlePrevious}
              className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="w-full max-w-4xl">
              <img
                src={selectedImage.nestedImages[currentImageIndex].url}
                alt={selectedImage.nestedImages[currentImageIndex].title}
                className="w-full h-[70vh] object-contain rounded-lg"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {selectedImage.nestedImages[currentImageIndex].title}
                </h3>
                <p className="text-white/80">
                  {selectedImage.nestedImages[currentImageIndex].description}
                </p>
              </div>

              {/* Thumbnails */}
              <div className="flex justify-center gap-2 mt-4">
                {selectedImage.nestedImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                      currentImageIndex === idx ? 'ring-2 ring-indigo-500 scale-110' : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;