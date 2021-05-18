import React from "react";
import badgeNew_logo from "../Images/badge-header.svg";
import Badge from "../components/Badge";
import api from "../api"
import BadgeForm from "../components/BadgeForm";
import "../pages/styles/BadgeEdit.css";
import Spinner from "../components/Spinner";

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      LastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.id);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.update(this.props.match.params.id, this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  
  render() {
    const {firstName,LastName, jobTitle, account,email} = this.state.form;
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      < React.Fragment>
        <div className="badgeEdit_hero">
          <img className="img-fluid" src={badgeNew_logo} alt="Logo" />
        </div>
        <section className="container">
          <section className="row">
            <div className="col-sm-12 col-md-6">
                
              <Badge
                firstName={firstName || 'FIRSTNAME'}  
                secondName={LastName || 'LastName'}
                jobTitle={jobTitle || 'JOBTITLE'}
                account={account || 'ACCOUNT'}
                email={email || 'Account@account.com'}
                avatarURL="https://cdn.wallpapersafari.com/93/75/jb2pwy.png"
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <BadgeForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              formValue={this.state.form} />
            </div>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
