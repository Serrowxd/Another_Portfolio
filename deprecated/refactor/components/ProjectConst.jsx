import React, { useState, Fragment } from "react";

const ProjectConst = (props) => {
  const [popover, updatePopover] = useState(true);

  const modalShow = () => {
    updatePopover(!popover);

    // Remove Navigation
    // let element = document.getElementById('nav');
    // element.className += ' hide_nav';
  };

  const modalHide = () => {
    updatePopover(!popover);

    // Add Navigation
    // let element = document.getElementById('nav');
    // element.classList.remove('hide_nav');
  };

  // Refactor this

  return (
    <Fragment>
      {popover ? (
        <div onClick={modalShow} className="project_div">
          <div className="project_text">
            <h1> {props.text} </h1>
            <h2> {props.text_two} </h2>
            <h2> {props.text_three} </h2>
            <h2> {props.text_four} </h2>
          </div>
          <img src={props.img} alt={props.alt} />
        </div>
      ) : (
        <div className="modal modal_show">
          <button className="exit_button" onClick={modalHide}>
            X
          </button>
          <div className="modal_row">
            <div className="modal_col">
              <img src={props.img} alt={props.alt} />{" "}
            </div>
            <div className="modal_col">
              <h1>{props.text}</h1>
              <h2>{props.modal_1}</h2>
              <p>{props.modal_2}</p>
              <p>{props.modal_3}</p>

              <div className="nested">
                <a href={props.link_hub} target="_blank" rel="noopener noreferrer">
                  <button>Github</button>
                </a>
                <a href={props.link_dep} target="_blank" rel="noopener noreferrer">
                  <button>Deployment</button>
                </a>
                <button>Project Notes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProjectConst;
