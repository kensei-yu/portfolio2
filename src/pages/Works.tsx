import React from 'react';

// You can create a ProjectCard component later to make this cleaner
const projects = [
  { id: 1, title: 'Project Alpha', description: 'Web development using React and Tailwind CSS.', imageUrl: '/path/to/image1.jpg' },
  { id: 2, title: 'Project Beta', description: 'A mobile-first application built with Next.js and Styled Components.', imageUrl: '/path/to/image2.jpg' },
  { id: 3, title: 'Project Gamma', description: 'A personal blog site with a custom content management system.', imageUrl: '/path/to/image3.jpg' },
];

function Works() {
  return (
    <div className="works-container">
      <h2>Works</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;