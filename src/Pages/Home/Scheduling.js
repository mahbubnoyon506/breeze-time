import React from "react";

const Scheduling = () => {

  const data = [
    {
      "id": 1,
      "name": "One-on-one",
      "content": "Let your clients and colleagues select open meeting types from your schedule",
      "image": "https://images.ctfassets.net/k0lk9kiuza3o/6eeiV8vQ5r4wapPkjxwmVs/b70237791206b5580e72d77d0fbb60ff/icon-customers.svg"
    },
    {
      "id": 2,
      "name": "Group",
      "content": "Book events for multiple attendees such as webinars and training sessions",
      "image": "https://images.ctfassets.net/k0lk9kiuza3o/2ISl5s3a5RId9XpeuTJBxV/52a26ea61be5da23f0c2a83e73c2a9e6/Icon-Education.svg"
    },
    {
      "id": 3,
      "name": "Collective",
      "content": "Schedule across your team's calendars for events you co-host with others",
      "image": "https://images.ctfassets.net/k0lk9kiuza3o/6765yY5ajTUxB9MIz4nToI/00f0de305b8ac2ff4ad0ef7941a75a28/collective.svg"
    },
    {
      "id": 4,
      "name": "Round robin",
      "content": "Balance hosting responsibilities for your team automatically",
      "image": "https://images.ctfassets.net/k0lk9kiuza3o/35pgmxHTHZfJMr4HwHGibz/ee1cb916d14a7971fbaa8aa24766cf25/round_robin.svg"
    }
  ]


  return (
    <div className="pb-20 px-8">
      <h1 className="text-2xl lg:text-4xl font-bold justify-center flex my-8 lg:my-16">
        Scheduling for any meeting type
      </h1>
      <div className="lg:grid grid-cols-2 gap-5 px-10">
        {
          data.map((d) =>
            <>
              <div className="card w-full bg-white shadow-md sm:mb-5 lg:mb-0" data-aos="zoom-in">
                <div className="card-body ">
                  <img
                    className="w-8"
                    src={d.image}
                    alt=""
                  />
                  <div className="card-title my-4">{d.name}</div>
                  <p className="">{d.content}</p>
                </div>
              </div>
            </>
          )
        }
      </div>
    </div>
  );
};

export default Scheduling;
