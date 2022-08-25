import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { GiOnTarget, GiHumanPyramid } from 'react-icons/gi';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { RiCustomerService2Line } from 'react-icons/ri';
import { AiOutlineLineChart } from 'react-icons/ai';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

const Solutions = () => {
    return (
        <div className='w-full bg-blue-50 flex justify-center items-center font-sans px-10'>
            <div className='my-12 md:my-32 container'>
                <div>
                    <h2 className='text-center mb-2 md:mb-8 text-md uppercase font-semibold text-primary tracking-wide'>Solutions</h2>
                    <h1 className="text-2xl lg:text-4xl font-bold justify-center flex mb-8 lg:mb-16">
                        The right BreezeTime for the work you do
                    </h1>
                </div>
                <div className='w-full'>
                    <div className="mx-8 px-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 items-center justify-center gap-x-4 gap-y-8">
                        <div className="card rounded-lg bg-white p-8 shadow-md max-w-sm h-full " data-aos="fade-right">
                            <GiOnTarget className='text-4xl text-primary' />
                            <div className="card-title my-4">Sales</div>
                            <p className="text-gray-600 font-normal leading-7">
                                Spend more time selling, and less time on admin. Shorten your sales cycle by letting prospects schedule while they’re in peak buying mode.
                            </p>
                            <p className='text-lg text-primary mt-2 md:mt-6 flex items-center'>
                                Learn more <IoIosArrowForward className='ml-2 w-4' />
                            </p>
                        </div>
                        <div className="card rounded-lg bg-white p-8 shadow-md max-w-sm h-full" data-aos="zoom-in">
                            <AiOutlineThunderbolt className='text-4xl text-primary' />
                            <div className="card-title my-4">Marketing</div>
                            <p className='text-gray-600 font-normal leading-7'>
                                Convert interested prospects into scheduled meetings and demos faster. Skip steps that cause customer friction.
                            </p>
                            <p className='text-lg text-primary mt-2 md:mt-6 flex items-center'>
                                Learn more <IoIosArrowForward className='ml-2 w-4' />
                            </p>
                        </div>
                        <div className="card rounded-lg bg-white p-8 shadow-md max-w-sm h-full" data-aos="fade-left">

                            <RiCustomerService2Line className='text-4xl text-primary' />
                            <div className="card-title my-4">Customer Success</div>
                            <p className='text-gray-600 font-normal leading-7'>
                                Offer exceptional support: Your clients will be delighted with one-click scheduling and increased responsiveness.
                            </p>
                            <p className='text-lg text-primary mt-2 md:mt-6 flex items-center'>
                                Learn more <IoIosArrowForward className='ml-2 w-4' />
                            </p>
                        </div>
                        <div className="card rounded-lg bg-white p-8 shadow-md max-w-sm h-full" data-aos="fade-right">

                            <AiOutlineLineChart className='text-4xl text-primary' />
                            <div className="card-title my-4">Revenue Operations</div>
                            <p className='text-gray-600 font-normal leading-7'>
                                Streamline meeting and activity data. Calendly's native integrations with Salesforce and HubSpot ensure up-to-date reporting.
                            </p>
                            <p className='text-lg text-primary mt-2 md:mt-6 flex items-center'>
                                Learn more <IoIosArrowForward className='ml-2 w-4' />
                            </p>
                        </div>
                        <div className="card rounded-lg bg-white p-8 shadow-md max-w-sm h-full" data-aos="zoom-in">
                            <GiHumanPyramid className='text-4xl text-primary'/>
                            <div className="card-title my-4">Recruiting</div>
                            <p className='text-gray-600 font-normal leading-7'>
                                Simplify recruitment by smoothing every aspect of the interview scheduling process, including automated follow-ups.
                            </p>
                            <p className='text-lg text-primary mt-2 md:mt-6 flex items-center'>
                                Learn more <IoIosArrowForward className='ml-2 w-4' />
                            </p>
                        </div>
                        <div className="card rounded-lg bg-white p-8 shadow-md max-w-sm h-full" data-aos="fade-left">

                            <HiOutlineDesktopComputer className='text-4xl text-primary' />
                            <div className="card-title my-4">Information Technology</div>
                            <p className='text-gray-600 font-normal leading-7'>
                                Increase scheduling productivity across your org while maintaining full security and control over users.
                            </p>
                            <p className='text-lg text-primary mt-2 md:mt-6 flex items-center'>
                                Learn more <IoIosArrowForward className='ml-2 w-4' />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;