import React from "react";

import img from "../assets/kevin.jpg";

const About = () => {
  return (
    <div className="background">
      <div className="about_container">
        <div className="about_text">
          <h1>- Kevin Jolley</h1>
          <p>
            I'm a programmer based out of Houston, Texas who prides myself on my analytics, optimism, and meticulous eye
            for detail. My primary focus is to become a well-rounded Software Engineer, covering both web and program
            development.
          </p>
          <p>
            The majority of my non-programming time is doing equally nerdy things - for example I am an avid Dungeons &
            Dragons player and DM of a few games myself. I'm also an avid reader with a bad habit of buying every single
            book I see that catches my eye when I walk into a book store - I've since banned myself from walking into
            them until I have a place to store all of them, as I cannot control myself; fun fact!
          </p>
          <p>
            My background in writing ties into this pretty heavily, I've been scribbling short stories ever since I
            could pick up and hold a pencil. My writing grows with every coming year, becoming more complex, the worlds
            I create becoming more vibrant and filled with life. It's something I've always been naturally good at, and
            while it may be a ways out, my dream is to one day publish one of the many stories I have to tell.
          </p>
          <p>
            I enjoy travel, seeing new places and things is always exciting for me - there's so much to learn in this
            world. These travels do help fuel my creative mind, as I'm able to use the experiences and places to help
            inspire my own worlds when playing D&D or even writing my own stories.
          </p>
          <p>
            Art and Photography are things that I've always been interested in but only recently picked up, though I'm
            not that great at them, they still manage to take up a pretty good chunk of my time on days that I feel
            inpsired.
          </p>
          <p>
            I see every day as an opportunity to push the boundaries, to go beyond what I ever thought myself capable of
            and achieve new heights that I have only ever dreamed of. There are only so many hours in the day, I do
            everything I can to make the most of them.
          </p>

          <h4>"I always get to where I'm going by walking away from where I've been"</h4>
        </div>
        <div className="about_img">
          <img src={img} alt="Kevin" />
          <h1>What I listen to</h1>
          <div className="embeded_vids">
            <iframe
              title="Music One"
              src="https://www.youtube.com/embed/foVz8TM9J68"
              frameBorder="0"
              aria-hidden="true"
            />

            <iframe
              title="Music Two"
              src="https://www.youtube.com/embed/PZtLfvoL5HQ"
              frameBorder="0"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
