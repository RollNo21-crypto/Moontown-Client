// import React from 'react';
// import { Check } from 'lucide-react';
// import familyTheater from './assets/family.jpg';
// import groupTheater from './assets/friends.jpg';
// import coupleTheater from './assets/privatecouple.jpg';

// interface PricingDetailsProps {
//   onBookNow: () => void;
// } 

// const PricingDetails = ({ onBookNow }: PricingDetailsProps) => {
//   const packages = [
//     {
//       name: 'Family Theater',
//       price: '₹1999',
//       description: 'Perfect for family celebrations',
//       features: ['8-10 people', '3 Hours Duration', 'Premium Sound System', 'Comfortable Seating', 'Private Ambiance'],
//       image: familyTheater
//     },
//     {
//       name: 'Group Theater',
//       price: '₹1999',
//       description: 'Ideal for friend gatherings',
//       features: ['6-8 people', '3 Hours Duration', 'Premium Sound System', 'Comfortable Seating', 'Private Ambiance'],
//       image: groupTheater
//     },
//     {
//       name: 'Couple Theater',
//       price: '₹999',
//       description: 'Romantic setting for couples',
//       features: ['2 people', '3 Hours Duration', 'Premium Sound System', 'Couple Seating', 'Private Ambiance'],
//       image: coupleTheater
//     }
//   ];

//   const fogEntries = [
//     { name: 'No Fog Entry', price: '₹0' },
//     { name: '1 Pot Fog Entry', price: '₹300' },
//     { name: '2 Pots Fog Entry', price: '₹500' },
//     { name: '3 Pots Fog Entry', price: '₹700' },
//     { name: '4 Pots Fog Entry', price: '₹900'},
//     { name: 'Grand Fog Entry (10 Pots)', price: '₹1599' }
//   ];

//   // const decorations = [
//   //   { name: 'Basic Decoration', price: '₹500', description: 'Enhance your celebration', image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f' },
//   //   { name: 'Candle Path', price: '₹300', description: 'Enhance your celebration', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1' },
//   //   { name: 'LED Number', price: '₹100', description: 'Enhance your celebration', image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b' }
//   // ];

//   const decorations = [
//     { 
//         name: 'Basic Decoration', 
//         price: '₹500', 
//         description: 'Enhance your celebration', 
//         image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg'  // Birthday party room decoration with balloons
//     },
//     { 
//         name: 'Candle Path', 
//         price: '₹300', 
//         description: 'Enhance your celebration', 
//         image: 'https://images.pexels.com/photos/1123257/pexels-photo-1123257.jpeg'  // Beautiful candle pathway decoration
//     }
//     // { 
//     //     name: 'LED Number', 
//     //     price: '₹100', 
//     //     description: 'Enhance your celebration', 
//     //     image: 'https://images.pexels.com/photos/3419698/pexels-photo-3419698.jpeg'  // LED light number display
//     // }
// ];

//   // const gifts = [
//   //   { name: 'Small Heart Pillow', price: '₹200', image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c' },
//   //   { name: 'Event Sash', price: '₹100', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba' },
//   //   { name: 'Crown', price: '₹150', image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f' },
//   //   { name: 'Bouquet 7 Roses', price: '₹350', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1' },
//   //   { name: 'Bouquet 10 Roses', price: '₹450', image: 'https://images.unsplash.com/photo-1585647347384-2593bc35786b' },
//   //   { name: 'Luxury Bouquet 10 Roses', price: '₹500', image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b' }
//   // ];

