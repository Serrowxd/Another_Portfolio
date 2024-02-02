import React, { Fragment } from "react";

import ProjectConst from "../components/ProjectConst";

// Img Imports
import one from "../assets/projects/yas.png";
import two from "../assets/projects/lfg.png";
import three from "../assets/projects/manlaw.png";
import four from "../assets/projects/noted.png";
import five from "../assets/projects/port.png";
import six from "../assets/projects/port2.png";
import seven from "../assets/projects/rcruit.png";
import eight from "../assets/projects/wreck.png";
import nine from "../assets/projects/sinnew.png";
import ten from "../assets/projects/xuen.png";
import eleven from "../assets/projects/anotherportf.png";
import pizzatime from "../assets/projects/pizzatime.png";

// Refactor this

const Projects = () => {
  return (
    <Fragment>
      <div className="projects_container">
        <ProjectConst
          img={pizzatime}
          alt="Pizza Time"
          text="Pizza Time"
          text_two="Angular"
          text_three="SCSS"
          text_four=""
          modal_1="A website used to demonstrate mastery of Angular"
          modal_2="TypeScript/JavaScript"
          modal_3="HTML, LESS, JQuery"
          link_hub=""
          link_dep=""
        />
        <ProjectConst
          img={one}
          alt="Once Daily"
          text="Once Daily"
          text_two="HTML / JQuery"
          text_three="LESS"
          text_four=""
          modal_1="A new website, every day"
          modal_2="JavaScript"
          modal_3="HTML, LESS, JQuery"
          link_hub=""
          link_dep=""
        />
        <ProjectConst
          img={two}
          alt="IHLFG"
          text="I Hate LFG"
          text_two="React/Redux"
          text_three="Styled-Comps/LESS"
          text_four="NodeJS/Express"
          modal_1="Not a fan of group finder? We can help"
          modal_2="JavaScript"
          modal_3="React, LESS, Styled-Components, NodeJS"
          link_hub=""
          link_dep=""
        />
        <ProjectConst
          img={three}
          alt="Mandracchia Law"
          text="Mandracchia Law"
          text_two="React"
          text_three="Styled-Comps/LESS"
          text_four=""
          modal_1="Freelance Attorny Page"
          modal_2="JavaScript"
          modal_3="React, LESS, Styled-Components"
          link_hub=""
          link_dep=""
        />
        <ProjectConst
          img={four}
          alt="Noted"
          text="Noted"
          text_two="React/Redux"
          text_three="Styled-Comps/LESS"
          text_four="NodeJS"
          modal_1="Note taking, redefined"
          modal_2="JavaScript"
          modal_3="React, LESS, Styled-Components, NodeJS"
          link_hub=""
          link_dep=""
        />
        <ProjectConst
          img={five}
          alt="Old Portfolio"
          text="Portfolio (Old)"
          text_two="React"
          text_three="LESS"
          text_four=""
          modal_1="Previous Portfolio"
          modal_2="JavaScript"
          modal_3="React, LESS"
          link_hub=""
          link_dep=""
        />
        <ProjectConst
          img={six}
          alt="Unfinished Portfolio"
          text="Portfolio (Unf)"
          text_two="HTML/JQuery"
          text_three="LESS"
          text_four=""
          modal_1="First Portfolio Attempt"
          modal_2="JavaScript"
          modal_3="HTML, LESS, JQuery"
          link_hub=""
          link_dep=""
        />
        <ProjectConst
          img={seven}
          alt="Rcruit"
          text="Rcruit"
          text_two="React"
          text_three="Styled-Components"
          text_four="NodeJS"
          modal_1="Tinder for Job Searching (Capstone)"
          modal_2="JavaScript"
          modal_3="React, Styled-Components, NodeJS"
          link_hub=""
          link_dep=""
        />
        <ProjectConst
          img={eight}
          alt="Wreck Room"
          text="Wreck Room"
          text_two="HTML/JQuery"
          text_three="LESS"
          text_four=""
          modal_1="Record Label Concept Page"
          modal_2="JavaScript"
          modal_3="HTML, LESS, JQuery"
          link_hub=""
          link_dep=""
        />
        <ProjectConst
          img={nine}
          alt="SinForsaken"
          text="SinForsaken"
          text_two="HTML/JQuery"
          text_three="LESS"
          text_four=""
          modal_1="SinForsaken Guild Website"
          modal_2="JavaScript"
          modal_3="HTML, LESS, JQuery"
          link_hub=""
          link_dep=""
        />
        <ProjectConst
          img={ten}
          alt="Xuen Edits"
          text="Xuen Edits"
          text_two="HTML/JQuery"
          text_three="LESS"
          text_four=""
          modal_1="Concept Page"
          modal_2="JavaScript"
          modal_3="HTML, LESS, JQuery"
          link_hub=""
          link_dep=""
        />
        <ProjectConst
          img={eleven}
          alt="Portfolio"
          text="Portfolio"
          text_two="React"
          text_three="LESS"
          text_four=""
          modal_1="My Portfolio - You're here now!"
          modal_2="JavaScript"
          modal_3="React, LESS"
          link_hub=""
          link_dep=""
        />
      </div>
    </Fragment>
  );
};

export default Projects;
