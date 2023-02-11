import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-neutral text-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2 p-10 gap-10 bg-neutral text-white'>
                <div>
                    <div>
                        <h5 className='font-bold mb-5'>ADDRESS</h5>
                        <p><span className='font-bold'>CORPORATE OFFICE :</span> 49, Vision 2021 Tower-1, STP (Level 7), Kawran Bazar, Dhaka-1215.</p>
                        <p><span className='font-bold'>Phone :</span> +88 0244810014</p>
                        <p><span className='font-bold'>Email :</span> founders@etl.com.bd</p>
                        <p><span className='font-bold'>Web :</span> www.etl.com.bd</p>
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='grid gap-2'>
                        <h5 className='font-bold mb-3'>COMPANY</h5>
                        <Link className="link link-hover">About</Link>
                        <Link className="link link-hover">Careers</Link>
                        <Link className="link link-hover">Services</Link>
                        <Link className="link link-hover">Terms & Service</Link>
                        <Link className="link link-hover">Quality Policy</Link>
                        <Link className="link link-hover">Contact Us</Link>
                    </div>
                    <div className='grid gap-2'>
                        <h5 className='font-bold mb-3'>FOLLOW</h5>
                        <Link className="link link-hover">ETL Blog</Link>
                        <Link className="link link-hover">Linkedin</Link>
                        <Link className="link link-hover">Facebook</Link>
                        <Link className="link link-hover">Twitter</Link>
                        <Link className="link link-hover">Google Plus</Link>
                        <Link className="link link-hover">Youtube</Link>
                    </div>
                </div>
            </div>
            <div class="flex flex-col-reverse divide-y divide-y-reverse w-5/6 mx-auto">
                <div></div>
                <div></div>
            </div>
            <div>
                <p className='text-center py-5'>© 2023 EZZE TECHNOLOGY LTD.</p>
            </div>
        </div >
    );
};

export default Footer;