import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map((education) => {
        return <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span>
        <em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>





    <div class="row skill">
    <div class="three columns header-col">
    <h1><span>Favorite Tech</span></h1>
    </div>

    <div>
    <div class="nine columns main-col">
    <p class="lead center">I'm a tinkerer and am always interested in playing around with new technologies but these are the ones that have really won me over</p>
    </div>
    <ul class="bgrid-quarters s-bgrid-thirds cf">
    <div class="columns feature-item">
    <img class="skill" alt="Git" src="images/tech/git.jpg" /> 
    <h5>Git</h5>
    <p>I use Git for all of my projects so far. I have used Git for version control in small teams and have toyed around with contributing to Open Source Projects.</p>
    </div>
    
    <div class="columns feature-item">
    <img class="skill" alt="Java" src="images/tech/javascript.png"/> 
    <h5>Javascript</h5>
    <p>Javascript was my first programming language that I started using in college years ago. It is by far the language I am most familiar with in terms of data-structure and algorithm programming.</p>
    </div>
    
    <div class="columns feature-item">
    <img class="skill" alt="React Js" src="images/tech/react.jpg" />
  
    <h5>React Js</h5>
    <p>I am in love with React It has grown on me and quickly became my go to js library this site was made with React along with several of my projects</p>
    </div>


    <div class="columns feature-item">
    <img class="skill" alt="Meteor JS" src="images/tech/meteor.jpg"/>
    <h5>Meteor JS</h5>
    <p>I enjoy using Meteor for it's ease of use and simplicity, i feel it is a perfect way to get a web app up and running quickly and efficiently for a client. before going into production! I have used meteor to help create web applications for clients at find-marketing  </p>
    </div>
    <div class="columns feature-item">
    <img class="skill" alt="Node JS" src="images/tech/node.jpg"/>
    <h5>Node JS</h5>
    <p>Node JS is my server-side scripting language of choice. The bulk of my experience with it has been in conjunction with MeteorJS-based projects</p>
    </div>
    <div class="columns feature-item"> <img class="skill" alt="Bootstrap 4" src="images/tech/bootstrap.jpg"/>
    <h5>Bootstrap</h5>
    <p>I use Bootstrap more often than not when designing the layout for my sites. It is the framework I am most familiar with and can therefore design more quickly than with others.</p>
    </div>
    <div class="columns feature-item"> <img class="skill" alt="MongoDB" src="images/tech/mongo.jpg"/>
    <h5>MongoDB</h5>
    <p>I have used many different database systems and am better educated and experienced with Relational Databases. However, for many applications, the ease of use of MongoDB better suits my needs and it is much more enjoyable to work with</p>
    </div>
    <div class="columns feature-item">
    <img class="skill" alt="Netlify" src="images/tech/netlify.png"/>
    <h5>Netlify</h5>
    <p>I use Netlify as my hosting platform for most of my projects because so far they are all unpaid and their free tier is convenient. I also appreciate its integration with Github for such simple deployment.</p>
    </div>
    </ul>
    </div>
    
    </div>
      </section>
    );
  }
}

export default Resume;
