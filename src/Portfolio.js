import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import './css/portfolio.css';

const Portfolio = () => (
  <div className="portfolio-wrapper">
    <div className="project-margin-wrapper">
      <div className="projects-header">
        <p><b>Featured Projects</b></p>
      </div>
      <div className="project-wrapper">
        <div className="project-row">       
          <div className="project-description">
            <p className="project-header">Fortnite Plus</p>
            <p className="project-text">
              A web app displaying all things (and my love for) Fortnite. 
              Search for player stats, daily shop items, and everything else the game has to offer.
              <br/> <br/>
              New content is updated automatically as the site pulls data from Fortnite's servers to display.
              The application is also mobile-friendly, and will adjust depending on whether you're using a phone,
              tablet, laptop, or desktop.
              <br/> <br/>
              (Hint: try typing "Neiliooo" in the search bar to see stats from yours truly!) 
            </p>
            <div className="languages-row">
              <span className="language-span">React</span>
              <span className="language-span">Node.js</span>
              <span className="language-span">Express</span>
              <span className="language-span">Fortnite API</span>
              <span className="language-span">Reach Router</span>
              <span className="language-span">Heroku</span>
           </div>
           <div className="icons-row">
             <a href="https://github.com/neiltengbumroong/Fortnite-Plus" target="_blank" rel="noopener noreferrer">
               <span className="project-icon-span"><FaGithub/></span>
             </a>
             <a href="https://fortnite-plus.herokuapp.com/" target="_blank" rel="noopener noreferrer">
               <span className="project-icon-span"><FiExternalLink/></span>
             </a>
           </div>
          </div>   
          <a href="https://fortnite-plus.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="image-div image-div-1"></div>
          </a>
        </div>
        <div className="project-row">       
          <a href="https://triton-exchange.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="image-div image-div-2"></div>
          </a>
          <div className="project-description">
            <p className="project-header">Triton Exchange</p>
            <p className="project-text">
            A web app designed to simplify the college student-to-student transactions of goods
            and services. Browse, post, like, and share listings with your friends and make money
            off of stuff you don't need, without the concerns of strangers and the unknown on the internet.
            <br/> <br/>
            Our work was split up as a team of 10. I was reponsible for the CRUD operations, which fed data from our 
            DynamoDB databases into the back-end endpoints, although all of us were required to understand each component
            and function within the entire project.
            </p>
            
            <div className="languages-row">
              <span className="language-span">React</span>
              <span className="language-span">Node.js</span>
              <span className="language-span">TypeScript</span>
              <span className="language-span">Firebase</span>
              <span className="language-span">DynamoDB</span>
              <span className="language-span">Netlify</span>
           </div>
           <div className="icons-row">
             <a href="https://triton-exchange.netlify.app/" target="_blank" rel="noopener noreferrer">
               <span className="project-icon-span"><FiExternalLink/></span>
             </a>
           </div>
          </div>
        </div>


        <div className="project-row">       
          <div className="project-description">
            <p className="project-header">Bromies</p>
            <p className="project-text">
            A twitter clone web application that allows anyone to post and like brotes (tweets!) 
            under any chosen name. Once you post your message, anyone in the world will be able to see it.
            <br/> <br/>
            I used a MongoDB database to store each brote's information, and wrote REST API endpoints
            in order to retrieve the information and display it on the client side. <br/> <br/>
            This was my first ever project using React and Node (or using JavaScript in general) and I 
            like to think I've improved a good amount since then.
            </p>
            <div className="languages-row">
              <span className="language-span">React</span>
              <span className="language-span">Node.js</span>
              <span className="language-span">Express</span>
              <span className="language-span">MongoDB</span>
              <span className="language-span">Mongoose</span>
              <span className="language-span">Heroku</span>
           </div>
           <div className="icons-row">
             <a href="https://github.com/neiltengbumroong/Bromies" target="_blank" rel="noopener noreferrer">
               <span className="project-icon-span"><FaGithub/></span>
             </a>
             <a href="https://bromies.herokuapp.com/" target="_blank" rel="noopener noreferrer">
               <span className="project-icon-span"><FiExternalLink/></span>
             </a>
           </div>
          </div>      
          <a href="https://bromies.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="image-div image-div-3"></div>
          </a>  
        </div>  
      </div>

      <p className="other-header">Other Projects</p>
      <div className="other-projects-row">
        <div className="other-project-box">
          <div className="other-project-name">
            <p><b>Hocus Focus</b></p>
          </div>
          <div className="other-project-description">
            <p>A study aid app in the form of a Google Chrome Extension.
              Designed with two of my best friends at the 2019 SD Hacks Hackathon.
            </p>
            <p>Block and blacklist websites, manage tasks, and record how long you've been
              studying each session!
            </p>
          </div>
          <div className="bottom-wrapper">
            <div className="other-languages-row">
              <span className="language-span">HTML</span>
              <span className="language-span">CSS</span>
              <span className="language-span">JavaScript</span>
              <span className="language-span">Chrome Storage API</span>
            </div>
            <div className="other-icons-row">
              <a href="https://github.com/bew030/hocus-focus" target="_blank" rel="noopener noreferrer">
                <span className="other-icon-span"><FaGithub/></span>
              </a>
              <a href="https://chrome.google.com/webstore/detail/hocus-focus/njpegdkojgpgnbdneopkhiciappocmmc" target="_blank" rel="noopener noreferrer">
                <span className="other-icon-span"><FiExternalLink/></span>
              </a>
            </div>  
          </div>    
        </div>

        <div className="other-project-box">
          <div className="other-project-name">
            <p><b>2048</b></p>
          </div>
          <div className="other-project-description">
            <p>A local, console rendition of the popular strategy puzzle game 2048, with added 
              functionality that allows the user to specify board dimensions. 
            </p>
            <p>Note: my *first* ever side project!</p>
          </div>
          <div className="bottom-wrapper">
            <div className="other-languages-row">
              <span className="language-span">Java</span>
              <span className="language-span">Java GUI</span>
            </div>
            <div className="other-icons-row">
              <a href="https://github.com/bew030/2048" target="_blank" rel="noopener noreferrer">
                <span className="other-icon-span"><FaGithub/></span>
              </a>
            </div>  
          </div>    
        </div>

        <div className="other-project-box">
          <div className="other-project-name">
            <p><b>Hydro Homies</b></p>
          </div>
          <div className="other-project-description">
            <p>A project layout and design idea for an iPhone app designed to help locate 
              and display water sources on a friendly user interface. 
            </p>
            <p>Finished project 
              includes logo design, user interface design for all possible controller views (no code), 
              competitor analysis and commercial advertisement.</p>
          </div>
          <div className="bottom-wrapper">
            <div className="other-languages-row">
              <span className="language-span">Design Life Cycle</span>
              <span className="language-span">UX/UI</span>
              <span className="language-span">Adobe XD</span>
            </div>
            <div className="other-icons-row">
              <a href="https://drive.google.com/drive/folders/1NGxuEZ8KVxP6D_bN3Eq3hVLewR0r1Qab?usp=sharing" target="_blank" rel="noopener noreferrer">
                <span className="other-icon-span"><FiExternalLink/></span>
              </a>
            </div>  
          </div>    
        </div>

        <div className="other-project-box">
          <div className="other-project-name">
            <p><b>Login System V2</b></p>
          </div>
          <div className="other-project-description">
            <p>A simple console application that registers users and stores information
              inside an external sqlite database. 
            </p>
            <p>Functions include password hashing and import/export functions for both CSV 
              and JSON formats.
            </p>
          </div>
          <div className="bottom-wrapper">
            <div className="other-languages-row">
              <span className="language-span">Java</span>
              <span className="language-span">SQLite</span>
            </div>
            <div className="other-icons-row">
              <a href="https://github.com/neiltengbumroong/LoginSystemV2" target="_blank" rel="noopener noreferrer">
                <span className="other-icon-span"><FaGithub/></span>
              </a>
            </div>  
          </div>    
        </div>

        <div className="other-project-box">
          <div className="other-project-name">
            <p><b>Personal Portfolio V1</b></p>
          </div>
          <div className="other-project-description">
            <p>The first iteration of my personal portfolio.</p>
            <p>Lots of good ideas here, but sadly lacking knowledge of spacing
              and good conventions for responsive design. A good benchmark for my
              growth and experience.
            </p>
          </div>
          <div className="bottom-wrapper">
            <div className="other-languages-row">
              <span className="language-span">HTML</span>
              <span className="language-span">CSS</span>
              <span className="language-span">JavaScript</span>
            </div>
            <div className="other-icons-row">
              <a href="https://github.com/neiltengbumroong/neiltengbumroong.github.io" target="_blank" rel="noopener noreferrer">
                <span className="other-icon-span"><FaGithub/></span>
              </a>
              <a href="https://neiltengbumroong.github.io" target="_blank" rel="noopener noreferrer">
                <span className="other-icon-span"><FiExternalLink/></span>
              </a>
            </div>  
          </div>    
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;