const Contact = () => {
  return (
    <section
      id="contactus"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Contact Me</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <h4>What’s your story? Get in touch</h4>
              <p>
                Always open to connect and explore new opportunities.  Feel free to reach out.
              </p>
              <ul>
                <li className="media">
                  <i className="ti-map" />
                  <span className="media-body">
                    Columbus, Ohio
                  </span>
                </li>
                <li className="media">
                  <i className="ti-email" />
                  <span className="media-body">joey.ma.brown@gmail.com</span>
                </li>
                <li className="media">
                  <a rel="noreferrer" target="_blank" href="https://github.com/joeymbrown">
                  <i class="devicon-github-original"></i>
                    <span className="media-body">
                    Personal Github
                    </span>
                  </a>
                </li>
                <li className="media">
                  <a rel="noreferrer" target="_blank" href="https://github.com/jbrownAMA">
                    <i class="devicon-github-original"></i>
                      <span className="media-body">
                      Work Github
                      </span>
                  </a>
                </li>
                {/* <li className="media">
                  <i className="ti-mobile" />
                  <span className="media-body">+044 9696 9696 3636</span>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form">
              <h4>Shoot Me a Message</h4>
              <form id="contact-form" method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="Name"
                        id="name"
                        placeholder="Name *"
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="Email"
                        id="email"
                        placeholder="Email *"
                        className="form-control"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="Subject"
                        id="subject"
                        placeholder="Subject *"
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your message *"
                        rows={5}
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        className="px-btn px-btn-theme"
                        type="button"
                        value="Send"
                      >
                        {" "}
                        send message
                      </button>
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      style={{ display: "none" }}
                    >
                      Message Sent Successfully
                    </span>
                    <span
                      id="err_message"
                      className="text-danger"
                      style={{ display: "none" }}
                    >
                      Message Sending Failed
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12">
            <div className="google-map">
              <div className="embed-responsive embed-responsive-21by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBqcWw2ziQslYWonKirddZXOJ29KlcXhas&q=Columbus+Ohio"
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
