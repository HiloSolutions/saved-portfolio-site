import React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import mocha from '../images/mocha.jpeg';
import chai from '../images/chai.jpeg';
import storybook from '../images/storybook.png';
import cypress from '../images/cypress.png';
import rspec from '../images/rspec.png';
import javascript from '../images/javascript.png';
import typescript from '../images/typescript.png';
import express from '../images/express.png';
import nodejs from '../images/nodejs.png';
import css from '../images/css.png';
import html from '../images/html.png';
import ruby from '../images/ruby.jpeg';
import react from '../images/react.png';
import axios from '../images/axios.png';
import jquery from '../images/jquery.png';
import sass from '../images/sass.png';
import tailwind from '../images/tailwind.png';
import python from '../images/python.jpeg';
import ejs from '../images/ejs.png';
import babel from '../images/babel.png';
import webpack from '../images/webpack.png';
import socketio from '../images/socketio.png';
import bootstrap from '../images/bootstrap.png';
import psql from '../images/psql.png';
import git from '../images/git.png';
import hubspot from '../images/hubspot.png';
import excel from '../images/excel.jpeg';
import figma from '../images/figma.png';
import zapier from '../images/zapier.png';
import notion from '../images/notion.png';
import shopify from '../images/shopify.png';
import stripe from '../images/stripe.png';
import teachable from '../images/teachable.png';

const SkillsBox = () => {
  return (
    <div className='skills-box-container'>
      <div className='skills-box'>
        <div className="carousel-heading">
          <h2>My <span>Skills</span></h2>
        </div>
        <Grid
          alignItems="center"
          container spacing={2}
        >
          <Grid item xs={3}>
            <Item className='skills-section'>Languages</Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              <div className='skill-box-container'>
                <div className='skill-box'>
                  <img className='skill-img' src={javascript} alt="skill" />
                  <p className='skill-name'>JavaScript</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={typescript} alt="skill" />
                  <p className='skill-name'>TypeScript</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={nodejs} alt="skill" />
                  <p className='skill-name'>NodeJS</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={css} alt="skill" />
                  <p className='skill-name'>CSS</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={html} alt="skill" />
                  <p className='skill-name'>HTML</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={python} alt="skill" />
                  <p className='skill-name'>Python</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={ruby} alt="skill" />
                  <p className='skill-name'>Ruby</p>
                </div>
              </div>


            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item className='skills-section'>Libraries & Frameworks</Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              <div className='skill-box-container'>
                <div className='skill-box'>
                  <img className='skill-img' src={react} alt="skill" />
                  <p className='skill-name'>ReactJS</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={axios} alt="skill" />
                  <p className='skill-name'>Axios</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={express} alt="skill" />
                  <p className='skill-name'>Express</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={jquery} alt="skill" />
                  <p className='skill-name'>jQuery</p>
                </div>
                <div className='skill-box'>
                  <img className='skill-img' src={sass} alt="skill" />
                  <p className='skill-name'>Sass</p>
                </div>
                <div className='skill-box'>
                  <img className='skill-img' src={tailwind} alt="skill" />
                  <p className='skill-name'>Tailwind</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={ejs} alt="skill" />
                  <p className='skill-name'>EJS</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={babel} alt="skill" />
                  <p className='skill-name'>Babel</p>
                </div>
                <div className='skill-box'>
                  <img className='skill-img' src={webpack} alt="skill" />
                  <p className='skill-name'>WebPack</p>
                </div>
                <div className='skill-box'>
                  <img className='skill-img' src={socketio} alt="skill" />
                  <p className='skill-name'>Socket.IO</p>
                </div>
                <div className='skill-box'>
                  <img className='skill-img' src={bootstrap} alt="skill" />
                  <p className='skill-name'>BootStrap</p>
                </div>
              </div>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item className='skills-section'>CMS & Databases</Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              <div className='skill-box-container'>
                <div className='skill-box'>
                  <img className='skill-img' src={psql} alt="skill" />
                  <p className='skill-name'>PostgreSQL</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={git} alt="skill" />
                  <p className='skill-name'>Git</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={ruby} alt="skill" />
                  <p className='skill-name'>ActiveRecord</p>
                </div>

              </div>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item className='skills-section'>Testing</Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              <div className='skill-box-container'>
                <div className='skill-box'>
                  <img className='skill-img' src={cypress} alt="skill" />
                  <p className='skill-name'>Cypress</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={storybook} alt="skill" />
                  <p className='skill-name'>StoryBook</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={mocha} alt="skill" />
                  <p className='skill-name'>Mocha</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={chai} alt="skill" />
                  <p className='skill-name'>Chai</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={rspec} alt="skill" />
                  <p className='skill-name'>RSpec</p>
                </div>

              </div>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item className='skills-section'>Other Softwares</Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              <div className='skill-box-container'>
                <div className='skill-box'>
                  <img className='skill-img' src={hubspot} alt="skill" />
                  <p className='skill-name'>HubSpot</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={excel} alt="skill" />
                  <p className='skill-name'>Excel</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={figma} alt="skill" />
                  <p className='skill-name'>Figma</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={zapier} alt="skill" />
                  <p className='skill-name'>Zapier</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={notion} alt="skill" />
                  <p className='skill-name'>Notion</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={shopify} alt="skill" />
                  <p className='skill-name'>Shopify</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={stripe} alt="skill" />
                  <p className='skill-name'>Stripe</p>
                </div>

                <div className='skill-box'>
                  <img className='skill-img' src={teachable} alt="skill" />
                  <p className='skill-name'>Teachable</p>
                </div>

              </div>
            </Item>
          </Grid>

        </Grid>

      </div>
    </div>

  )
}

export default SkillsBox