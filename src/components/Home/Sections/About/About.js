import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

import classes from './About.module.css';
import Title from '../../../Text/Title/Title';
import Paragraph from '../../../Text/Paragraph/Paragraph';

const About = () => {
  return (
    <div className={classes.About}>
      <Title text="Who I am" bold size="Regular">
        <FontAwesomeIcon icon={faUserAstronaut}/>
      </Title>
      <Paragraph>
        Hi, I am Daniil, and I am a Web Developer living in Happy Valley, Oregon. I started to create websites when I was 14, working on freelance projects for clients from Ukraine, Russia, and countries of Eastern Europe. In February 2020, I moved to the United States, which opened to me new opportunities for cooperation and experience growth.
      </Paragraph>
      <Paragraph>
        At that time I discovered Front End Development and React. Before I worked mainly with WordPress, creating blogs and corporate websites; now I could expand my skills with single page applications JavaScript frameworks, which yielded a whole new experience to development and deployment of my projects.
      </Paragraph>
    </div>
  );
};

export default About;