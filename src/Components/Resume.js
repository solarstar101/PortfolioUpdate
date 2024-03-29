import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education && this.props.data.education.map(education => {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function(work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });

      var skills = this.props.data.skills.map((skill, i) => {
        return i <= 3 ? (
          <div key={skill.name} className="columns feature-item">
            <img  style={{width: '12rem' , height:'12rem'}} class="skill" alt={skill.name} src={skill.image} />
            <h5>{skill.name}</h5>
          </div>
        ) : null;
      });

      var skills2 = this.props.data.skills.map((skill, i) => {
        return i >= 4 ? (
          <div key={skill.name} className="columns feature-item">
            <img style={{width: '12rem' , height:'12rem'}} class="skill" alt={skill.name} src={skill.image} />
            <h5>{skill.name}</h5>
          </div>
        ) : null;
      });
    }

    return (
      <section id="resume">
        {/* <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div> */}

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Resume Overview</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div class="row skill">
          <div class="three columns header-col">
            <h1>
              <span>Favorite Tech</span>
            </h1>
          </div>

          <div id="portfoliolink" class="nine columns main-col">
            <p class="lead center">
             I love trying out new technologies regardless of language, these are a few i have used and enjoyed however i am always looking forward to trying out new things
            </p>
          </div>
          <div className="row tech">
            <ul class="bgrid-quarters s-bgrid-quarters cf">{skills}</ul>
          </div>
          <div className="row tech">
            <ul class="bgrid-quarters s-bgrid-quarters cf">{skills2}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
