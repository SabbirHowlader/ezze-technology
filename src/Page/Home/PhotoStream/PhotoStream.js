import React from 'react';
import img1 from '../../../Image/Photo Stream/s1.png'
import img2 from '../../../Image/Photo Stream/s2.jpg'
import img3 from '../../../Image/Photo Stream/s3.jpg'
import img4 from '../../../Image/Photo Stream/s4.jpg'
import img5 from '../../../Image/Photo Stream/s5.jpg'
import img6 from '../../../Image/Photo Stream/s6.jpg'
import img7 from '../../../Image/Photo Stream/etl_7.jpg'
import img8 from '../../../Image/Photo Stream/s8.jpg'

const PhotoStream = () => {
    return (
        <div className='my-20'>
            <h2 className='text-4xl text-center font-bold hover:text-orange-500'>PHOTO STREAM</h2>
            <div class="divider w-24 mx-auto before:bg-primary after:bg-secondary"></div>
            <div className='grid grid-cols-1 lg:grid-cols-4 p-5 gap-5'>
                <img className='w-full' src={img1} alt="" />
                <img className='w-full' src={img2} alt="" />
                <img className='w-full' src={img3} alt="" />
                <img className='w-full' src={img4} alt="" />
                <img className='w-full' src={img5} alt="" />
                <img className='w-full' src={img6} alt="" />
                <img className='w-full' src={img7} alt="" />
                <img className='w-full' src={img8} alt="" />
            </div>
        </div>
    );
};

export default PhotoStream;