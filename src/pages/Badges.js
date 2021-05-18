import React from "react";
import BadgesList from "../components/BadgesList"
import LoadingComponent from "../components/LoadingComponent"
import api from "../api"
import "./styles/Badges.css";
import badgeNew_logo from "../Images/badge-header.svg";
import { Link } from "react-router-dom";
class Badges extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        loading: true,
        error: null,
        data: undefined
      };
  }
  componentDidMount () {
    this.fetchData();
  }

  fetchData = async() => {
      this.setState({loading: true, error: null});
      try {
        const data = await api.badges.list()
        this.setState({loading: false, data});
      } catch (error) {
        this.setState({loading: false, error});
        
      }
  }
  render() {
      if (this.state.loading === true) {
          return <LoadingComponent/>
      }
      if (this.state.error === true) {
          return  `Error: ${this.state.error}`
      }
    return (
      <React.Fragment>
        <div className="badge_hero">
          <img className="img-fluid" src={badgeNew_logo} alt="Logo" />
        </div>
        <section className="badge container">
          <Link to="badges/new" className="badge badge_button-add btn"> New Badge</Link>
        </section>
        <section className="badge_list ">
        <BadgesList badges= {this.state.data}/>
          
        </section>
      </React.Fragment>
    );
  }
}

export default Badges;
