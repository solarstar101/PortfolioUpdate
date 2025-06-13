import React from "react";

function Resume({ data }) {
  if (!data) return null;

  // Work section
  const work = data.work.map((work) => (
    <div key={work.company}>
      <h3>{work.company}</h3>
      <p className="info">
        {work.title}
        <span>&bull;</span> <em className="date">{work.years}</em>
      </p>
      <p>{work.description}</p>
    </div>
  ));

  // Favorite Tech (Skills) section
  const skills = data.skills.map((skill, i) =>
    i <= 3 ? (
      <div key={skill.name} className="columns feature-item">
        <img
          style={{ width: "12rem", height: "12rem" }}
          className="skill"
          alt={skill.name}
          src={skill.image}
        />
        <h5>{skill.name}</h5>
      </div>
    ) : null
  );

  const skills2 = data.skills.map((skill, i) =>
    i >= 4 ? (
      <div key={skill.name} className="columns feature-item">
        <div className="skill-img-container">
          <img className="skill" alt={skill.name} src={skill.image} />
        </div>
        <h5>{skill.name}</h5>
      </div>
    ) : null
  );

  return (
    <section id="resume">
      {/* Work Experience */}
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Resume Overview</span>
          </h1>
        </div>
        <div className="nine columns main-col">{work}</div>
      </div>

      {/* Favorite Tech */}
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Favorite Tech</span>
          </h1>
        </div>

        <div id="portfoliolink" className="nine columns main-col">
          <p className="lead center">
            I love trying out new technologies regardless of language, these are
            a few I have used and enjoyed. However, I am always looking forward
            to trying out new things.
          </p>
        </div>
        <div className="row tech">
          <ul className="bgrid-quarters s-bgrid-quarters cf">{skills}</ul>
        </div>
        <div className="row tech">
          <ul className="bgrid-quarters s-bgrid-quarters cf">{skills2}</ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
