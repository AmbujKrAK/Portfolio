import React from 'react'
import './Projects.css'
import { FaReact, FaHardHat, FaBootstrap } from 'react-icons/fa'
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
  SiBootstrap,
  SiReact,
} from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'
import { VscJson } from 'react-icons/vsc'
import { IoLogoJavascript } from 'react-icons/io'
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>

 {/* <-------------------------------------------------------------------------------------------------------------------------------------------------> */}

        {/* <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://camo.githubusercontent.com/0404fb1c220ab2f4e782fe7c88c9bf2e128406d66145482dad78fcd5218d0e8e/68747470733a2f2f696d6775722e636f6d2f706e46477a30322e6a7067"
                  alt="Tic-Tac-Toe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Tic-Tac-Toe</h2>
              <p>
              Tic-tac-toe is a two-player game played on a 3x3 grid. The game is typically played with X's and O's, with each player taking turns marking one of the empty squares in the grid. The goal is to get three of your marks in a row, either horizontally, vertically, or diagonally, before your opponent does.
              </p>
              <div>
                <SiCss3 />
                <SiHtml5 />
                <SiJavascript />
                <SiMaterialui />
                <SiReact />
                <SiNodedotjs /> */}
                {/* <SiExpress /> */}
                {/* <SiMongodb />
              </div>
              <div>
                <a
                  href="https://cloneofbewakoof.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/AmbujKrAK/React-Projects/tree/main/Day%20-1/react-tictactoe-master"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}

{/* <-------------------------------------------------------------------------------------------------------------------------------------------------> */}

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://github.com/AmbujKrAK/Bewakoof.com--Project-/raw/screenshots/Screenshot%202022-04-28%20at%205.29.31%20PM.png?raw=true"
                  alt="Bewakoof.com"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Bewakoof.com (Clone)</h2>
              <p>
                This is a clone of "Bewakoof.com". "Bewakoof.com" is a
                E-Commerce website for Clothes and Accessories. Built on CSS and
                Bootstrap for front end and LocalStorage on backend. It's a team
                project completed executed in 5 days.
              </p>
              <div>
                <SiCss3 />
                <SiHtml5 />
                <SiJavascript />
                <SiBootstrap />
                {/* <SiExpress /> */}
                {/* <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://cloneofbewakoof.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/AmbujKrAK/Bewakoof.com--Project-"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

{/* <-------------------------------------------------------------------------------------------------------------------------------------------------> */}

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/97461845/165541023-910a0eee-08aa-40bd-abcc-f16bdedb7597.png"
                  alt="Porter.in"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Porter.in (Clone)</h2>
              <p>
                This is a clone of "Porter.in". It is a website where
                customer can order packers and movers services. It's my First Backend
                Project using NodeJS, ExpressJS and MongoDB.
              </p>
              <div>
                <SiCss3 />
                <SiHtml5 />
                <SiJavascript />
                <SiBootstrap />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://porterclone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Dev2197/Porter-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

{/* <-------------------------------------------------------------------------------------------------------------------------------------------------> */}

      </div>
    </>
  )
}