//   // const gifts = [
//   //   { 
//   //     name: 'Small Heart Pillow', 
//   //     price: '₹200', 
//   //     image: 'https://images.pexels.com/photos/6962600/pexels-photo-6962600.jpeg?auto=compress&cs=tinysrgb&w=800'
//   //   },
//   //   { 
//   //     name: 'Event Sash', 
//   //     price: '₹100', 
//   //     image: 'https://images.pexels.com/photos/6483091/pexels-photo-6483091.jpeg?auto=compress&cs=tinysrgb&w=800'
//   //   },
//   //   { 
//   //     name: 'Crown', 
//   //     price: '₹150', 
//   //     image: 'https://images.pexels.com/photos/5427676/pexels-photo-5427676.jpeg?auto=compress&cs=tinysrgb&w=800'
//   //   },
//   //   { 
//   //     name: 'Bouquet 7 Roses', 
//   //     price: '₹350', 
//   //     image: 'https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=800'
//   //   },
//   //   { 
//   //     name: 'Bouquet 10 Roses', 
//   //     price: '₹450', 
//   //     image: 'https://images.pexels.com/photos/2879824/pexels-photo-2879824.jpeg?auto=compress&cs=tinysrgb&w=800'
//   //   },
//   //   { 
//   //     name: 'Luxury Bouquet 10 Roses', 
//   //     price: '₹500', 
//   //     image: 'https://images.pexels.com/photos/1161947/pexels-photo-1161947.jpeg?auto=compress&cs=tinysrgb&w=800'
//   //   }
//   // ];


// const cakes = [
//   { 
//     name: 'Chocolate Cake', 
//     price: '₹500', 
//     image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=800'
//   },
//   { 
//     name: 'Black Forest Cake', 
//     price: '₹500', 
//     image: 'https://images.pexels.com/photos/3185509/pexels-photo-3185509.png?auto=compress&cs=tinysrgb&w=800'
//   },
//   { 
//     name: 'Butterscotch Cake', 
//     price: '₹500', 
//     image: 'https://images.pexels.com/photos/6479546/pexels-photo-6479546.jpeg?auto=compress&cs=tinysrgb&w=800'
//   },
//   { 
//     name: 'Pineapple Cake', 
//     price: '₹500', 
//     image: 'https://images.unsplash.com/photo-1626803775151-61d756612f97?auto=compress&cs=tinysrgb&w=800'
//   },
//   { 
//     name: 'Red Velvet Round Cake', 
//     price: '₹600', 
//     image: 'https://images.pexels.com/photos/2684556/pexels-photo-2684556.jpeg?auto=compress&cs=tinysrgb&w=800'
//   },
//   { 
//     name: 'Irish Coffee Cake', 
//     price: '₹600', 
//     image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800'
//   },
//   { 
//     name: 'Red Velvet Heart Cake', 
//     price: '₹750', 
//     image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800'
//   },
//   { 
//     name: 'Choco Truffle Cake', 
//     price: '₹800', 
//     image: 'https://images.pexels.com/photos/264892/pexels-photo-264892.jpeg?auto=compress&cs=tinysrgb&w=800'
//   },
//   { 
//     name: 'Oreo Cake', 
//     price: '₹800', 
//     image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800'
//   },
//   { 
//     name: 'Choco Chip Loaded Cake', 
//     price: '₹800', 
//     image: 'https://images.pexels.com/photos/1998633/pexels-photo-1998633.jpeg?auto=compress&cs=tinysrgb&w=800'
//   },
//   { 
//     name: 'Kit Jar Cake', 
//     price: '₹1000', 
//     image: 'https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=800'
//   }
// ];


//   const photography = {
//     name: 'Photography & Videography',
//     price: '₹699',
//     description: '30 min - 30 pictures, 15 candid pics & 30 sec Instagram reels with spot edit',
//     image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1'
//   };

//   return (
//     <div className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold mb-4 text-gray-800 animate-fade-in">
//             Choose Your Perfect Package
//           </h2>
//           <p className="text-gray-600 animate-slide-in">
//             Enjoy a premium private cinema experience with add-ons
//           </p>
//         </div>

//         {/* Main Packages */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {packages.map((pkg) => (
//             <div key={pkg.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
//               <div className="p-8">
//                 <h3 className="text-2xl font-bold text-center mb-2">{pkg.name}</h3>
//                 <p className="text-center text-gray-500 mb-4">{pkg.description}</p>
//                 <div className="text-center mb-6">
//                   <span className="text-4xl font-bold text-indigo-600">{pkg.price}</span>
//                 </div>
//                 <ul className="space-y-4 mb-6">
//                   {pkg.features.map((feature) => (
//                     <li key={feature} className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-2" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   onClick={onBookNow}
//                   className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 
//                            transition duration-300 transform hover:scale-105 font-medium"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Fog Entries */}
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold mb-4">Fog Entry Options</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {fogEntries.map((fog) => (
//               <div key={fog.name} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
//                 <h4 className="font-semibold mb-2">{fog.name}</h4>
//                 <p className="text-indigo-600 font-bold">{fog.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Photography & Videography */}
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold mb-4">Photography & Videography</h3>
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
//             <img src={photography.image} alt={photography.name} className="w-full h-32 object-cover mb-4" />
//             <h4 className="font-semibold mb-2">{photography.name}</h4>
//             <p className="text-gray-600 mb-2">{photography.description}</p>
//             <p className="text-indigo-600 font-bold">{photography.price}</p>
//           </div>
//         </div>

