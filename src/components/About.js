const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Gamer, Rock Climber, and Coffee Enthusiast{" "}
                </h3>
                <p>
                  
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">1k+</span>
                      <div className="media-body">
                        Course <br />
                        Hours.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">2+</span>
                      <div className="media-body">
                        Years <br />
                        Experience.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contactus">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#experience">
                    <span>Experience</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2010-2012</span>
                <h6>Graphic Designer</h6>
                <p>International Design Institute</p>
              </li>
              <li>
                <span>2010-2012</span>
                <h6>Web Development</h6>
                <p>International Design Institute</p>
              </li>
              <li>
                <span>2010-2012</span>
                <h6>Search Engine Optimization</h6>
                <p>International Design Institute</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a Freelancer Front-end Developer with over 3 years of
                experience. I code and create web elements for amazing people
                around the world. I like work with new people. New people new
                Experiences.
              </p>
              <div className="skill-lt">
                <h6>HTML5</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              { //skill }
              <div className="skill-lt">
                <h6>WordPress</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "72%" }}>
                    <span data-toggle="tooltip" title="72%" />
                  </div>
                </div>
              </div>
              { //skill }
              <div className="skill-lt">
                <h6>Magento</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "86%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              { //skill }
              <div className="skill-lt">
                <h6>UI/UX</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              { //skill }
            </div>
          </div>
        </div>
        */}
        <div className="separated" />
        <div className="title">
          <h3>Experience</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/ama_logo_spotlight.png" title="AMA Logo" alt="AMA Logo" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Engineer</h6>
                  <label>American Motorcyclist Association | Hybrid | Feb 2022 - Present {`(1 year)`}</label>
                  <div className="rb-time">Full Time</div>
                  <ul>
                    <li>Sole maintainer of 40 applications that spanned 6 domains</li>
                    <li>Created software simplifying registration for 800+ vendors and 40,000+ event attendees</li>
                    <li>Modernized existing web applications to improve the mobile experience and performance for users</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/bloom_tech_logo.png" title="Bloom Technical Institute Logo" alt="Bloom Technical Institute Logo" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Engineering Student</h6>
                  <label>Lambda School {`(now Bloom Institute of Technology)`} | Remote | Jun 2021 - Nov 2021 {`(6 months)`}</label>
                  <div className="rb-time">Full Time</div>
                  <ul>
                    <li>Lead a team of developers building software for a non-profit organization</li>
                    <li>Orchestrated team standups, 1 on 1 unblocking sessions, and pair programming</li>
                    <li>Met with stakeholder to provide project updates and generate future requirements based on feedback</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/bkl_logo.png" title="Big Kitty Labs Logo" alt="Big Kitty Labs Logo" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Engineering Intern</h6>
                  <label>Big Kitty Labs | Remote | Jun 2019 - Dec 2019 {`(6 months)`}</label>
                  <div className="rb-time">Full Time</div>
                  <ul>
                    <li>Interfaced with multiple stakeholders directly throughout development lifecycle of various applications</li>
                    <li>Ownership of 3 Ruby on Rails client projects, tasked with stakeholder 1:1s, and management of development task creation</li>
                    <li>Gained experience with new technologies and cloud infrastructure with minimal support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
