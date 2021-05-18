import React from "react";
import { Link } from "react-router-dom";
import "./styles/NotFound.css"
import astronauts from "../Images/astronauts.svg"
const NotFound = () => {
    return(
        < React.Fragment>
        <section className="NotFound">
            <section className="NotFound_container row">
                <div className="NotFound_container_info col-sm-12 col-md-6">
                    {/* <img src={Logo} alt="Logo"/> */}
                    <h1 className="NotFound_container_info_title">ooppss!</h1>
                    <p className="NotFound_container_info_cotent">I think you missed your spaceship,<br/>
                    astronaut</p>
                    <Link className="NotFound_container_info_button btn" to="/badges">Go Home!</Link>
                </div>
                <div className="NotFound_container_logo col-sm-12 col-md-6 ">
                <img src={astronauts} alt="info"></img>
                </div>
            </section>
        </section>
        </React.Fragment>
    )
}

export default NotFound