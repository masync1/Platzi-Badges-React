import React from "react";
import {Link} from "react-router-dom"
import Gravatar from "./Gravatar"
import "./styles/BadgesList.css"
class BadgesList extends React.Component {
    render() {
        const {badges} = this.props;
        if (badges.length === 0) {
            return (
              <div className="container">
                <h3 className="badge_list_item_content_name">No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                  Create new badge
                </Link>
              </div>
        )}
        return (

            <React.Fragment>
            { badges.map((badge) => {
                return (
                  <article key={badge.id} className="badge_list_item container">
                      <Link className="text-reset text-decoration-none" to={`/Badges/${badge.id}/edit`}>
                    <section className="badge_list_item_row row ">
                      <div className="badge_list_item_avatar col-md-6 col-12 ">
                        <Gravatar email={badge.email}/>
                      </div>
                      <div className="badge_list_item_content col-md-6 col-12 ">
                        <h3 className="badge_list_item_content_name">
                          {badge.firstName} {badge.LastName}
                        </h3>
                        <hr/>
                        <p className="badge_list_item_content_account"> <span className="badge_list_item_content-title">Account: </span> @{badge.account} </p>
                        <p className="badge_list_item_content_jobtitle"> <span className="badge_list_item_content-title">Job: </span> {badge.jobTitle}</p>
                      </div>
                    </section>
                    </Link>
                  </article>
                );
              })}
              </React.Fragment>
        )
    }
}


export default BadgesList