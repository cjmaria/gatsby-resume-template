import React from 'react';

const Experience = ({ data }) => (
  <section>
    
    {data.map(experienceGroup => (
      <div key={experienceGroup.type} >
        <h1 className="section-header uppercase">
          {experienceGroup.type}
        </h1>
        {experienceGroup.experiences.map((experience, i) => (
            <article className="my-5" key={`${experience.company}-${i}`}>
            <h2 className="item-header">{experience.company}</h2>
            <h3 className="item-sub">
                {experience.role} | {experience.start} - {experience.end || 'PRESENT'}
            </h3>
            <p className="pt-1 item-desc">{experience.description}</p>
            <ul className="ml-10 item-desc list-disc list-outside">
                {
                experience.bullets.map((bulletText, i) => (
                    <li key={`${experience.company}-${i}`}>{bulletText}</li>
                ))
                }
            </ul>
            
            </article>
        ))}
      </div>
    ))}
  </section>
);

export default Experience;
