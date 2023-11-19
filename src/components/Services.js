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
                  React is my go-to frontend library. I am in my happy
                  place when using it.  I continue to hone my react skills
                  and am currently focusing on component composition. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i class="icon theme-bg devicon-laravel-plain colored"></i>
              {/*<i className="icon theme-bg icon-desktop" />*/}
              <div className="feature-content media-body">
                <h5>Laravel</h5>
                <p>
                  Laravel has been an absolute breeze to work with.
                  I'm working with it currently and feel the documentation
                  is among the best I've ever seen.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/*<i className="icon theme-bg icon-mobile" />*/}
              <i class="icon theme-bg devicon-php-plain colored"></i>
              <div className="feature-content media-body">
                <h5>PHP</h5>
                <p>
                  I use PHP daily.  Coming from a mixed background of
                  Javascript and C#, PHP concepts were not alien.  It
                  has certainly strengthed my understand of OOP.
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
                  I picked up C# at the AMA. C# proved to be my first
                  run-in with a strongly typed language. C# exposed me
                  to the benefits of errors being prevented at runtime.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/*<i className="icon theme-bg icon-target" />*/}
              <i class="icon theme-bg devicon-vuejs-plain-wordmark colored"></i>
              <div className="feature-content media-body">
                <h5>Vue.js</h5>
                <p>
                  Vue.js was my first exposure to a component based
                  application structure. This js framework helped
                  develop my mental model of components within an application.
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
                  HTML is to blame for my first ever {`"webpage"`} that will
                  forever mirror the internet of the {`90's`}.  Lambda School
                  guided me through semantic HTML and {`it's`} importance.
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
                  Playing <a href="https://flexboxfroggy.com/">Flexbox Froggy</a> and <a href="https://mastery.games/post/flexboxzombies2/">Flexbox Zombies</a> helped
                  me better understand the importance of semantic and
                  well laid out HTML.
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
