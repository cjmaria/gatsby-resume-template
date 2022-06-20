import React from 'react';

const Education = ({ data }) => (
  <section className="mb-5">
    <h1 className="section-header mb-5">EDUCATION</h1>
    {data &&
      data.map(item => (
        <div className="my-2" key={item.degree}>
          <h2 className="item-header">{item.degree}</h2>
          <h3 className="item-sub">{item.institution}</h3>
          <p className="text-neutral-700 font-base">
            {item.start} - {item.end}
          </p>
        </div>
      ))}
  </section>
);

export default Education;
