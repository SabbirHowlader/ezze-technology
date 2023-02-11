import React from 'react';
import img1 from '../../../Image/Our-client/a2i.png'
import img2 from '../../../Image/Our-client/beatnik.png'
import img3 from '../../../Image/Our-client/brac.png'
import img4 from '../../../Image/Our-client/btcl.png'
import img5 from '../../../Image/Our-client/daily-star.png'
import img6 from '../../../Image/Our-client/gaan-bangla.png'
import img7 from '../../../Image/Our-client/grey.png'
import img8 from '../../../Image/Our-client/hi-tech.png'
import img9 from '../../../Image/Our-client/ictdivision-logo.png'
import img10 from '../../../Image/Our-client/IPDC-logo.png'
import img11 from '../../../Image/Our-client/kcargo-logo.png'
import img12 from '../../../Image/Our-client/lict-logo.png'
import img13 from '../../../Image/Our-client/netg5.png'
import img14 from '../../../Image/Our-client/powar-minstry.png'
import img15 from '../../../Image/Our-client/prothom-alo.png'
import img16 from '../../../Image/Our-client/south-city.png'
import Partner from './Partner/Partner';

const ClientPartner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 my-20 gap-10'>
            <div>
                <h2 className='text-4xl font-bold text-center -mb-6'>Our Client</h2>
                <div className='grid grid-cols-3 lg:grid-cols-4 gap-10 p-10'>
                     <img src={img1} alt="/" /> 
                     <img src={img2} alt="/" /> 
                     <img src={img3} alt="/" /> 
                     <img src={img4} alt="/" /> 
                     <img src={img5} alt="/" /> 
                     <img src={img6} alt="/" /> 
                     <img src={img7} alt="/" /> 
                     <img src={img8} alt="/" /> 
                     <img src={img9} alt="/" /> 
                     <img src={img10} alt="/" /> 
                     <img src={img11} alt="/" /> 
                     <img src={img12} alt="/" /> 
                     <img src={img13} alt="/" /> 
                     <img src={img14} alt="/" /> 
                     <img src={img15} alt="/" /> 
                     <img src={img16} alt="/" /> 
                </div>
            </div>
            <div>
                <h2 className='text-4xl font-bold text-center -mb-6'>Our Partner</h2>
                <div>
                    <Partner></Partner>
                </div>
            </div>
        </div>
    );
};

export default ClientPartner;