//         {/* Decorations */}
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold mb-4">Decorations</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {decorations.map((decoration) => (
//               <div key={decoration.name} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
//                 <img src={decoration.image} alt={decoration.name} className="w-full h-32 object-cover mb-4" />
//                 <h4 className="font-semibold mb-2">{decoration.name}</h4>
//                 <p className="text-gray-600 mb-2">{decoration.description}</p>
//                 <p className="text-indigo-600 font-bold">{decoration.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Gifts
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold mb-4">Gifts</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {gifts.map((gift) => (
//               <div key={gift.name} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
//                 <img src={gift.image} alt={gift.name} className="w-full h-32 object-cover mb-4" />
//                 <h4 className="font-semibold mb-2">{gift.name}</h4>
//                 <p className="text-indigo-600 font-bold">{gift.price}</p>
//               </div>
//             ))}
//           </div>
//         </div> */}

//         {/* Cakes */}
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold mb-4">Cakes</h3>
//           <div className="grid md:grid-cols-4 gap-6">
//             {cakes.map((cake) => (
//               <div key={cake.name} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
//                 <img src={cake.image} alt={cake.name} className="w-full h-32 object-cover mb-4" />
//                 <h4 className="font-semibold mb-2">{cake.name}</h4>
//                 <p className="text-indigo-600 font-bold">{cake.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingDetails;

// import React, { useState, useEffect } from 'react';
// import { Check, X, Star } from 'lucide-react';

// interface PricingDetailsProps {
//   onBookNow: () => void;
// } 

// const PricingDetails = ({ onBookNow }: PricingDetailsProps) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showVideo, setShowVideo] = useState(true);
//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

//   const packages = [
//     {
//       name: 'Family Theater',
//       price: '₹1999',
//       description: 'Perfect for family celebrations',
//       features: ['8-10 people', '2.5 Hours Duration', 'Premium Sound System', 'Comfortable Seating', 'Private Ambiance'],
//       video: 'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//milky%20way%20galaxy%20theater%20(1).mp4',
//       images: [
//         'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
//         'https://images.pexels.com/photos/7991524/pexels-photo-7991524.jpeg',
//         'https://images.pexels.com/photos/7991486/pexels-photo-7991486.jpeg'
//       ]
//     },
//     {
//       name: 'Group Theater',
//       price: '₹1999',
//       description: 'Ideal for friend gatherings',
//       features: ['6-8 people', '2.5 Hours Duration', 'Premium Sound System', 'Comfortable Seating', 'Private Ambiance'],
//       video: 'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//galaxy%20theater.mp4',
//       images: [
//         'https://images.pexels.com/photos/7991578/pexels-photo-7991578.jpeg',
//         'https://images.pexels.com/photos/7991577/pexels-photo-7991577.jpeg',
//         'https://images.pexels.com/photos/7991576/pexels-photo-7991576.jpeg'
//       ]
//     },
//     {
//       name: 'Couple Theater',
//       price: '₹999',
//       description: 'Romantic setting for couples',
//       features: ['2 people', '2.5 Hours Duration', 'Premium Sound System', 'Couple Seating', 'Private Ambiance'],
//       video: 'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//C%20theater.mp4',
//       images: [
//         'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg',
//         'https://images.pexels.com/photos/7991581/pexels-photo-7991581.jpeg',
//         'https://images.pexels.com/photos/7991582/pexels-photo-7991582.jpeg'
//       ]
//     }
//   ];

