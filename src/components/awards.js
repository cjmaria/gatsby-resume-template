import React from 'react';

const Awards = ({ data }) => (
  <section className="mb-5">
    <h1 className="section-header mb-5">AWARDS</h1>
    {data &&
      data.map(item => (
        <div className="my-2" key={item.name}>
          <h2 className="item-header">{item.name}</h2>
          <h3 className="item-sub italic">{item.organization}</h3>
          <p className="text-neutral-700 font-base">
            {item.years}
          </p>
        </div>
      ))}
  </section>
);

export default Awards;
