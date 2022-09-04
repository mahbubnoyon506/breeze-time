import React from 'react';
import reminder from '../../assets/reminder.gif';
import scheduling from '../../assets/scheduling.gif';
import invite from '../../assets/invite.gif';

const DoMore = () => {
    return (
        <>
            <div className='bg-white '>
                <div className='text-center md:pt-32 py-10'>
                    <h2 className='text-4xl font-bold'>Do more of what you do best</h2>
                    <p className='pt-5'>With scheduling hassles and interruptions gone, your day is cleared for accomplishment.</p>
                </div>
                
                <div className='lg:flex justify-between items-center mx-20 flex-row-reverse py-10'>
                    <div className='w-5/6 sm:mx-auto'>
                        <img className="rounded-3xl mx-auto" src={reminder} alt="Do More" />
                    </div>
                    <div className='lg:pr-40 text-center px-16' data-aos="zoom-in">
                        <h1 className="text-primary pb-5">WORKFLOW MANAGEMENT</h1>
                        <h1 className="text-4xl font-bold">Automate reminders and follow-ups</h1>
                        <p className="pt-5">BreezeTime puts your entire meeting workflow on autopilot, sending everything from reminder emails to thank you notes, so you can focus on the work only you can do. It's like getting an assistant, even if you're a business of one.</p>
                    </div>
                
                </div>
                
                <div className='lg:flex justify-between items-center mx-20 my-10'>
                    <div className='w-4/6 sm:mx-auto'>
                        <img className="rounded-3xl mx-auto" src={scheduling} alt="Do More" />
                    </div>
                    <div className='lg:pl-40 text-center px-16' data-aos="zoom-in">
                        <h1 className="text-primary pb-5">ON-DEMAND SCHEDULING</h1>
                        <h1 className="text-4xl font-bold">Make more connections and reduce cancellations</h1>
                        <p className="pt-5">Prospects can schedule meetings in just a few clicks - whenever the moment is right. And cancellations go down because rescheduling is easy, fast, and on their terms.</p>
                    </div>
                
                </div>
                
                <div className='lg:flex justify-between items-center mx-20 flex-row-reverse py-10'>
                    <div className='w-4/6 sm:mx-auto'>
                        <img className="rounded-3xl mx-auto" src={invite} alt="Do More" />
                    </div>
                    <div className='lg:pr-40 text-center px-16' data-aos="zoom-in">
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
