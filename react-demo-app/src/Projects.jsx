import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'My GitHub',
      description: 'Full of all my repositories and contributions to others',
      link: 'https://github.com/JustinM3RRILL',
    //   videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // 🔗 Video link
    },
    {
      title: 'Weather App',
      description: 'A simple weather app using OpenWeatherMap API and React hooks.',
    //   link: 'https://github.com/yourusername/weather-app',
    //   videoEmbed: 'https://www.youtube.com/embed/ysz5S6PUM-U' // 📺 Embed YouTube
    },
    {
      title: 'Task Tracker',
      description: 'A full-stack to-do app using the MERN stack.',
      //link: 'https://github.com/yourusername/task-tracker'
      // No video included
    }
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <ul className="project-list">
        {projectList.map((project, index) => (
          <li key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <a href={project.link} target="_blank" rel="noopener noreferrer">
              See my code here:
            </a>

            {/* 🔗 Show a video link if available */}
            {project.videoUrl && (
              <p>
                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                  📺 Watch Demo
                </a>
              </p>
            )}

            {/* 📺 Embed a video if provided */}
            {project.videoEmbed && (
              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="315"
                  src={project.videoEmbed}
                  title={`Demo video for ${project.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;