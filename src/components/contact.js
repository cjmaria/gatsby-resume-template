import React from 'react';
import MailIcon from '../assets/mail.svg';
import LocationIcon from '../assets/location.svg';

const Contact = ({ field, value }) => (
  <span className="flex my-2 text-neutral-700 tracking-wide items-center text-lg">
    {field === 'email' && (
      <>
        <MailIcon className="contact-icon" />
        <a className="contact-link" href={`mailto:${value}`} title="email">
          {value}
        </a>
      </>
    )}
    {field === 'location' && (
      <>
        <LocationIcon className="contact-icon" />
        <span className="contact-link">{value}</span>
      </>
    )}
  </span>
);

export default Contact;
