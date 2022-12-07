import React, { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://breeze-time-server.vercel.app/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="flex items-center justify-items-start my-10">
      {reviews.map((review) => (
        <div key={review._id} className="m10 p-5 review-section">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-20 rounded-full">
                <img src={review.imageUrl} alt="userImage" />
              </div>
            </div>
            <div>
              <div className=" mx-4 rating gap-1">
                {Array.from(Array(review.rating).keys()).map((i) => (
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-accent"
                    disabled
                    checked
                  />
                ))}
                {Array.from(Array(5 - review.rating).keys()).map((i) => (
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-stone-500"
                    disabled
                  />
                ))}
              </div>
              <div>
                <p className="pl-5 text-xl font-bold text-justify">{review.name}</p>
                <p className="pl-5 text-justify">{review.email}</p>
                <p className="pl-5 text-lg text-justify">{review.review}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
