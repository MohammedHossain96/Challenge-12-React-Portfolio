import React from 'react';

function Resume() {
  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  return (
    <section>
      <a href="path_to_resume.pdf" download>Download Resume</a>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;