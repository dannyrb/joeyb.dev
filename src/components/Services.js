import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="skills"
      data-nav-tooltip="skills"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Technical Skills</h3>
        </div>
        <div className="row">
        <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
            <i class="icon devicon-javascript-plain colored theme-bg icon-mobile" />
              {/*<i className="icon theme-bg icon-target" />*/}
              <div className="feature-content media-body">
                <h5>Javascript</h5>
                <p>
                  Javascript is the first language I studied.  Learning
                  Javascript was love at first sight, and lead to my first
                  ever project - a simple calculator.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i class=" theme-bg icon-mobile icon devicon-react-original-wordmark colored"></i>
              {/*<i className="icon theme-bg icon-mobile" />*/}
              <div className="feature-content media-body">
                <h5>React</h5>
                <p>
                  Lambda School gave me professional React experience
                  while leading small team non-profit work. React is my go-to
                  JS library.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i class="icon theme-bg devicon-nodejs-plain colored"></i>
              {/*<i className="icon theme-bg icon-desktop" />*/}
              <div className="feature-content media-body">
                <h5>Node.js</h5>
                <p>
                  My first brush with Node.js was at Lambda School.  I
                  have built several APIs leveraging Express.js and
                  consider it my primary backend framework.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/*<i className="icon theme-bg icon-mobile" />*/}
              <i class="icon theme-bg devicon-vuejs-plain-wordmark colored"></i>
              <div className="feature-content media-body">
                <h5>Vue.js</h5>
                <p>
                  Vue.js was my first exposure to a component based
                  application structure. This js framework helped
                  develop my mental model of the use of components.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i class="icon theme-bg devicon-csharp-plain colored"></i>
              {/*<i className="icon theme-bg icon-desktop" />*/}
              <div className="feature-content media-body">
                <h5>C#</h5>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/*<i className="icon theme-bg icon-target" />*/}
              <i class="icon theme-bg devicon-postgresql-plain-wordmark colored"></i>
              <div className="feature-content media-body">
                <h5>PostgreSQL</h5>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/*<i className="icon theme-bg icon-target" />*/}
              <i class="icon theme-bg devicon-html5-plain colored"></i>
              <div className="feature-content media-body">
                <h5>HTML5</h5>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/*<i className="icon theme-bg icon-target" />*/}
              <i class="icon theme-bg devicon-css3-plain-wordmark colored"></i>
              <div className="feature-content media-body">
                <h5>CSS</h5>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        {/*<Testimonials />*/}
      </div>
    </section>
  );
};
export default Services;
