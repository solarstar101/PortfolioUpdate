import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map((network)=> {
         
        return <li key={network.name}>
        <a href={network.url}>
        <i className={network.className}></i>
        </a>
        </li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfoliolink">Projects</a></li>
         </ul>

      </nav>
      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Hello, Welcome I Am {name}</h1>

            <h3> A versatile software engineer from {city} crafting the web with modern tech like Typescript, Next.js, Prisma, and more.
             When I'm not coding, I immerse myself in books and continuous learning. Dive in to explore more"
            
            </h3>
            <hr />
   
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
