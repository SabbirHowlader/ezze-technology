import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div>
                <h2 className='text-center text-4xl font-bold hover:text-orange-500'>CONTACT US</h2>
                <div class="divider w-24 mx-auto before:bg-primary after:bg-secondary"></div>
                <div className='m-10 p-10 grid gap-5 bg-base-200 rounded-lg'>
                    <div>
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Your Name' />
                    </div>
                    <div>
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Your Email' />
                    </div>
                    <div >
                        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                        <textarea id="comment" rows="4" class=" w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600w-full  text-sm text-gray-900 p-2 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write your message." required></textarea>
                    </div>
                    <button className="btn btn-info w-full hover:bg-cyan-300">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;