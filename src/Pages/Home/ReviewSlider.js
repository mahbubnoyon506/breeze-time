import React from 'react';
import Marquee from 'react-fast-marquee';
import Reviews from './Reviews';

const ReviewSlider = () => {
    return (
        <div>
            <Marquee pauseOnHover={true}>
                <Reviews/>
            </Marquee>
        </div>
    );
};

export default ReviewSlider;