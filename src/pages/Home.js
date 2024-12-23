import React from 'react';
import '../assets/css/Home.scss';
import '../assets/css/Home.css';
import image from '../assets/images/bg.jpg';
import Image from '../images/images';
import handleSubmit from '../handleemail/handleSubmit';

function Home() {
  return (
    <div className="home">
      <section className="section section1">
        <div className="content insidesection1">
          <h1>
            Hello I&#39;m <br />
          </h1>
          <h1>
            {' '}
            <b>Ratshalingwa </b>
          </h1>
          <h1>
            <b>Adivhaho</b>,
          </h1>

          <p> a dedicated full-stack developer with a strong focus on backend development.</p>
          <br />
          <span className="span-button">
            <a href="/contact" className="span-button1">
              Get in touch
            </a>
            &emsp;
            <a href="/resume" className="span-button2">
              My Story
            </a>
          </span>
        </div>
        <div className="content insidesection2 blurry-picture">
          <img src={image} alt="background-photo" />
        </div>
      </section>
      <section className="section section2">
        <div className="container">
          <h1 className="headingstyle">
            <span style={{ color: 'blueviolet' }}>&lt;</span>My latest projects<span style={{ color: 'blueviolet' }}>&gt;</span>
          </h1>
          <div className="project-container">
            {Image.slice(0, 4).map((imgSrc, index) => (
              <div key={index} className="project-item">
                <img src={imgSrc.photo} alt={`project-${index}`} className="project-image" />
                <div className="image__overlay">
                  <div className="image__title">{imgSrc.name}</div>
                  <p className="image__description">{imgSrc.description}</p>
                  <a
                    style={{ textDecoration: 'none', color: 'blue', fontStyle: 'italic' }}
                    href={imgSrc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view website
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div style={{ backgroundColor: '#060606' }}>
            <a href="/projects" className="span-button1">
              view all
            </a>
          </div>
        </div>
      </section>
      <section className="section section3">
        <div className="content">
          <h1 className="headingstyle">
            <span style={{ color: 'blueviolet' }}>&lt;</span>About Me<span style={{ color: 'blueviolet' }}>&gt;</span>
          </h1>
          <div>
            <div className="frame">
              <div className="center">
                <div className="ball"></div>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`blubb-${i + 1}`}></div>
                ))}
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`sparkle-${i + 1}`}></div>
                ))}
              </div>
            </div>

            <div className="content container-section">
              {/* <div className="content container-section" style={{ marginLeft: '420px' }}> */}
              <p>
                Hello! I&apos;m Racha, a third-year Computer Science student specializing in back-end web development. I completed a
                comprehensive Full Stack course on Udemy, covering Java, JSP, Hibernate, Spring, RESTful API, Spring Boot, JavaScript, and
                React. I enjoy building efficient and user-friendly applications and continuously seek opportunities to grow in my field.
                Feel free to check out my{' '}
                <a
                  style={{ color: 'blue', textDecoration: 'none' }}
                  href="https://github.com/RACHA011/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{' '}
                for some of my projects and connect with me on{' '}
                <a
                  style={{ color: 'blue', textDecoration: 'none' }}
                  href="https://www.linkedin.com/in/adivhaho-ratshalingwa-52060629a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{' '}
                to stay updated with my professional journey.
              </p>
            </div>
            <a href="/resume" className="span-button1">
              view my resume
            </a>
          </div>
        </div>
      </section>

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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
