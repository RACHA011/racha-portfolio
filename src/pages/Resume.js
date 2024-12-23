import React from 'react';
import '../assets/css/Home.css'; // Adjust the path as needed
import myresume from '../assets/files/myresume.pdf';

function Resume() {
  return (
    <div className="home">
      <div className="resume">
        <section className="section section2">
          <div className="content">
            <h1>My Resume</h1>
            <br />
            <iframe src={myresume} title="myresume" width="100%" height="600px"></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
