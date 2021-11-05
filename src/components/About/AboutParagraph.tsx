import React from 'react';

const AboutParagraph = () => {
  return (
    <div className="text-sm text-justify font-body sm:text-base">
      <p className="mb-4">
        Hi, I'm Hit! I'm currently studying{' '}
        <span className="text-secondary">
          Information Technology{' '}
        </span>
        at V.V.P Engineering College Rajkot.
      </p>
      {/* <p className="mb-4">
        I have experience working at{' '}
        <span className="text-secondary">Deutsche Bank </span>
        as Technical Analyst Intern.
      </p> */}
      <p className="mb-4">
        I am a <span className="text-secondary"> Web devloper </span>  as well as a 
        <span className="text-secondary"> Competitive Coder  </span> and love to do
        <span className="text-secondary"> functional programming.</span>I have a good knowledge
        of languages like<span className="text-secondary">  C, C++, Java  </span> and concepts like<span className="text-secondary">  OOPS, DBMS, Networking and  Data Structures and Algorithms </span>. Currently exploring 
        backend technologies and frameworks like <span className="text-secondary"> Node.js</span>,<span className="text-secondary"> Express.js,leaflet.js  </span> and Spring Boot.
        and also familiar with <span className="text-secondary"> MongoDb</span>,MySql Databases.And also
        worked on <span className="text-secondary"> Wordpress.</span>
      </p>
    </div>
  );
};

export default AboutParagraph;
