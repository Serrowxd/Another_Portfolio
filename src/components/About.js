import React, { Fragment } from 'react';

import img from '../assets/kevin.jpg';

const About = () => {
  return (
    <Fragment>
      <div className="background">
        <div className="about_container">
          <div className="about_text">
            <h1>- Kevin Jolley</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At
              risus viverra adipiscing at in tellus integer feugiat. Purus
              gravida quis blandit turpis cursus in hac. Condimentum mattis
              pellentesque id nibh tortor id aliquet lectus proin. Et
              sollicitudin ac orci phasellus egestas tellus rutrum tellus.
              Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.
              Enim neque volutpat ac tincidunt vitae semper quis lectus nulla.
              Id diam maecenas ultricies mi. Egestas tellus rutrum tellus
              pellentesque eu tincidunt tortor. Nunc faucibus a pellentesque sit
              amet porttitor eget dolor morbi. Purus ut faucibus pulvinar
              elementum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At
              risus viverra adipiscing at in tellus integer feugiat. Purus
              gravida quis blandit turpis cursus in hac. Condimentum mattis
              pellentesque id nibh tortor id aliquet lectus proin. Et
              sollicitudin ac orci phasellus egestas tellus rutrum tellus.
              Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.
              Enim neque volutpat ac tincidunt vitae semper quis lectus nulla.
              Id diam maecenas ultricies mi. Egestas tellus rutrum tellus
              pellentesque eu tincidunt tortor. Nunc faucibus a pellentesque sit
              amet porttitor eget dolor morbi. Purus ut faucibus pulvinar
              elementum.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At
              risus viverra adipiscing at in tellus integer feugiat. Purus
              gravida quis blandit turpis cursus in hac. Condimentum mattis
              pellentesque id nibh tortor id aliquet lectus proin. Et
              sollicitudin ac orci phasellus egestas tellus rutrum tellus.
              Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.
              Enim neque volutpat ac tincidunt vitae semper quis lectus nulla.
              Id diam maecenas ultricies mi. Egestas tellus rutrum tellus
              pellentesque eu tincidunt tortor. Nunc faucibus a pellentesque sit
              amet porttitor eget dolor morbi. Purus ut faucibus pulvinar
              elementum.
            </p>

            <h4>
              "I always get to where I'm going by walking away from where I've
              been"
            </h4>
          </div>
          <div className="about_img">
            <img src={img} alt="Kevin" />
            <h1>What I listen to</h1>
            <div className="embeded_vids">
              <iframe
                src="https://www.youtube.com/embed/foVz8TM9J68"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />

              <iframe
                src="https://www.youtube.com/embed/PZtLfvoL5HQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
