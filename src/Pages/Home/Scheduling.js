import React from "react";

const Scheduling = () => {
  return (
    <div>
      <h1 className="text-2xl lg:text-4xl font-bold justify-center flex my-8 lg:my-16">
        Scheduling for any meeting type
      </h1>
      <div className="cards mx-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card hover:rounded-lg hover:bg-accent-focus p-8 ">
          <img
            className="w-8"
            src="https://images.ctfassets.net/k0lk9kiuza3o/6eeiV8vQ5r4wapPkjxwmVs/b70237791206b5580e72d77d0fbb60ff/icon-customers.svg"
            alt=""
          />
          <div className="card-title my-4">One-on-one</div>
          <p className="">
            Let your clients and colleagues select open meeting types from your
            schedule
          </p>
        </div>
        <div className="card hover:rounded-lg hover:bg-accent-focus p-8">
          <img
            className="w-8"
            src="https://images.ctfassets.net/k0lk9kiuza3o/2ISl5s3a5RId9XpeuTJBxV/52a26ea61be5da23f0c2a83e73c2a9e6/Icon-Education.svg"
            alt=""
          />
          <div className="card-title my-4">Group</div>
          <p>
            Book events for multiple attendees such as webinars and training
            sessions
          </p>
        </div>
        <div className="card hover:rounded-lg hover:bg-accent-focus p-8">
          <img
            className="w-8"
            src="https://images.ctfassets.net/k0lk9kiuza3o/6765yY5ajTUxB9MIz4nToI/00f0de305b8ac2ff4ad0ef7941a75a28/collective.svg"
            alt=""
          />
          <div className="card-title my-4">Collective</div>
          <p>
            Schedule <span className="font-bold">across your team’s</span>{" "}
            calendars for events you <span className="font-bold">co-host</span>{" "}
            with others
          </p>
        </div>
        <div className="card hover:rounded-lg hover:bg-accent-focus p-8">
          <img
            className="w-8"
            src="https://images.ctfassets.net/k0lk9kiuza3o/35pgmxHTHZfJMr4HwHGibz/ee1cb916d14a7971fbaa8aa24766cf25/round_robin.svg"
            alt=""
          />
          <div className="card-title my-4">Round robin</div>
          <p>Balance hosting responsibilities for your team automatically</p>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
