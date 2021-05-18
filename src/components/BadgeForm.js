import React from "react";
import "./styles/BadgeForm.css";
class BadgeForm extends React.Component {

  handleClick = (e) => {
    console.log("button was clicked");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
      const {onChange} = this.props;
      const {firstName,LastName, jobTitle, account,email} = this.props.formValue;
    return (
      <section className="BadgeForm">
        <h2>Attendants</h2>
        <form onSubmit={this.props.onSubmit} className="BadgeForm_form">
          <label
            htmlFor="firstName"
            className="BadgeForm_form_label form-label"
          >
            First Name
          </label>
          <input
            name="firstName"
            value = {firstName}
            onChange={onChange}
            type="text"
            className="BadgeForm_form_input form-control"
            id="firstName"
            aria-describedby="firstName"
          />
          <label htmlFor="LastName" className="BadgeForm_form_label form-label">
            Last Name
          </label>
          <input
            name="LastName"
            value = {LastName}
            onChange={onChange}
            type="text"
            className="BadgeForm_form_input form-control"
            id="LastName"
            aria-describedby="LastName"
            
          />
          <hr />
          <label htmlFor="email" className="BadgeForm_form_label form-label">
            Email
          </label>
          <input
            name="email"
            value = {email}
            onChange={onChange}
            type="email"
            className="BadgeForm_form_input form-control"
            id="email"
            aria-describedby="email"
          />
          <label htmlFor="jobTitle" className="BadgeForm_form_label form-label">
            Job Tittle
          </label>
          <input
            name="jobTitle"
            value = {jobTitle}
            onChange={onChange}
            type="text"
            className="BadgeForm_form_input form-control"
            id="jobTitle"
            aria-describedby="jobTitle"
          />
          <label htmlFor="account" className="BadgeForm_form_label form-label">
            Twitter
          </label>
          <input
            name="account"
            value = {account}
            onChange={onChange}
            type="text"
            className="BadgeForm_form_input form-control"
            id="account"
            aria-describedby="account"
          />
          <button
            className=" BadgeForm_form_button btn"
            onClick={this.handleClick}
          >
            Save
          </button>
        </form>
      </section>
    );
  }
}

export default BadgeForm;
