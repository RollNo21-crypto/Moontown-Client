
import React from 'react';
import moontownPromo1 from './assets/Moontown - 01 preview.mp4';
import moontownPromo2 from './assets/Moontown - 02 preview.mp4';
import AboutUS from './assets/MOONTOWN .png';

export default function About() {
  return (
    <section id="about" className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-16 animate-fade-in">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-right">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to provide an unparalleled cinema experience in a
              private, luxurious setting that exceeds our customers' expectations.
              We strive to create an atmosphere where every movie night feels like
              a special occasion.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We envision redefining entertainment by offering personalized,
              high-quality cinematic experiences tailored to our customers' needs.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Learn More About Us
            </button>
          </div>

          {/* Right Content - Main Video */}
          <div className="relative pt-4 pb-4 pl-8 pr-8">
            <img
              src={AboutUS}
              alt="Premium Store"
              className="w-full h-64 object-cover"
            />
          </div>


          
        </div>

        {/* As Seen on Media Section */}
        <div className="mt-16">
          <h3 className="text-4xl font-extrabold text-center mb-16 animate-fade-in">
            As Seen on Media
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* First Media Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
            <div className="rounded-lg overflow-hidden shadow-md animate-slide-left">
            <video className="w-full h-full object-cover" controls>
              <source src={moontownPromo1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">
                  Experience Our Premium Store
                </h4>
                <p className="text-gray-600">
                  Take a tour of our state-of-the-art facilities designed to deliver
                  the ultimate luxury and comfort. Witness the magic behind every
                  cinematic moment.
                </p>
              </div>
            </div>

            {/* Second Media Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
              <div className="relative">
                <video className="w-full h-auto object-cover" controls>
                  <source src={moontownPromo2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">
                  Behind the Scenes of Our Luxurious Setting
                </h4>
                <p className="text-gray-600">
                  Discover how we bring a touch of elegance to every experience.
                  From meticulous planning to flawless execution, see what goes
                  into creating unforgettable moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
