import React from 'react';

import classes from './About.module.css';
import AboutTitle from './AboutTitle/AboutTitle';

const About = () => {
  return (
    <div className={classes.About}>
      <AboutTitle />
      <p className={classes.Paragraph}>
        Hi, I am Daniil, and I am a Web Developer living in Happy Valley, Oregon. I started to create websites when I was 14, working on freelance projects for clients from Ukraine, Russia, and countries of Eastern Europe. In February 2020, I moved to the United States, which opened to me new opportunities for cooperation and experience growth.
      </p>
      <p className={classes.Paragraph}>
        At that time I discovered Front End Development and React. Before I worked mainly with WordPress, creating blogs and corporate websites; now I could expand my skills with single page applications JavaScript frameworks, which yielded a whole new experience to development and deployment of my projects.
      </p>
    </div>
  );
};

export default About;