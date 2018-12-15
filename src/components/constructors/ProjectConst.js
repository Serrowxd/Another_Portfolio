import React, { Component, Fragment } from 'react';

class ProjectConst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popover: true,
    };
  }

  modalShow = () => {
    let state = this.state.popover;
    this.setState({ popover: !state });

    // Remove Navigation
    // let element = document.getElementById('nav');
    // element.className += ' hide_nav';
  };

  modalHide = () => {
    let state = this.state.popover;
    this.setState({ popover: !state });

    // Add Navigation
    // let element = document.getElementById('nav');
    // element.classList.remove('hide_nav');
  };

  render() {
    return (
      <Fragment>
        {this.state.popover ? (
          <div onClick={this.modalShow} className="project_div">
            <div className="project_text">
              <h1> {this.props.text} </h1>
              <h2> {this.props.text_two} </h2>
              <h2> {this.props.text_three} </h2>
              <h2> {this.props.text_four} </h2>
            </div>
            <img src={this.props.img} alt={this.props.alt} />
          </div>
        ) : (
          <div className="modal modal_show">
            <button className="exit_button" onClick={this.modalHide}>
              X
            </button>
            <div className="modal_row">
              <div className="modal_col">
                <img src={this.props.img} alt={this.props.alt} />
              </div>
              <div className="modal_col">
                <h1>{this.props.text}</h1>
                <h2>{this.props.modal_1}</h2>
                <p>{this.props.modal_2}</p>
                <p>{this.props.modal_3}</p>

                <div className="nested">
                  <a
                    href={this.props.link_hub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Github</button>
                  </a>
                  <a
                    href={this.props.link_dep}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Deployment</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default ProjectConst;
