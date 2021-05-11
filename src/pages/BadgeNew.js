import React from "react";
import Navbar from "../components/Navbar";
import badgeNew_logo from "../Images/badge-header.svg";
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"
import "../pages/styles/BadgeNew.css";
class BadgeNew extends React.Component {
  render() {
    return (
      <section>
        <Navbar />
        <div className="badgeNew_hero">
          <img className="img-fluid" src={badgeNew_logo} alt="Logo" />
        </div>
        <section className="container">
          <section className="row">
            <div className="col-sm-12 col-md-6">
              <Badge
                firstName="Juan Manuel"
                secondName="Patiño Valencia"
                jobTitle="TI Especialist"
                account="Masync1"
                avatarURL="https://cdn.wallpapersafari.com/93/75/jb2pwy.png"
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <BadgeForm/>
            </div>
          </section>
        </section>
      </section>
    );
  }
}

export default BadgeNew;
