import React from 'react';
import '../assets/css/Home.css';
import Image from '../images/images';

function Projects() {
  return (
    <div className="home">
      <section className="section section2">
        <div className="container">
          <h1 className="headingstyle">
            <span style={{ color: 'blueviolet' }}>&lt;</span>My projects<span style={{ color: 'blueviolet' }}>&gt;</span>
          </h1>
          <div className="project-container">
            {Image.map((imgSrc, index) => (
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
                    more info
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
