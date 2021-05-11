import React from "react";
import './styles/BadgeForm.css'
class BadgeForm extends React.Component {
    render() {
        return (
            <section className="BadgeForm">
                <h2>New Attendant</h2>
                <form className="BadgeForm_form">
                <label for="firstName" class="BadgeForm_form_label form-label">First Name 👻</label>
                <input type="text" class="BadgeForm_form_input form-control" id="firstName" aria-describedby="firstName"/>
                <button className=" BadgeForm_form_button btn btn-primary">Save</button>
                </form>
            </section>
        )
    }
}

export default BadgeForm