import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    {
      title: 'Project One',
      image: 'path_to_image1.jpg',
      liveLink: 'https://liveproject1.com',
      repoLink: 'https://github.com/username/project1',
    },
    // Add five more projects
  ];

  return (
    <section>
      {projects.map((proj, index) => (
        <Project key={index} {...proj} />
      ))}
    </section>
  );
}

export default Portfolio;