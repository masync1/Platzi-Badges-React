import React from "react";

import "./styles/BadgesList.css"
class BadgesList extends React.Component {
    render() {
        const {badges} = this.props;
        return (
            <React.Fragment>
            { badges.map((badge) => {
                return (
                  <article key={badge.id} className="badge_list_item container">
                    <section className="badge_list_item_row row ">
                      <div className="badge_list_item_avatar col-md-6 col-12 ">
                        <img src={badge.avatarUrl} alt={badge.jobTitle}/>
                      </div>
                      <div className="badge_list_item_content col-md-6 col-12 ">
                        <h3 className="badge_list_item_content_name">
                          {badge.firstName} {badge.lastName}
                        </h3>
                        <hr/>
                        <p className="badge_list_item_content_account"> <span className="badge_list_item_content-title">Account: </span> @{badge.twitter} </p>
                        <p className="badge_list_item_content_jobtitle"> <span className="badge_list_item_content-title">Job: </span> {badge.jobTitle}</p>
                      </div>
                    </section>
                  </article>
                );
              })}
              </React.Fragment>
        )
    }
}


export default BadgesList