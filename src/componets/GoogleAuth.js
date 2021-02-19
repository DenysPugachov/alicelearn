import React, { Component } from "react";


export default class GoogleAuth extends Component {

  state = {
    isSingedIn: null,
  }

  componentDidMount() {
    //load additional code for googleOAuth2 lib;
    window.gapi.load("client:auth2", () => {
      //initialize authentication client with my clientId
      window.gapi.client.init({
        clientId: "1053885146648-kjldknnmt63b1phck3biij2db258nvhk.apps.googleusercontent.com",
        //ask users scop of email;
        scope: "email",
      }).then(() => {

        this.auth = window.gapi.auth2.getAuthInstance();

        this.setState({ isSignedIn: this.auth.isSignedIn.get() });

        //That takes a boolean value. listen() passes true to this function when the user signs in, and false when the user signs out.
        //https://developers.google.com/identity/sign-in/web/reference#googleauthissignedinlistenlistener
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    })
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthBtn() {
    switch (this.state.isSignedIn) {
      case null:
        return <div>I don't now Auth status</div>;

      case true:
        return <button
          className="btn btn-danger"
          onClick={ this.onSignOutClick }
        >
          <i className="google icon" />
          Sign Out
          </button>;

      case false:
        return <button
          className="btn btn-success"
          onClick={ this.onSignInClick }
        >
          <i className="google icon" />
        Sign In with Google
        </button>;

      default:
    };
  }

  render() {
    return <div>{ this.renderAuthBtn() }</div>
  };
}
