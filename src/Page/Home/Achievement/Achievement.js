import React from 'react';
import { FaCrown } from "react-icons/fa";
import img from '../../../Image/Achievement/achive-two.jpg'

const Achievement = () => {
    return (
        <div className='bg-base-200 py-5'>
            <h2 className='text-4xl text-center font-bold hover:text-orange-500 my-5'>Achievement</h2>
            <div class="divider w-24 mx-auto before:bg-primary after:bg-secondary"></div>
            <div className='flex flex-col lg:flex-row'>
                <div className='grid grid-cols-1 gap-5 p-5'>

                    {/* card--1-- */}
                    <div className='p-2 bg-emerald-100 rounded-lg'>
                        <h4 className='text-2xl flex justify-items-center gap-3 mb-2'><span className='text-2xl'><FaCrown></FaCrown></span>NATIONAL MOBILE APP DEVELOPMENT AWARD-15</h4>
                        <p>Awarded For Live Blood Bank Mobile Application, Category- Health & Environment, Position: Runner-up</p>
                    </div>

                    {/* card--2-- */}
                    <div className='p-2 bg-lime-100 rounded-lg'>
                        <h4 className='text-2xl flex justify-items-center gap-3 mb-2'><span className='text-2xl'><FaCrown></FaCrown></span>BEST LIVE STREMING AWARD</h4>
                        <p>Online Streaming Partnership: Bangladesh ICT Expo-2015 (15 June to 17 June) at BICC</p>
                    </div>

                    {/* card--3-- */}
                    <div className='p-2 bg-blue-100 rounded-lg'>
                        <h4 className='text-2xl flex justify-items-center gap-3 mb-2'><span className='text-2xl'><FaCrown></FaCrown></span>ARIJIT SINGH LIVE IN CONCERT</h4>
                        <p>Arijit Singh Live in Concert: 12th Dec 2014 — at Jamuna Future Park, Dhaka</p>
                    </div>
                </div>
                <div className='lg:w-1/2 p-5 mx-auto'>
                    <img className='rounded-xl' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Achievement;