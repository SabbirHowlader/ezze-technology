import React from 'react';
import banner from '../../../Image/TopBanner.jpg'

const TopBanner = () => {
    return (
        <div className="hero relative overflow-hidden bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${banner})` }} >
            <div className="hero-overlay bg-opacity-60 "></div>

            <div className="text-center text-white">
                <h3 className="mb-5 text-5xl font-bold">Welcome to <span className='text-orange-400'>Innovation!</span></h3>
                <p className="mb-5 sm:w-full lg:w-1/2 mx-auto">Ezze Technology Ltd. is one of the most popular Software Company in Bangladesh. Successfully we done lot of web development projects. Our dream is going forward with High and New Technology will bring success in every way. </p>
            </div>

        </div>
    );
};

export default TopBanner;