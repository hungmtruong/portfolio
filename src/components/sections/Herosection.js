import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

function Herosection() {
  

  return (
    <section
      id="home"
      className={"home d-flex align-items-center"}
    >
      <div className="container">
        <div className="intro">
          
          <img src="images/myPhoto.png" alt="Hung" className="mb-4" />
          
          <h1 className="mb-2 mt-0">Hung Truong</h1>
          <p>
            I{" "}
            <Typed
              strings={[
                "",
                " am a full stack developer.",
                " love playing with new tech.",
                " love my dogs.",
              ]}
              typeSpeed={80}
              backSpeed={40}
              attr="value"
              loop
            >
              <label value></label>
            </Typed>
          </p>

          <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a href="https://www.instagram.com/j.a.s.o.n.t/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/hung-truong-213396b6/">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/hungmtruong">
                <i className="fab fa-github"></i>
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
              Hire me
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

export default Herosection;
