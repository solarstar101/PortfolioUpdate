import React from "react";

function Portfolio({ data }) {
  if (!data) return null;

  const projects = data.projects.map((project) => {
    const projectImage = "images/portfolio/" + project.image;
    return (
      <div key={project.title} className="portfolio-item">
        <div className="item-wrap">
          <a href={project.url} title={project.title}>
            <img
              alt={project.title}
              src={projectImage}
              className="project-image"
            />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{project.title}</h5>
                <p>{project.category}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="portfolio-grid">
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
