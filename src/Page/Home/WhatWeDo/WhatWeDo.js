import React from 'react';
import { FaLaptop, FaRocket, FaGlobeAfrica ,FaStore, FaVideo,FaWeightHanging} from "react-icons/fa";

const WhatWeDo = () => {
    return (
        <div className='btn-info'>
            <h2 className='text-4xl font-bold text-center hover:text-orange-500 pt-10 pb-2'>What We Do!</h2>
            <div class="divider w-24 mx-auto before:bg-primary after:bg-secondary"></div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-5 lg:mx-16 pb-10'>

                {/* part--1-- */}
                <div>
                    <div>
                        <span className='text-5xl flex justify-center p-6 bg-teal-300 hover:text-orange-500 w-24  mx-auto rounded-full'><FaRocket></FaRocket></span>
                    </div>
                    <div className='mt-3'>
                        <h5 className='text-2xl font-bold mb-3'>Web Development</h5>
                        <p>
                            Web Development
                            Ezze Technology Ltd. offers web solutions which tend to be effective tools of marketing and ensure return on investments. We are devoted to give our customers affordable and custom based packages which surpass the expectation of the clientele.
                        </p>
                    </div>
                </div>

                {/* part--2-- */}
                <div>
                    <div>
                        <span className='text-5xl flex justify-center p-6 bg-teal-300 hover:text-orange-500 w-24  mx-auto rounded-full'><FaLaptop></FaLaptop></span>
                    </div>
                    <div className='mt-3'>
                        <h5 className='text-2xl font-bold mb-3'>Apps Development</h5>
                        <p>
                            Ezze Technology Ltd. provides wide assortment of services for mobile applications and developments which makes the transition of your company into the online world as smooth as possible. Our professional team constantly hones their skill to ensure that your company stays ahead in this competitive world.
                        </p>
                    </div>
                </div>

                {/* part--3-- */}
                <div>
                    <div>
                        <span className='text-5xl flex justify-center p-6 bg-teal-300 hover:text-orange-500 w-24  mx-auto rounded-full'><FaGlobeAfrica></FaGlobeAfrica></span>
                    </div>
                    <div className='mt-3'>
                        <h5 className='text-2xl font-bold mb-3'>Digital Marketing</h5>
                        <p>
                            Digital Marketing
                            Digital Marketing is driving the society to a phase which creates new ways of thinking, interrelationships and global awareness. We are trying to provide out of the box solutions which can help to find lasting and hi-impact solutions to marketing issue.
                        </p>
                    </div>
                </div>

                {/* part--4-- */}
                <div>
                    <div>
                        <span className='text-5xl flex justify-center p-6 bg-teal-300 hover:text-orange-500 w-24  mx-auto rounded-full'><FaStore></FaStore></span>
                    </div>
                    <div className='mt-3'>
                        <h5 className='text-2xl font-bold mb-3'>Domain & Hosting</h5>
                        <p>
                            Ezze Technology Ltd. realizes that now a day’s everyone needs an online presence, regardless of their line of business or technical expertise. With an authoritative and straightforward way to hosting solution, we are able to cover everyone’s need and requirements.
                        </p>
                    </div>
                </div>

                {/* part--5-- */}
                <div>
                    <div>
                        <span className='text-5xl flex justify-center p-6 bg-teal-300 hover:text-orange-500 w-24  mx-auto rounded-full'><FaVideo></FaVideo></span>
                    </div>
                    <div className='mt-3'>
                        <h5 className='text-2xl font-bold mb-3'>Live Streming</h5>
                        <p>
                            Live Streaming video is content that sent in compressed form over the Internet and displayed by the viewer in real time. We ensure video streaming platform which allows customers to live their video content in a seamless way.
                        </p>
                    </div>
                </div>

                {/* part--6-- */}
                <div>
                    <div>
                        <span className='text-5xl flex justify-center p-6 bg-teal-300 hover:text-orange-500 w-24  mx-auto rounded-full'><FaWeightHanging></FaWeightHanging></span>
                    </div>
                    <div className='mt-3'>
                        <h5 className='text-2xl font-bold mb-3'>E-Business Solution</h5>
                        <p>
                            Ezze Technology Ltd. brings a package program that lets you build, customize, and run an online store. We will walk you through the entire process: hosting, design, pricing and payment options, marketing tools and reports.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhatWeDo;