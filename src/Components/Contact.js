import React from "react";

function Contact({ data }) {
  if (!data) return null;

  const name = data.name;
  const city = data.address.city;
  const state = data.address.state;
  const zip = data.address.zip;
  const message = data.contactmessage;

  // Placeholder for form handlers
  const handleChange = () => {};

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>
        <div className="ten columns">
          <p className="lead">{message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form
            action="submit"
            method="post"
            id="contactForm"
            name="contactForm"
          >
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="contactEmail">
                  Email<span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="10"
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>
              <div>
                <button className="submit">Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>
          <div id="message-warning"> Error</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>My Information</h4>
            <p className="address">
              {name}
              <br />
              {city}, {state} {zip}
              <br />
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