//   const reviews = [
//     {
//       name: "Parimala Ravikumar",
//       rating: 5,
//       timeAgo: "2 weeks ago",
//       content: "It was a wonderful experience celebrating my husband's birthday at Moon Town. We all enjoyed it thoroughly, and all our guests loved it, too. The best part was that the package included photos and videos which they immediately edited and played it on the screen. It will remain a very memorable experience for all of us in the family. Thanks so much to the entire team who made the celebration so special for us!!",
//       avatar: "P"
//     },
//     {
//       name: "Abhay Bharadwaj.R",
//       rating: 5,
//       timeAgo: "2 weeks ago",
//       content: "Had an amazing experience here!! The staff are wonderful and will help you with anything and everything. The videos they make are top notch 👌 Definitely worth celebrating here for your next occasion!!",
//       avatar: "A",
//       badge: "Local Guide",
//       reviewCount: "15 reviews",
//       photoCount: "47 photos"
//     },
//     {
//       name: "Divya Gowda",
//       rating: 5,
//       timeAgo: "6 days ago",
//       content: "It's very amazing.. 🤩 Am really impressed.. The ambiance is cozy and intimate with soft lighting, overall atmosphere is more elegant and also top-notch sound system that delivers crisp audio..❤️ Specially staff are very responsive and friendly. Loved it.. 💕 Must visit.. !!",
//       avatar: "D",
//       reviewCount: "4 reviews"
//     },
//     {
//       name: "Nethravathi K",
//       rating: 5,
//       timeAgo: "a week ago",
//       content: "Had an amazing experience at Moon Town Private Theater! The ambiance was perfect, with comfortable seating and a well-organized setup that made our celebration truly special. The photography and videography services were excellent, capturing every moment beautifully. Highly recommend booking for birthdays, gatherings, or a unique movie night experience!",
//       avatar: "N",
//       reviewCount: "1 review"
//     },
//     {
//       name: "im johnny",
//       rating: 5,
//       timeAgo: "a week ago",
//       content: "One of the best place for your private parties. With my friend reference I been to this place today for our wedding anniversary celebration I was amazed that they do photo and videography for very lesser price and they shared me the video it's was really an amazing experience here please do visit here.",
//       avatar: "I",
//       reviewCount: "4 reviews",
//       photoCount: "13 photos"
//     }
//   ];


//   const fogEntries = [
//     { name: 'No Fog Entry', price: '₹0' },
//     { name: '1 Pot Fog Entry', price: '₹300' },
//     { name: '2 Pots Fog Entry', price: '₹500' },
//     { name: '3 Pots Fog Entry', price: '₹700' },
//     { name: '4 Pots Fog Entry', price: '₹900'},
//     { name: 'Grand Fog Entry (10 Pots)', price: '₹1599' }
//   ];

//   const decorations = [
//     { 
//       name: 'Basic Decoration', 
//       price: '₹500', 
//       description: 'Enhance your celebration', 
//       image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg'
//     },
//     { 
//       name: 'Candle Path', 
//       price: '₹300', 
//       description: 'Enhance your celebration', 
//       image: 'https://images.pexels.com/photos/1123257/pexels-photo-1123257.jpeg'
//     }
//   ];

//   const cakes = [
//     { 
//       name: 'Chocolate Cake', 
//       price: '₹500', 
//       image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     { 
//       name: 'Black Forest Cake', 
//       price: '₹500', 
//       image: 'https://images.pexels.com/photos/3185509/pexels-photo-3185509.png?auto=compress&cs=tinysrgb&w=800'
//     },
//     { 
//       name: 'Butterscotch Cake', 
//       price: '₹500', 
//       image: 'https://images.pexels.com/photos/6479546/pexels-photo-6479546.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     { 
//       name: 'Pineapple Cake', 
//       price: '₹500', 
//       image: 'https://images.unsplash.com/photo-1626803775151-61d756612f97?auto=compress&cs=tinysrgb&w=800'
//     },
//     { 
//       name: 'Red Velvet Round Cake', 
//       price: '₹600', 
//       image: 'https://images.pexels.com/photos/2684556/pexels-photo-2684556.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     { 
//       name: 'Irish Coffee Cake', 
//       price: '₹600', 
//       image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     { 
//       name: 'Red Velvet Heart Cake', 
//       price: '₹750', 
//       image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     { 
//       name: 'Choco Truffle Cake', 
//       price: '₹800', 
//       image: 'https://images.pexels.com/photos/264892/pexels-photo-264892.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     { 
//       name: 'Oreo Cake', 
//       price: '₹800', 
//       image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     { 
//       name: 'Choco Chip Loaded Cake', 
//       price: '₹800', 
//       image: 'https://images.pexels.com/photos/1998633/pexels-photo-1998633.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     { 
//       name: 'Kit Jar Cake', 
//       price: '₹1000', 
//       image: 'https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=800'
//     }
//   ];

