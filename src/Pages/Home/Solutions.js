import React from 'react';

const Solutions = () => {
    return (
        <div>
            <div className='my-12 md:my-32'>
                <h2 className='text-center mb-2 md:mb-8 text-md uppercase font-semibold text-primary tracking-wide'>Solutions</h2>
                <h1 className="text-2xl lg:text-4xl font-bold justify-center flex mb-8 lg:mb-16">
                    The right BreezeTime for the work you do
                </h1>
                <div className="cards mx-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="card rounded-lg bg-white p-8 shadow-md max-w-sm ">
                        <img
                            className="w-8"
                            src="https://images.ctfassets.net/k0lk9kiuza3o/6eeiV8vQ5r4wapPkjxwmVs/b70237791206b5580e72d77d0fbb60ff/icon-customers.svg"
                            alt=""
                        />
                        <div className="card-title my-4">Sales</div>
                        <p className="">
                            Spend more time selling, and less time on admin. Shorten your sales cycle by letting prospects schedule while they’re in peak buying mode.
                        </p>
                    </div>
                    <div className="card rounded-lg bg-white p-8 shadow-md max-w-sm">
                        <img
                            className="w-8"
                            src="https://images.ctfassets.net/k0lk9kiuza3o/2ISl5s3a5RId9XpeuTJBxV/52a26ea61be5da23f0c2a83e73c2a9e6/Icon-Education.svg"
                            alt=""
                        />
                        <div className="card-title my-4">Marketing</div>
                        <p>
                            Convert interested prospects into scheduled meetings and demos faster. Skip steps that cause customer friction.
                        </p>
                    </div>
                    <div className="card rounded-lg bg-white p-8 shadow-md max-w-sm">
                        <img
                            className="w-8"
                            src="https://images.ctfassets.net/k0lk9kiuza3o/6765yY5ajTUxB9MIz4nToI/00f0de305b8ac2ff4ad0ef7941a75a28/collective.svg"
                            alt=""
                        />
                        <div className="card-title my-4">Customer Success</div>
                        <p>
                            Offer exceptional support: Your clients will be delighted with one-click scheduling and increased responsiveness.
                        </p>
                    </div>
                    <div className="card rounded-lg bg-white p-8 shadow-md max-w-sm">
                        <img
                            className="w-8"
                            src="https://images.ctfassets.net/k0lk9kiuza3o/35pgmxHTHZfJMr4HwHGibz/ee1cb916d14a7971fbaa8aa24766cf25/round_robin.svg"
                            alt=""
                        />
                        <div className="card-title my-4">Revenue Operations</div>
                        <p>
                            Streamline meeting and activity data. Calendly’s native integrations with Salesforce and HubSpot ensure up-to-date reporting.
                        </p>
                    </div>
                    <div className="card rounded-lg bg-white p-8 shadow-md max-w-sm">
                        <img
                            className="w-8"
                            src="https://images.ctfassets.net/k0lk9kiuza3o/35pgmxHTHZfJMr4HwHGibz/ee1cb916d14a7971fbaa8aa24766cf25/round_robin.svg"
                            alt=""
                        />
                        <div className="card-title my-4">Recruiting</div>
                        <p>
                            Simplify recruitment by smoothing every aspect of the interview scheduling process, including automated follow-ups.
                        </p>
                    </div>
                    <div className="card rounded-lg bg-white p-8 shadow-md max-w-sm">
                        <img
                            className="w-8"
                            src="https://images.ctfassets.net/k0lk9kiuza3o/35pgmxHTHZfJMr4HwHGibz/ee1cb916d14a7971fbaa8aa24766cf25/round_robin.svg"
                            alt=""
                        />
                        <div className="card-title my-4">Information Technology</div>
                        <p>
                            Increase scheduling productivity across your org while maintaining full security and control over users.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;