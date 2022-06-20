import React from 'react';
import Contact from './contact';

const Header = ({ name, role, contacts }) => (
  <header className="border-b border-neutral-300 pb-2 md:flex items-center justify-between">
    <div>
      <h1 className="text-primary text-4xl md:text-5xl font-bold tracking-wide leading-tight">
        {name}
      </h1>
      <h2 className="font-normal text-lg md:text-2xl text-neutral-700 leading-relaxed tracking-widest">
        {role}
      </h2>
    </div>
    <div className="mt-5 md:mt-0 md:border-l md:border-neutral-300 md:pl-4">
      {contacts &&
        Object.keys(contacts).map(key => (
          <Contact key={key} field={key} value={contacts[key]} />
        ))}
    </div>
  </header>
);

export default Header;
