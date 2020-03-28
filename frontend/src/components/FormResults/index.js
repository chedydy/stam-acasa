import React from "react";
import "./index.scss";
import { Label, Button, Select } from "@code4ro/taskforce-fe-components";
import FormListItem from "../FormListItem";

class ForResults extends React.Component {
  constructor() {
    super();
    this.state = { toggleActiveLink: this.buttonIds.myForms };
  }

  buttonIds = {
    myForms: "myForms",
    famillyMembers: "famillyMembers"
  };

  toggleActiveLink = activeLink => {
    this.setState({
      activeLink
    });
  };

  componentDidMount() {
    this.setState({ activeLink: this.buttonIds.myForms });
  }

  render() {
    return (
      <React.Fragment>
        <div className="options">
          <button
            href="#"
            className={`formButton ${
              this.state.activeLink === this.buttonIds.myForms ? "active" : ""
            }`}
            onClick={() => this.toggleActiveLink(this.buttonIds.myForms)}
          >
            Formularele mele
          </button>
          <button
            href="#"
            className={`formButton ${
              this.state.activeLink === this.buttonIds.famillyMembers
                ? "active"
                : ""
            }`}
            onClick={() => this.toggleActiveLink(this.buttonIds.famillyMembers)}
          >
            Membrii familiei
          </button>
        </div>
        {this.state.activeLink === this.buttonIds.famillyMembers && (
          <React.Fragment>
            <Label text="Vizualizeaza pentru:" />
            <div className="position">
              <Select className="select"></Select>
              <Button className="button">Completeaza formular</Button>
            </div>
          </React.Fragment>
        )}
        <div className="content">
          <FormListItem />
        </div>
      </React.Fragment>
    );
  }
}

export default ForResults;
