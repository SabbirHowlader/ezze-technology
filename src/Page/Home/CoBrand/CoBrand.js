import React from 'react';
import img1 from '../../../Image/Co Brands/dhakalive.png'
import img2 from '../../../Image/Co Brands/etlcampus.png'
import img3 from '../../../Image/Co Brands/itbazaar.png'
import img4 from '../../../Image/Co Brands/techjobs.com.bd.png'

const CoBrand = () => {
    return (
        <div className='my-20'>
           {/* --header section-- */}
            <h2 className='text-4xl text-center font-bold mx-5 hover:text-orange-500 '>CO - BRANDS</h2>
            <div class="divider w-24 mx-auto before:bg-primary after:bg-secondary"></div>

            {/* --card section-- */}
            <div className='grid grid-cols-2 lg:grid-cols-4 p-5 gap-5'>

                {/* card--1-- */}
                <div className="card bg-gray-100 shadow-xl p-2">
                    <figure><img src={img1} alt="/" /></figure>
                </div>

                {/* card--2-- */}
                <div className="card bg-lime-100 shadow-xl p-2">
                    <figure><img src={img2} alt="/" /></figure>
                </div>

                {/* card--3-- */}
                <div className="card bg-green-100 shadow-xl p-2">
                    <figure><img src={img3} alt="/" /></figure>
                </div>

                {/* card--4-- */}
                <div className="card bg-fuchsia-100 shadow-xl p-2">
                    <figure><img src={img4} alt="/" /></figure>
                </div>
            </div>
        </div>
    );
};

export default CoBrand;