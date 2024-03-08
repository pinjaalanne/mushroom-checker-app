import React from "react";

const About: React.FC = () => {
  return (
 <main className="about-main">
      <h1 className="about-title">About</h1>
      <h2>Mushroom Checker App</h2>
      <h3>Description</h3>
      <p>
        This project was created as an assignment typeScript class at <a href="https://www.bc.fi">Business College Helsinki</a>, REACT23S Full Stack Web Developer program. 
      </p>
      <p>This application is a web-based tool that uses a machine learning model to classify mushrooms images uploaded by the user.</p>
      <h3>Contributors Team 4:</h3>
      <ul className="about-list">
      <li>Pinja Alanne</li>
      <li>George</li>
      <li>Mychel Garzon</li>  
      </ul>
      <h3>Tools</h3>
      <ul className="about-list">
      <li>Version control: Git and GitHub</li>
      <li>Project management: Trello</li>
      <li>Communication: Teams</li>
      <li>Machine learning technology: Teachable Machine</li>
      <li>Front-end library: React with TypeScript (ReactTs is not a standard term)</li>
      <li>Language: TypeScript</li>
      <li>Monitor of changes: Nodemon</li>
      <li>Styling: @mui/material, Tailwind</li>
      <li>CI/CD: SonarCloud - GitHub Actions</li>

        </ul>
    </main>
  );
};

export default About;
