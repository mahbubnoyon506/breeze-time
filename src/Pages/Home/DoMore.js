import React from 'react';
import doMore1 from '../../assets/doMore1.jpg';
import doMore2 from '../../assets/doMore2.jpg';
import doMore3 from '../../assets/doMore3.jpg';

const DoMore = () => {
    return (
        <>
            <div className='bg-white '>
                <div className='lg:flex justify-between items-center mx-10 flex-row-reverse py-10'>
                    <div className='w-4/6 sm:mx-auto' data-aos="fade-left">
                        <img className=" mx-auto" src={doMore1} alt="Do More" />
                    </div>
                    <div className='lg:pr-40 text-center' data-aos="fade-right">
                        <h1 className="text-primary pb-5">WORKFLOW MANAGEMENT</h1>
                        <h1 className="text-4xl font-bold">Automate reminders and follow-ups</h1>
                        <p className="pt-5">BreezeTime puts your entire meeting workflow on autopilot, sending everything from reminder emails to thank you notes, so you can focus on the work only you can do. It's like getting an assistant, even if you're a business of one.</p>
                    </div>
                </div>
                <div className='lg:flex justify-between items-center mx-10'>
                    <div className='w-4/6 sm:mx-auto' data-aos="fade-right">
                        <img className="" src={doMore2} alt="Do More" />
                    </div>
                    <div className='lg:pl-40 text-center' data-aos="fade-left">
                        <h1 className="text-primary pb-5">ON-DEMAND SCHEDULING</h1>
                        <h1 className="text-4xl font-bold">Make more connections and reduce cancellations</h1>
                        <p className="pt-5">Prospects can schedule meetings in just a few clicks - whenever the moment is right. And cancellations go down because rescheduling is easy, fast, and on their terms.</p>
                    </div>
                </div>
                <div className='lg:flex justify-between items-center mx-10 flex-row-reverse py-10'>
                    <div className='w-4/6 sm:mx-auto' data-aos="fade-left">
                        <img className="" src={doMore3} alt="Do More" />
                    </div>
                    <div className='lg:pr-40 text-center' data-aos="fade-right">
                        <h1 className="text-primary pb-5">THE COURTEOUS APPROACH</h1>
                        <h1 className="text-4xl font-bold">Delight invitees with modern scheduling</h1>
                        <p className="pt-5">Time is a precious commodity. BreezeTime is the courteous way to book meetings and other appointments, because scheduling with just a few clicks makes the most of everyone's time.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DoMore;
