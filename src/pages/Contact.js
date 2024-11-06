import React from 'react';
import '../assets/css/Home.css';
import handleSubmit from '../handleemail/handleSubmit';

function Contact() {
  return (
    <div className="home">
      <section className="section section4">
        <div className="content">
          <h1>Contact</h1>
          <form id="form" onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext color" id="myemail" value="rachadev032@gmail.com" />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                Phone
              </label>
              <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext color" id="myphonenumber" value="+27 672 116 011" />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input type="text" className="form-control" id="from_name" name="from_name" required />
            </div>
            <div className="mb-3 row">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input type="email" className="form-control" id="reply_to" name="reply_to" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ fontSize: '1.3em' }}>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
