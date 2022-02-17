import React from "react";
import Typewriter from 'typewriter-effect';
import { Link } from "react-scroll";

function Home() {
  

  return ( 
    <section
      id="home"
      className={"home d-flex align-items-center"}
    >
      <div className="container">
        <div className="intro">
          
          <img src="images/myPhoto.png" alt="Hung" className="mb-4" />
          
          <h1 className="mb-2 mt-0">Hung Truong</h1>
          <div>
              <Typewriter
                  onInit={(typewriter) => {
                      typewriter.typeString("I'm a full-stack developer.")
                      .changeDeleteSpeed(5)
                      .pauseFor(1000)
                      .deleteChars(26)
                      typewriter.typeString(' love playing with new tech.')
                      .pauseFor(1000)
                      .deleteChars(22)
                      typewriter.typeString('my dogs.')
                      .pauseFor(1000)
                      .start();
                  }}
                  options={{
                      loop:true
                  }}
              />
          </div>

          <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a href="https://www.instagram.com/j.a.s.o.n.t/" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/hung-truong-213396b6/" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            
          
          </ul>

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Let's talk!
            </Link>
          </div>
        </div>
        
        <div className="scroll-down">
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            duration={500}
            className="mouse-wrapper"
          >
            <span>Check Me Out!</span>
            
          </Link>
        </div>


      </div>
    </section>
  );
}

export default Home;
