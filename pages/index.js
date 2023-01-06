import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Joey Brown</h1>
                  <p className="lead">
                  {`I'm`} a Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                  {`I'm`} a fullstack developer that loves tackling challenging problems, learning new technologies, and consuming obscene amounts of coffee.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#">
                      Donwload Resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/home-banner.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Portfolio />
      {/* <Blog /> */}
      <Contact />
    </Layout>
  );
};
export default Index;
