// import React from 'react';
// import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/Home';
// import AdminLogin from './pages/AdminLogin';
// import AdminDashboard from './pages/AdminDashboard';
// import PricingPage from './pages/PricingPage';
// import RefundPolicyPage from './pages/RefundPolicyPage';
// import FAQsPage from './pages/FAQsPage';
// import ContactPage from './pages/ContactPage';
// import WhatsAppChat from './components/WhatsAppChat';

// export default function App() {
//   return (
//     <HashRouter>
//       <WhatsAppChat />
//       <Routes>
//         {/* Admin Routes */}
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/pricing" element={<PricingPage />} />
//         <Route path="/refund-policy" element={<RefundPolicyPage />} />
//         <Route path="/faqs" element={<FAQsPage />} />
//         <Route path="/contact" element={<ContactPage />} />
        
//         {/* Catch all route - redirect to home */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </HashRouter>
//   );
// }

import React from "react";
import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import PricingPage from "./pages/PricingPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import FAQsPage from "./pages/FAQsPage";
import ContactPage from "./pages/ContactPage";
import WhatsAppChat from "./components/WhatsAppChat";

// Function to dynamically set SEO metadata based on the route
const SEO = () => {
  const location = useLocation();
  
  // Business details
  const businessName = "Moontown Private Theatre";
  const businessAddress = "Jnanakshi Arcade, 11&12, Jananakshi Layout, Opp. Sri Jnanakshi Vidyamandir, 5th Stage, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098";
  const businessPhone = "+91 9606993278";
  const instagramProfile = "https://www.instagram.com/moontownofficial/";
  const imageURL = "https://fhtaszlrpwhcxmgctsfx.supabase.co/storage/v1/object/public/images//moon%20town%20.png";

  // Define metadata for each route
  const metadata = {
    "/": {
      title: `${businessName} - Book Your Private Movie Night`,
      description: "🎭✨ Celebrate life's special moments at Moontown Private Theatre! Book now for an exclusive movie & event experience in Bengaluru.",
      image: imageURL,
      url: "https://moontown.in/",
    },
    "/pricing": {
      title: `${businessName} Pricing - Affordable Private Theatre Rentals`,
      description: "Check out our pricing plans for an exclusive private theatre experience at Moontown, Bengaluru. Book now!",
      image: imageURL,
      url: "https://moontown.in/#/pricing",
    },
    "/refund-policy": {
      title: `${businessName} Refund Policy - Hassle-Free Booking`,
      description: "Read our refund policy to understand how we ensure a smooth experience for our guests at Moontown Private Theatre.",
      image: imageURL,
      url: "https://moontown.in/#/refund-policy",
    },
    "/faqs": {
      title: `${businessName} FAQs - Your Questions Answered`,
      description: "Find answers to the most commonly asked questions about Moontown Private Theatre, booking process, and services.",
      image: imageURL,
      url: "https://moontown.in/#/faqs",
    },
    "/contact": {
      title: `Contact ${businessName} - Get in Touch`,
      description: `Have questions or want to book your private theatre experience? Contact us at ${businessPhone} or visit us at ${businessAddress}.`,
      image: imageURL,
      url: "https://moontown.in/contact",
    },
  };

  const currentMeta = metadata[location.pathname] || metadata["/"];

  return (
    <Helmet>
      <title>{currentMeta.title}</title>
      <meta name="description" content={currentMeta.description} />
      <link rel="canonical" href={currentMeta.url} />
      <meta property="og:image" content={currentMeta.image} />
      <meta name="twitter:image" content={currentMeta.image} />

      {/* Extra Links for SEO */}
      <link rel="alternate" href="https://moontown.in/#/pricing" />
      <link rel="alternate" href="https://moontown.in/#/refund-policy" />
      <link rel="alternate" href="https://moontown.in/#/faqs" />

      {/* Instagram Profile Link */}
      <meta name="author" content={businessName} />
      <meta name="business:contact_data:street_address" content={businessAddress} />
      <meta name="business:contact_data:locality" content="Bengaluru" />
      <meta name="business:contact_data:region" content="Karnataka" />
      <meta name="business:contact_data:postal_code" content="560098" />
      <meta name="business:contact_data:country_name" content="India" />
      <meta name="business:contact_data:phone_number" content={businessPhone} />
      <meta name="business:contact_data:website" content="https://moontown.in/" />
      <meta name="business:contact_data:instagram" content={instagramProfile} />
    </Helmet>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <SEO /> {/* Injects metadata dynamically based on the current route */}
        <WhatsAppChat />
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </HelmetProvider>
  );
}