//   const photography = {
//     name: 'Photography & Videography',
//     price: '₹699',
//     description: '30 min - 30 pictures, 15 candid pics & 30 sec Instagram reels with spot edit',
//     image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1'
//   };

//   useEffect(() => {
//     // Switch to images after 10 seconds
//     const videoTimeout = setTimeout(() => {
//       setShowVideo(false);
//     }, 10000);

//     // Image slideshow interval
//     const slideInterval = setInterval(() => {
//       if (!showVideo) {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
//       }
//     }, 3000);

//     return () => {
//       clearTimeout(videoTimeout);
//       clearInterval(slideInterval);
//     };
//   }, [showVideo]);

//   return (
//     <div className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold mb-4 text-gray-800 animate-fade-in">
//             Choose Your Perfect Package
//           </h2>
//           <p className="text-gray-600 animate-slide-in">
//             Enjoy a premium private cinema experience with add-ons
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-10">
//           {packages.map((pkg, index) => (
//             <div key={pkg.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <div 
//                 className="relative h-48 cursor-pointer group"
//                 onClick={() => setSelectedVideo(pkg.video)}
//               >
//                 {showVideo ? (
//                   <video 
//                     autoPlay 
//                     muted 
//                     playsInline
//                     className="w-full h-full object-cover"
//                   >
//                     <source src={pkg.video} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : (
//                   pkg.images.map((image, imgIndex) => (
//                     <img
//                       key={image}
//                       src={image}
//                       alt={`${pkg.name} view ${imgIndex + 1}`}
//                       className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
//                         imgIndex === currentImageIndex ? 'opacity-100' : 'opacity-0'
//                       }`}
//                     />
//                   ))
//                 )}
//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
//                   <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     Click to view video
//                   </span>
//                 </div>
//               </div>
//               <div className="p-8">
//                 <h3 className="text-2xl font-bold text-center mb-2">{pkg.name}</h3>
//                 <p className="text-center text-gray-500 mb-4">{pkg.description}</p>
//                 <div className="text-center mb-6">
//                   <span className="text-4xl font-bold text-indigo-600">{pkg.price}</span>
//                 </div>
//                 <ul className="space-y-4 mb-6">
//                   {pkg.features.map((feature) => (
//                     <li key={feature} className="flex items-center">
//                       <Check className="w-5 h-5 text-green-500 mr-2" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   onClick={onBookNow}
//                   className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 
//                            transition duration-300 transform hover:scale-105 font-medium"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Video Modal */}
//         {selectedVideo && (
//           <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//             <div className="relative w-full max-w-4xl mx-4">
//               <button
//                 onClick={() => setSelectedVideo(null)}
//                 className="absolute -top-10 right-0 text-white hover:text-gray-300"
//               >
//                 <X className="w-8 h-8" />
//               </button>
//               <video
//                 autoPlay
//                 controls
//                 className="w-full rounded-lg shadow-lg"
//               >
//                 <source src={selectedVideo} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>
//         )}

//         <div className="mt-16">
//           <h3 className="text-2xl font-bold mb-4">Fog Entry Options</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {fogEntries.map((fog) => (
//               <div key={fog.name} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
//                 <h4 className="font-semibold mb-2">{fog.name}</h4>
//                 <p className="text-indigo-600 font-bold">{fog.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-16">
//           <h3 className="text-2xl font-bold mb-4">Photography & Videography</h3>
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
//             <img src={photography.image} alt={photography.name} className="w-full h-32 object-cover mb-4" />
//             <h4 className="font-semibold mb-2">{photography.name}</h4>
//             <p className="text-gray-600 mb-2">{photography.description}</p>
//             <p className="text-indigo-600 font-bold">{photography.price}</p>
//           </div>
//         </div>

