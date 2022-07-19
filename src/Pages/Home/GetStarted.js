import React from "react";

const GetStarted = () => {
  return (
    <div className="">
      <h1 className="text-2xl lg:text-4xl font-bold justify-center flex my-8 lg:my-16">
        We make it easy to get started
      </h1>

      <div className="cards">
        <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {" "}
          <div class="card w-96 bg-base-200 mx-auto">
            <div class="card-body">
              <img
                className=" w-8"
                src="https://img.icons8.com/fluency/344/checked.png"
                alt=""
              />
              <h1 className="card-title my-4"> Create simple rules</h1>
              <p>
                Let Calendly know your availability preferences and it'll do the
                work for you.
              </p>
            </div>
          </div>
          <div class="card w-96 bg-base-200 mx-auto">
            <div class="card-body">
              <img
                className=" w-8"
                src="https://img.icons8.com/fluency/344/checked.png"
                alt=""
              />
              <h1 className="card-title my-4"> Create simple rules</h1>
              <p>
                Let Calendly know your availability preferences and it'll do the
                work for you.
              </p>
            </div>
          </div>
          <div class="card w-96 bg-base-200  mx-auto">
            <div class="card-body">
              <img
                className=" w-8"
                src="https://img.icons8.com/fluency/344/checked.png"
                alt=""
              />
              <h1 className="card-title my-4"> Create simple rules</h1>
              <p>
                Let Calendly know your availability preferences and it'll do the
                work for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
