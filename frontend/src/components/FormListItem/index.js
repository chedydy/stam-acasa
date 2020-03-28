import React from "react";
import "./index.scss";

class FormListItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <span className="date">12.03.2020</span>
        <div className="rectangle">
          <div>
            <p className="description">
              {" "}
              Rezultat formular - ești în siguranță dacă rămâi în casă{" "}
            </p>
          </div>
          <div className="rectangle-decorator"></div>
          <svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-1.2489e-07 17.1429L7.5 10L-7.49338e-07 2.85714L1.5 -6.55671e-08L12 10L1.5 20L-1.2489e-07 17.1429Z"
              fill="white"
            />
          </svg>
        </div>
      </React.Fragment>
    );
  }
}

export default FormListItem;