//         <div className="mt-16">
//           <h3 className="text-2xl font-bold mb-4">Decorations</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {decorations.map((decoration) => (
//               <div key={decoration.name} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
//                 <img src={decoration.image} alt={decoration.name} className="w-full h-32 object-cover mb-4" />
//                 <h4 className="font-semibold mb-2">{decoration.name}</h4>
//                 <p className="text-gray-600 mb-2">{decoration.description}</p>
//                 <p className="text-indigo-600 font-bold">{decoration.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-16">
//           <h3 className="text-2xl font-bold mb-4">Cakes</h3>
//           <div className="grid md:grid-cols-4 gap-6">
//             {cakes.map((cake) => (
//               <div key={cake.name} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
//                 <img src={cake.image} alt={cake.name} className="w-full h-32 object-cover mb-4" />
//                 <h4 className="font-semibold mb-2">{cake.name}</h4>
//                 <p className="text-indigo-600 font-bold">{cake.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Reviews Section with Infinite Scroll */}
//         <div className="mt-20">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
//               What Our Customers Say
//             </h2>
//             <p className="text-gray-600">
//               Read about experiences from our happy customers
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8">
//             {getVisibleReviews().map((review, index) => (
//               <div 
//                 key={`${review.name}-${index}`} 
//                 className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out"
//                 style={{
//                   opacity: 1,
//                   transform: 'translateY(0px)'
//                 }}
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-lg">
//                       {review.avatar}
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h4 className="font-semibold text-lg">{review.name}</h4>
//                         <div className="flex items-center space-x-2">
//                           <div className="flex">
//                             {[...Array(review.rating)].map((_, i) => (
//                               <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
//                             ))}
//                           </div>
//                           <span className="text-gray-500 text-sm">{review.timeAgo}</span>
//                           {review.badge && (
//                             <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
//                               {review.badge}
//                             </span>
//                           )}
//                         </div>
//                         {(review.reviewCount || review.photoCount) && (
//                           <div className="text-sm text-gray-500 mt-1">
//                             {review.reviewCount}
//                             {review.photoCount && ` • ${review.photoCount}`}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                     <p className="mt-2 text-gray-600">{review.content}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingDetails;


import React, { useState, useEffect } from 'react';
import { Check, X, Star } from 'lucide-react';

interface PricingDetailsProps {
  onBookNow: () => void;
} 

