import React from "react";
import "./styles/Badge.css";
import Gravatar from "./Gravatar"
import BannerImage from "../Images/badge-header.svg";
class Badge extends React.Component {
    render() {
      const { firstName, secondName, jobTitle, account,email } = this.props;
    return (
      <section className="Badge_container">
        <section className="Badge_banner">
          <img src={BannerImage} alt="Banner de platzi conf" />
        </section>
        <section className="Badge_profile">
          <div className="Badge_profile_photo">
          <Gravatar className="Badge__avatar" email={email} />
          </div>
          <div className="Badge_profile_about">
            <h1>
              {firstName} <br /> {secondName} <br />
            </h1>
          </div>
        </section>
        <section className="Badge_job">
          <p className="Badge_job_tittle">{jobTitle}</p>
          <p className="Badge_job_account">@{account}</p>
        </section>
        <section className="Badge_footer">
          <p>#PlatziConf</p>
        </section>
      </section>
    );
  }
}

export default Badge;
