import axios from "axios";
import { useState } from "react";

const Contact = () => {

  const emptyForm = {
    name: "",
    email: "",
    subject: "",
    message: ""
  }

  const contactFormMessageDefaultState = {
    message: "",
    error: false
  }

  const [formState, setFormState] = useState(emptyForm);
  const [contactFormMessageState, setContactFormMessageState] = useState(contactFormMessageDefaultState);

  function handleFormChange(e) {
    setFormState( {...formState, [e.target.name]: e.target.value} )
  }

  function validateFormInput() {
    const error = {
      message: "",
      error: false
    };

    if(formState.name.length < 3) {

      error.message = "Name can not be blank";
      error.error = true;

    } else if (formState.email.indexOf("@") === -1) {

      error.message = "Please enter a valid email.";
      error.error = true;

    } else if (formState.subject.length < 3) {

      error.message = "Subject can not be blank";
      error.error = true;

    } else if (formState.message.length < 3) {

      error.message = "Message can not be blank";
      error.error = true;

    }

    setContactFormMessageState(error);
    return error;
  }

  function sendEmail(e) {
    e.preventDefault();

    const validationError = validateFormInput();

    if(validationError.error) {
      return;
    }

    axios.post('https://custom-contact-form-api.vercel.app/api/', formState)
    .then((res) => {
      setContactFormMessageState({
        error: false,
        message: res.data.message
      });
    })
    .catch((res) => {
      setContactFormMessageState({
        message: "Error submitting contact form - please shoot me an email!",
        error: true
      });
    })

    setFormState(emptyForm);
  }

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
                  <a rel="noreferrer" target="_blank" href="https://github.com/jmbrownprospira">
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
              <form id="contact-form" method="POST" action="function()">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        id="name"
                        placeholder="Name *"
                        className="form-control"
                        type="text"
                        onChange={handleFormChange}
                        value={formState.name}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        id="email"
                        placeholder="Email *"
                        className="form-control"
                        type="email"
                        onChange={handleFormChange}
                        value={formState.email}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        id="subject"
                        placeholder="Subject *"
                        className="form-control"
                        type="text"
                        onChange={handleFormChange}
                        value={formState.subject}
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
                        onChange={handleFormChange}
                        value={formState.message}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        className="px-btn px-btn-theme"
                        type="button"
                        value="Send"
                        onClick={sendEmail}
                      >
                        {" "}
                        Send Message
                      </button>
                    </div>
                    { !contactFormMessageState.error && <span id="suce_message" className="text-success"> { contactFormMessageState.message } </span> }
                    { contactFormMessageState.error && <span id="err_message" className="text-danger" > { contactFormMessageState.message } </span> }
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
