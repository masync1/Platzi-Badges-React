import React from "react";
import Logo from "../Images/platziconf-logo.svg"
import astronauts from "../Images/astronauts.svg"

import "./styles/Home.css"
import { Link } from "react-router-dom";
const Home = () => {
    return(
        < React.Fragment>
        <section className="Home">
            <section className="Home_container row">
                <div className="Home_container_info col-sm-12 col-md-6">
                    <img src={Logo} alt="Logo"/>
                    <h1 className="Home_container_info_title">print your badges</h1>
                    <p className="Home_container_info_cotent">The easiest way to manage your <br/>
                        conference</p>
                    <Link className="Home_container_info_button btn" to="/badges">Start Now</Link>
                </div>
                <div className="Home_container_logo col-sm-12 col-md-6 ">
                <img src={astronauts} alt="info"></img>
                </div>
            </section>
        </section>
        </React.Fragment>
    )
}

export default Home