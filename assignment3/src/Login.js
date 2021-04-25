import axios from "axios"
import React from "react"

const base_url = "https://8080-rose-boar-u6d1djgq.ws-us03.gitpod.io/"

export default class Create extends React.Component {

    state = {
        username: "",
        password: "",
        email: "",
        address: "",
        token: ""
    }


    render() {

        const myStyle={
            textAlign: "center",
            marginTop:"50px"
        }

        return (
            <React.Fragment>
                <h1 style={myStyle}>Please create a user profile</h1>
            <div style={myStyle}>
                <input
                    type="text"
                    value={this.state.username}
                    name="username"
                    placeholder="username"
                    onChange={this.updateFormField}
                />
                </div>
                <div style={myStyle}>
                <input
                    type="text"
                    value={this.state.email}
                    name="email"
                    placeholder="email"
                    onChange={this.updateFormField}
                />
                </div>
                <div style={myStyle}>
                <input
                    type="text"
                    value={this.state.address}
                    name="address"
                    placeholder="address"
                    onChange={this.updateFormField}
                />
                </div>

                <div style={myStyle}>
                <input
                    type="text"
                    value={this.state.password}
                    name="password"
                    placeholder="password"
                    onChange={this.updateFormField}
                />
                </div>
                <div style={myStyle}>
                <button onClick={this.register}>Create</button>
                </div>
                </React.Fragment>
            


        )
    }


    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    register = async () => {
        await axios.post(`${base_url}api/user`, {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            address: this.state.address
        })
        this.setState({
            username: "",
            password: "",
            email: "",
            address: ""
        })
    }

}