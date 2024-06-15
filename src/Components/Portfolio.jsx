/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/projects.webp";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Emoji game",
    description:
      "Created an exciting memory game with unique emoji clicks and randomized placement",
    url: "https://mohithemoji.ccbp.tech/",
    github : "https://github.com/Mohith-Adari/emoji-game-react.git",
  },
  {
    title: "Twitter Backend Management clone mini",
    description:
      "Worked on backend management using small part of duplicate twitter database",
    url: "https://github.com/Mohith-Adari/twitterClone-nodejs.git",
    github : "https://github.com/Mohith-Adari/twitterClone-nodejs.git",
  },
  {
    title: "IPL Dashboard",
    description:
      "Created a ipl dashboard for viewing the records of latest match and previous matches and their results. I Built the website completely using React",
    url: "https://github.com/Mohith-Adari/ipl-dashboard-react.git",
    github : "https://github.com/Mohith-Adari/ipl-dashboard-react.git",
  },
  {
    title: "Wikipedia Search",
    description:
      "Created a wikipedia search with a given json file using javascript",
    url: "https://mohithwiki.ccbp.tech/",
    github : "https://mohithwiki.ccbp.tech/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              
              <p className="small">{project.description}</p>

              <a href={project.github} target= "_blank" rel="noopener noreferrer" style={{margin:"10px"}}>github repository</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
