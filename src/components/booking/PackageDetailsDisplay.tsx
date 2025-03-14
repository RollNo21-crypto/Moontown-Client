import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

// Set app element for accessibility
Modal.setAppElement('#root');

interface PackageDetailsDisplayProps {
  selectedPackage: string;
}

interface PackageInfo {
  name: string;
  price: string;
  description: string;
  features: string[];
  images: string[];
  video?: string; // Optional video URL for each package
}

export default function PackageDetailsDisplay({ selectedPackage }: PackageDetailsDisplayProps) {
  // State for modals and selected content
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false);
  const [videoModalIsOpen, setVideoModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  
  // State for slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Ref for video player
  const videoPlayerRef = useRef<ReactPlayer>(null);

  // Package data based on the provided information
  const packages: Record<string, PackageInfo> = {
    'Family Theatre - 1599': {
      name: 'Family Theater',
      price: '₹1999',
      description: 'Perfect for family celebrations',
      features: ['8-10 people', '2.5 Hours Duration', 'Premium Sound System', 'Comfortable Seating', 'Private Ambiance'],
      images: [
        'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images/room1/WhatsApp%20Image%202025-02-23%20at%2022.21.07_2167e21e.jpg',
        'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images/room1/WhatsApp%20Image%202025-02-23%20at%2022.23.39_7ee7a6f7.jpg',
        'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images/room1/WhatsApp%20Image%202025-02-23%20at%2022.24.55_f1359d9c.jpg'
      ],
      video: 'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//galaxy%20theater.mp4' // Replace with actual video URL
    },
    'Friends Theatre - 1599': {
      name: 'Group Theater',
      price: '₹1999',
      description: 'Ideal for friend gatherings',
      features: ['6-8 people', '2.5 Hours Duration', 'Premium Sound System', 'Comfortable Seating', 'Private Ambiance'],
      images: [
        'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images/room3/WhatsApp%20Image%202025-02-23%20at%2022.44.29_02935624.jpg',
        'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images/room3/WhatsApp%20Image%202025-02-23%20at%2022.44.29_cc71b87d.jpg',
        'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images/room3/WhatsApp%20Image%202025-02-23%20at%2022.46.16_0c22ba5e.jpg'
      ],
      video: 'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//milky%20way%20galaxy%20theater%20(1).mp4' // Replace with actual video URL
    },
    'Couples Theatre - 1111': {
      name: 'Couple Theater',
      price: '₹999',
      description: 'Romantic setting for couples',
      features: ['2 people', '2.5 Hours Duration', 'Premium Sound System', 'Couple Seating', 'Private Ambiance'],
      images: [
        'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images/room2/WhatsApp%20Image%202025-02-23%20at%2022.54.39_bcc00b8a.jpg',
        'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images/room2/WhatsApp%20Image%202025-02-23%20at%2022.54.38_613fed11.jpg',
        'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images/room2/WhatsApp%20Image%202025-02-23%20at%2022.55.02_a903122b.jpg'
      ],
      video: 'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//C%20theater.mp4' // Replace with actual video URL
    }
  };
  
  // If no package is selected or the selected package doesn't exist in our data
  if (!selectedPackage || !packages[selectedPackage]) {
    return null;
  }

  const packageInfo = packages[selectedPackage];
  
  // Slideshow effect
  useEffect(() => {
    if (!packageInfo.images.length) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === packageInfo.images.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500); // Transition duration
    }, 3000); // Slide duration
    
    return () => clearInterval(interval);
  }, [packageInfo.images]);
  
  // Open image modal
  const openImageModal = (image: string) => {
    setSelectedImage(image);
    setImageModalIsOpen(true);
  };

  // Close image modal
  const closeImageModal = () => {
    setImageModalIsOpen(false);
  };
  
  // Open video modal
  const openVideoModal = () => {
    setVideoModalIsOpen(true);
  };

  // Close video modal
  const closeVideoModal = () => {
    setVideoModalIsOpen(false);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-4">
      {/* Images slideshow at the top */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-2">Preview:</h4>
        <div className="relative h-64 rounded-lg overflow-hidden cursor-pointer" onClick={() => openImageModal(packageInfo.images[currentImageIndex])}>
          {/* Main slideshow image */}
          <img 
            src={packageInfo.images[currentImageIndex]} 
            alt={`${packageInfo.name} view ${currentImageIndex + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          />
          
          {/* Thumbnail indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {packageInfo.images.map((_, index) => (
              <span 
                key={index} 
                className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400 bg-opacity-50'}`}
              />
            ))}
          </div>
          
          {/* Expand icon */}
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Video Preview */}
      {packageInfo.video && (
        <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-2">Video Tour:</h4>
          <div className="relative rounded-lg overflow-hidden cursor-pointer" onClick={openVideoModal}>
            <ReactPlayer 
              ref={videoPlayerRef}
              url={packageInfo.video} 
              width="100%" 
              height="200px" 
              controls={true}
              light={true} // Shows thumbnail until clicked
              playing={false}
            />
            
            {/* Expand icon */}
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
            </div>
          </div>
        </div>
      )}
      
      <h3 className="text-lg font-semibold mb-2">{packageInfo.name} Details</h3>
      <p className="text-gray-600 mb-4">{packageInfo.description}</p>
      
      {/* Price */}
      <p className="text-lg text-indigo-600 font-medium mb-4">
        Price: {packageInfo.price}
      </p>
      
      {/* Features */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-700 mb-2">What's included:</h4>
        <ul className="space-y-2 text-gray-600">
          {packageInfo.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Image Modal */}
      <Modal
        isOpen={imageModalIsOpen}
        onRequestClose={closeImageModal}
        contentLabel="Image Preview"
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="relative bg-white rounded-lg p-2 max-w-4xl max-h-[90vh] overflow-auto">
          <button 
            onClick={closeImageModal}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>
      </Modal>

      {/* Video Modal */}
      <Modal
        isOpen={videoModalIsOpen}
        onRequestClose={closeVideoModal}
        contentLabel="Video Preview"
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="relative bg-black rounded-lg p-2 max-w-4xl w-full max-h-[90vh] overflow-auto">
          <button 
            onClick={closeVideoModal}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {packageInfo.video && (
            <ReactPlayer 
              url={packageInfo.video} 
              width="100%" 
              height="80vh" 
              controls={true}
              playing={true}
              loop={true}
            />
          )}
        </div>
      </Modal>
    </div>
  );
}