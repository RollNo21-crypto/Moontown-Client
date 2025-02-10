import React from 'react';
import Video from './assets/Hero.mp4'

interface HeroProps {
  onBookNow: () => void;
}

export default function Hero({ onBookNow }: HeroProps) {
  return (
    <section id="home" className="pt-16">
      <div className="relative h-[600px]">
        <video
          src={Video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Experience Cinema Like Never Before</h1>
            <p className="text-xl mb-8">Book your private theater experience today</p>
            <div className="space-x-4">
              <button
                onClick={onBookNow}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700"
              >
                Book Now
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100"
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}