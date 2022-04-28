import React from 'react'
import './About.css'
import { Type } from './Type'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import FacebookIcon from '@material-ui/icons/Facebook'
import DescriptionIcon from '@material-ui/icons/Description'
import PublicIcon from '@material-ui/icons/Public'
import { Introduction } from './Introduction'
import { Timeline } from './Timeline'
import { Techstacks } from './Techstacks'
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Ambuj Kumar</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Hello stranger! 👋, my name is Ambuj Kumar and I am a Full Stack
          Developer, passionate about building digital products that improve
          everyday experience for people. I love to work on exciting projects
          that test what I've learnt, whilst being exposed to the power and
          potential of the ever-evolving technologies around us.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/AmbujKrAK"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:ambuj02dbz@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          {/* <a
            href="tel:+918051557097"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a> */}
          <a
            href="https://www.linkedin.com/in/ambuj-kumar02/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          {/* <a
            href="https://drive.google.com/file/d/11Jr_dcB47Li27-yCYht0Cq0BNXMQo3cJ/view?usp=sharing"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a> */}
          <a
            href="https://www.facebook.com/Ambuj.Kumar.1997"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          {/* <a
            href="https://goo.gl/maps/QyNYmATTCdkq1Af69"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <PublicIcon />
          </a> */}
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  )
}
