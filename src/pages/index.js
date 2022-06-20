import React from 'react';
import {
  Header,
  Summary,
  Experience,
  Skills,
  List,
  Education,
  Footer,
  Awards,
  SearchEngineOptimization
} from '../components';
import "@fontsource/ubuntu";
import "@fontsource/azeret-mono";
import resume from '../../data/profile';
import '../main.css';

const Home = () => (
  <main className="antialiased text-neutral-900 min-h-screen sm:p-5 sm:py-12">
    <SearchEngineOptimization />
    <div className="container mx-auto shadow-paper bg-white py-5 px-10">
      <Header
        contacts={resume.contact}
        name={resume.fullname}
        role={resume.role}
      />
      <Summary data={resume.summary} />
      <div className="border-b border-neutral-300 pb-2 my-5 lg:flex">
        <div className="lg:w-2/3 lg:pr-8">
          {resume.experienceGroups && <Experience data={resume.experienceGroups} />}
        </div>
        <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 ">
          {resume.education && <Education data={resume.education} />}
          {resume.skills && <Skills data={resume.skills} />}
          {resume.awardGroup && <Awards data={resume.awardGroup} />}
          {resume.sidebar &&
            resume.sidebar.map(item => (
              <List key={`${item.title}-side`} data={item} />
            ))}
        </div>
      </div>
      <Footer social={resume.social} />
    </div>
  </main>
);
//{resume.projects && <Projects data={resume.projects} />}
export default Home;
