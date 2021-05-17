import React from "react";
import badgeNew_logo from "../Images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "../pages/styles/BadgeNew.css";
class BadgeNew extends React.Component {
  state = { 
    form: {
      firstName: ""
      ,LastName: ""
      , jobTitle: ""
      , account:""
      ,email:""
    },
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    const {firstName,LastName, jobTitle, account,email} = this.state.form;
    return (
      < React.Fragment>
        <div className="badgeNew_hero">
          <img className="img-fluid" src={badgeNew_logo} alt="Logo" />
        </div>
        <section className="container">
          <section className="row">
            <div className="col-sm-12 col-md-6">
              <Badge
                firstName={firstName}
                secondName={LastName}
                jobTitle={jobTitle}
                account={account}
                avatarURL="https://cdn.wallpapersafari.com/93/75/jb2pwy.png"
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <BadgeForm
              onChange={this.handleChange}
              formValue={this.state.form} />
            </div>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
