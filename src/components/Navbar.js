import React from 'react';
import { Link } from 'react-router-dom';
import navbar_brand_logo from '../Images/logo.svg'
import './styles/Navbar.css';
class Navbar extends React.Component {
    render() {
        return (
            <section className="navbar">
                <div className="navbar_container container">
                    <Link className="navbar_brand" to="/">
                        <img className="navbar_brand_logo" src={navbar_brand_logo} alt="Conference Logo"></img>
                        <span className="navbar_brand_tittle"> Platzi</span>
                        <span className="navbar_brand_subtitle">Conf</span>
                    </Link>
                </div>
            </section>
        )
    }

}
export default Navbar;