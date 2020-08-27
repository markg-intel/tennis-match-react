import React from "react";
import LoginForm from "../components/LoginForm";

class Login extends React.Component {
    state = {
        loginUsername: "",
        loginPassword: "",
        loginInstructions: "Please enter your details"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();

        let userCred = {
            username: this.state.loginUsername,
            password: this.state.loginPassword
        }

        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userCred)
        })
            .then(res=>res.json())
            .then(res => {
                console.log(res);
                if(res.statusString==="noPassOrUser") {
                    this.setState({
                        loginInstructions: "Must enter Username and Password"
                    });
                } else if(res.statusString==="wrongPassOrUser") {
                    this.setState({
                        loginInstructions: "Incorrect Username and/or Password"
                    });
                } else if(res.statusString==="loggedin") {
                    console.log("wow it worked");
                    window.location.href="/test";
                }
            })
            .catch(err => console.log(err));

    };

    render() {
        return (
            <div className="container">
                <LoginForm usernameValue={this.state.loginUsername}
                passwordValue={this.state.loginPassword}
                loginInstructions={this.state.loginInstructions}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}/>
            </div>
        );
    }
}

export default Login;