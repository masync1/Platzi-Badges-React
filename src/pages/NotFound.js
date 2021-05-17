import React from "react";
import { Link } from "react-router-dom";
import "./styles/NotFound.css"
import astronauts from "../Images/astronauts.svg"
const NotFound = () => {
    return(
        < React.Fragment>
        <section className="Home">
            <section className="Home_container row">
                <div className="Home_container_info col-sm-12 col-md-6">
                    {/* <img src={Logo} alt="Logo"/> */}
                    <h1 className="Home_container_info_title">ooppss!</h1>
                    <p className="Home_container_info_cotent">I think you missed your spaceship, astronaut<br/>
                        conference</p>
                    <Link className="Home_container_info_button btn" to="/badges">Go Home!</Link>
                </div>
                <div className="Home_container_logo col-sm-12 col-md-6 ">
                <img src={astronauts} alt="info"></img>
                </div>
            </section>
        </section>
        </React.Fragment>
    )
}

export default NotFound