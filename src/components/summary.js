import React from 'react';

const Summary = ({ data }) => (
  <section className="py-5 border-b border-neutral-300 lg:flex items-center">
    <div className="my-5">
      <img
        className="rounded-full mx-auto w-32 lg:w-4/5 xl:w-3/5"
        src="./profile.jpg"
        alt="profile"
      />
    </div>
    <p className="text-center leading-relaxed text-neutral-700 lg:text-left lg:mx-8 lg:text-xl">
      {data}
    </p>
  </section>
);

export default Summary;