const PricingDetails = ({ onBookNow }: PricingDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const packages = [
    {
      name: 'Family Theater',
      price: '₹1999',
      description: 'Perfect for family celebrations',
      features: ['8-10 people', '3 Hours Duration', 'Premium Sound System', 'Comfortable Seating', 'Private Ambiance'],
      video: 'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//milky%20way%20galaxy%20theater%20(1).mp4',
      images: [
        'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
        'https://images.pexels.com/photos/7991524/pexels-photo-7991524.jpeg',
        'https://images.pexels.com/photos/7991486/pexels-photo-7991486.jpeg'
      ]
    },
    {
      name: 'Group Theater',
      price: '₹1999',
      description: 'Ideal for friend gatherings',
      features: ['6-8 people', '3 Hours Duration', 'Premium Sound System', 'Comfortable Seating', 'Private Ambiance'],
      video: 'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//galaxy%20theater.mp4',
      images: [
        'https://images.pexels.com/photos/7991578/pexels-photo-7991578.jpeg',
        'https://images.pexels.com/photos/7991577/pexels-photo-7991577.jpeg',
        'https://images.pexels.com/photos/7991576/pexels-photo-7991576.jpeg'
      ]
    },
    {
      name: 'Couple Theater',
      price: '₹999',
      description: 'Romantic setting for couples',
      features: ['2 people', '3 Hours Duration', 'Premium Sound System', 'Couple Seating', 'Private Ambiance'],
      video: 'https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//C%20theater.mp4',
      images: [
        'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg',
        'https://images.pexels.com/photos/7991581/pexels-photo-7991581.jpeg',
        'https://images.pexels.com/photos/7991582/pexels-photo-7991582.jpeg'
      ]
    }
  ];

  const reviews = [
    {
      name: "Parimala Ravikumar",
      rating: 5,
      timeAgo: "2 weeks ago",
      content: "It was a wonderful experience celebrating my husband's birthday at Moon Town. We all enjoyed it thoroughly, and all our guests loved it, too. The best part was that the package included photos and videos which they immediately edited and played it on the screen. It will remain a very memorable experience for all of us in the family. Thanks so much to the entire team who made the celebration so special for us!!",
      avatar: "P"
    },
    {
      name: "Abhay Bharadwaj.R",
      rating: 5,
      timeAgo: "2 weeks ago",
      content: "Had an amazing experience here!! The staff are wonderful and will help you with anything and everything. The videos they make are top notch 👌 Definitely worth celebrating here for your next occasion!!",
      avatar: "A",
      badge: "Local Guide",
      reviewCount: "15 reviews",
      photoCount: "47 photos"
    },
    {
      name: "Divya Gowda",
      rating: 5,
      timeAgo: "6 days ago",
      content: "It's very amazing.. 🤩 Am really impressed.. The ambiance is cozy and intimate with soft lighting, overall atmosphere is more elegant and also top-notch sound system that delivers crisp audio..❤️ Specially staff are very responsive and friendly. Loved it.. 💕 Must visit.. !!",
      avatar: "D",
      reviewCount: "4 reviews"
    },
    {
      name: "Nethravathi K",
      rating: 5,
      timeAgo: "a week ago",
      content: "Had an amazing experience at Moon Town Private Theater! The ambiance was perfect, with comfortable seating and a well-organized setup that made our celebration truly special. The photography and videography services were excellent, capturing every moment beautifully. Highly recommend booking for birthdays, gatherings, or a unique movie night experience!",
      avatar: "N",
      reviewCount: "1 review"
    },
    {
      name: "im johnny",
      rating: 5,
      timeAgo: "a week ago",
      content: "One of the best place for your private parties. With my friend reference I been to this place today for our wedding anniversary celebration I was amazed that they do photo and videography for very lesser price and they shared me the video it's was really an amazing experience here please do visit here.",
      avatar: "I",
      reviewCount: "4 reviews",
      photoCount: "13 photos"
    }
  ];

  const fogEntries = [
    { name: 'No Fog Entry', price: '₹0' },
    { name: '1 Pot Fog Entry', price: '₹300' },
    { name: '2 Pots Fog Entry', price: '₹500' },
    { name: '3 Pots Fog Entry', price: '₹700' },
    { name: '4 Pots Fog Entry', price: '₹900'},
    { name: 'Grand Fog Entry (10 Pots)', price: '₹1599' }
  ];

  const decorations = [
    { 
      name: 'Basic Decoration', 
      price: '₹500', 
      description: 'Enhance your celebration', 
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg'
    },
    { 
      name: 'Candle Path', 
      price: '₹300', 
      description: 'Enhance your celebration', 
      image: 'https://images.pexels.com/photos/1123257/pexels-photo-1123257.jpeg'
    }
  ];

  const cakes = [
    { 
      name: 'Chocolate Cake', 
      price: '₹500', 
      image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Black Forest Cake', 
      price: '₹500', 
      image: 'https://images.pexels.com/photos/3185509/pexels-photo-3185509.png?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Butterscotch Cake', 
      price: '₹500', 
      image: 'https://images.pexels.com/photos/6479546/pexels-photo-6479546.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Pineapple Cake', 
      price: '₹500', 
      image: 'https://images.unsplash.com/photo-1626803775151-61d756612f97?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Red Velvet Round Cake', 
      price: '₹600', 
      image: 'https://images.pexels.com/photos/2684556/pexels-photo-2684556.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Irish Coffee Cake', 
      price: '₹600', 
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Red Velvet Heart Cake', 
      price: '₹750', 
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Choco Truffle Cake', 
      price: '₹800', 
      image: 'https://images.pexels.com/photos/264892/pexels-photo-264892.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Oreo Cake', 
      price: '₹800', 
      image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Choco Chip Loaded Cake', 
      price: '₹800', 
      image: 'https://images.pexels.com/photos/1998633/pexels-photo-1998633.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      name: 'Kit Jar Cake', 
      price: '₹1000', 
      image: 'https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const photography = {
    name: 'Photography & Videography',
    price: '₹699',
    description: '30 min - 30 pictures, 15 candid pics & 30 sec Instagram reels with spot edit',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1'
  };

  useEffect(() => {
    let videoTimeout: NodeJS.Timeout;
    let imageInterval: NodeJS.Timeout;

    const startImageCycle = () => {
      setShowVideo(false);
      imageInterval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          if (prevIndex === 2) {
            clearInterval(imageInterval);
            setShowVideo(true);
            videoTimeout = setTimeout(startImageCycle, 10000);
            return 0;
          }
          return prevIndex + 1;
        });
      }, 3000);
    };

    videoTimeout = setTimeout(startImageCycle, 10000);

    return () => {
      clearTimeout(videoTimeout);
      clearInterval(imageInterval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    const result = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentReviewIndex + i) % reviews.length;
      result.push(reviews[index]);
    }
    return result;
  };

  return (
    <div className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="relative w-full h-[400px] mb-16 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source 
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Experience Cinema Like Never Before</h1>
            <p className="text-xl">Your Private Theater Experience Awaits</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800 animate-fade-in">
            Choose Your Perfect Package
          </h2>
          <p className="text-gray-600 animate-slide-in">
            Enjoy a premium private cinema experience with add-ons
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <div key={pkg.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="relative h-48 cursor-pointer group"
                onClick={() => setSelectedVideo(pkg.video)}
              >
                {showVideo ? (
                  <video 
                    autoPlay 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={pkg.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  pkg.images.map((image, imgIndex) => (
                    <img
                      key={image}
                      src={image}
                      alt={`${pkg.name} view ${imgIndex + 1}`}
                      className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                        imgIndex === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to view video
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-2">{pkg.name}</h3>
                <p className="text-center text-gray-500 mb-4">{pkg.description}</p>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-indigo-600">{pkg.price}</span>
                </div>
                <ul className="space-y-4 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onBookNow}
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 
                           transition duration-300 transform hover:scale-105 font-medium"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 sm:p-6 md:p-8">
            <div className="relative w-full max-w-6xl mx-auto aspect-video">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative w-full h-0 pb-[56.25%]">
                <video
                  autoPlay
                  controls
                  className="absolute inset-0 w-full h-full rounded-lg shadow-2xl"
                >
                  <source src={selectedVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4">Fog Entry Options</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {fogEntries.map((fog) => (
              <div key={fog.name} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                <h4 className="font-semibold mb-2">{fog.name}</h4>
                <p className="text-indigo-600 font-bold">{fog.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4">Photography & Videography</h3>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <img src={photography.image} alt={photography.name} className="w-full h-32 object-cover mb-4" />
            <h4 className="font-semibold mb-2">{photography.name}</h4>
            <p className="text-gray-600 mb-2">{photography.description}</p>
            <p className="text-indigo-600 font-bold">{photography.price}</p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4">Decorations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {decorations.map((decoration) => (
              <div key={decoration.name} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                <img src={decoration.image} alt={decoration.name} className="w-full h-32 object-cover mb-4" />
                <h4 className="font-semibold mb-2">{decoration.name}</h4>
                <p className="text-gray-600 mb-2">{decoration.description}</p>
                <p className="text-indigo-600 font-bold">{decoration.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4">Cakes</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {cakes.map((cake) => (
              <div key={cake.name} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                <img src={cake.image} alt={cake.name} className="w-full h-32 object-cover mb-4" />
                <h4 className="font-semibold mb-2">{cake.name}</h4>
                <p className="text-indigo-600 font-bold">{cake.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section with Infinite Scroll */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">
              Read about experiences from our happy customers
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {getVisibleReviews().map((review, index) => (
              <div 
                key={`${review.name}-${index}`} 
                className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out"
                style={{
                  opacity: 1,
                  transform: 'translateY(0px)'
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-lg">
                      {review.avatar}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-lg">{review.name}</h4>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-gray-500 text-sm">{review.timeAgo}</span>
                          {review.badge && (
                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                              {review.badge}
                            </span>
                          )}
                        </div>
                        {(review.reviewCount || review.photoCount) && (
                          <div className="text-sm text-gray-500 mt-1">
                            {review.reviewCount}
                            {review.photoCount && ` • ${review.photoCount}`}
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600">{review.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;