import React from 'react';
import img1 from '../../../Image/Recent Work/mujib100.png'
import img2 from '../../../Image/Recent Work/startup.png'
import img3 from '../../../Image/Recent Work/eed.png'
import img4 from '../../../Image/Recent Work/bloodbank.png'
import { Link } from 'react-router-dom';

const RecentWork = () => {
    return (
        <div className='my-20'>
            <h1 className='text-4xl font-bold mx-5 hover:text-orange-500'>Recent Work</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 my-10'>

                {/* Card --- 1-- */}
                <div className="card card-compact bg-base-100 shadow-xl p-2">
                    <figure><img src={img1} alt="/" /></figure>
                    <div className="card-body p-0">
                        <h2 className="card-title">PARLIAMENT MUJIB100</h2>
                        <h6>Web Application</h6>
                        <div className="card-actions justify-between">
                            <Link to="http://mujib100.parliament.gov.bd/#home"><button className="btn btn-info w-24 hover:bg-cyan-300">view</button></Link>
                        </div>
                    </div>
                </div>

                {/* card --- 2-- */}
                <div className="card card-compact bg-base-100 shadow-xl p-2">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body p-0">
                        <h2 className="card-title">STARTUP BANGLADESH</h2>
                        <h6>Mobile Application</h6>
                        <div className="card-actions justify-between">
                            <Link to="https://play.google.com/store/apps/details?id=com.ezzetech.startupbangladesh"><button className="btn btn-info w-24 hover:bg-cyan-300">view</button></Link>
                        </div>
                    </div>
                </div>

                {/* card---3-- */}
                <div className="card card-compact bg-base-100 shadow-xl p-2">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body p-0">
                        <h2 className="card-title">EDUCATION BUILDING</h2>
                        <h6>Web Application</h6>
                        <div className="card-actions justify-between">
                            <button className="btn btn-info w-24 hover:bg-cyan-300">view</button>
                        </div>
                    </div>
                </div>

                {/* card---4-- */}
                <div className="card card-compact bg-base-100 shadow-xl p-2">
                    <figure><img src={img4} alt="Shoes" /></figure>
                    <div className="card-body p-0">
                        <h2 className="card-title">BLOODBANK LIVE</h2>
                        <h6>Mobile Application</h6>
                        <div className="card-actions justify-between">
                            <Link to="https://bloodbank.live/"><button className="btn btn-info w-24 hover:bg-cyan-300">view</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end mx-5'>
                <button className="btn btn-info w-44 hover:bg-cyan-300">See All Projects</button>
            </div>
        </div>
    );
};

export default RecentWork;