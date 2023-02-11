import React from 'react';
import banner from '../../../Image/TopBanner.jpg'

const TopBanner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h3 className="mb-5 text-4xl font-bold">Welcome to <span className='text-orange-400'>Innovation!</span></h3>
                    <p className="mb-5">Ezze Technology Ltd. is one of the most popular Software Company in Bangladesh. We work on Web Development, Apps Development, Digital Marketing, Domain & Hosting, Live Streaming video and E-Business Solution. Successfully we done lot of web development projects. Our dream is going forward with High and New Technology will bring success in every way. </p>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;