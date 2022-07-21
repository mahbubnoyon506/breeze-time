import React from 'react';
import doMore1 from '../../assets/doMore1.png';
import doMore2 from '../../assets/doMore2.png';
import doMore3 from '../../assets/doMore3.png';

const DoMore = () => {
    return (
        <div className='w-full mx-auto bg-white flex font-sans'>

            <div className='text-center'>
                <h1 className="text-2xl lg:text-4xl font-bold text-center pt-8 lg:pt-16">Do more of what you do best</h1>
                <p className='mx-6 lg:text-2xl text-center px-6 pt-4 lg:pt-8'>With scheduling hassles and interruptions gone, your day is cleared for accomplishment.</p>
                <div className='w-4/5 mx-auto'>
                    <div class="hero min-h-screen">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <div>
                                <img className="w-4/5 mx-auto lg:w-full" src={doMore1} alt="Do More" />
                            </div>
                            <div className='lg:mr-40'>
                                <h1 class="text-primary pb-6">WORKFLOW MANAGEMENT</h1>
                                <h1 class="text-4xl font-bold">Automate reminders and follow-ups</h1>
                                <p class="py-10">BreezeTime puts your entire meeting workflow on autopilot, sending everything from reminder emails to thank you notes, so you can focus on the work only you can do. It's like getting an assistant, even if you're a business of one.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-4/5 mx-auto'>
                    <div class="hero min-h-screen">
                        <div class="hero-content flex-col lg:flex-row">
                            <div>
                                <img className="w-4/5 mx-auto lg:w-full" src={doMore2} alt="Do More" />
                            </div>
                            <div className='lg:ml-40'>
                                <h1 class="text-primary pb-6">ON-DEMAND SCHEDULING</h1>
                                <h1 class="text-4xl font-bold">Make more connections and reduce cancellations</h1>
                                <p class="py-10">Prospects can schedule meetings in just a few clicks - whenever the moment is right. And cancellations go down because rescheduling is easy, fast, and on their terms.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-4/5 mx-auto'>
                    <div class="hero min-h-screen">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <div>
                                <img className="w-4/5 mx-auto lg:w-full" src={doMore3} alt="Do More" />
                            </div>
                            <div className='lg:mr-40'>
                                <h1 class="text-primary pb-6">THE COURTEOUS APPROACH</h1>
                                <h1 class="text-4xl font-bold">Delight invitees with modern scheduling</h1>
                                <p class="py-10">Time is a precious commodity. BreezeTime is the courteous way to book meetings and other appointments, because scheduling with just a few clicks makes the most of everyone's time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DoMore;