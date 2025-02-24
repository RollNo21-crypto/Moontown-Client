import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  timeAgo: string;
  content: string;
  avatar: string;
  badge?: string;
  reviewCount?: string;
  photoCount?: string;
}

const reviews: Review[] = [
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

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

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
  );
};

export default Reviews;