import React from 'react';
import {
  Header,
  Footer
} from '../components';
import resume from '../../data/profile';
import '../main.css';

const Home = () => (
  <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
    <div className="container mx-auto shadow bg-white py-5 px-10">
      <Header
        contacts={resume.contact}
        name={resume.fullname}
        role={resume.role}
      />
      <div className="py-20 border-b border-neutral-300 my-5 lg:flex">
        <h2>404: Sorry, this page does not exist!</h2>
      </div>
      <Footer social={resume.social} />
    </div>
  </main>
);
//{resume.projects && <Projects data={resume.projects} />}
export default Home;
