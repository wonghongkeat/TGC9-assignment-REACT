import axios from "axios"
import React from "react"

const base_url = "https://8080-c693cb85-d658-493b-9a4c-ec22f40a36b6.ws-us03.gitpod.io/"

export default class Create extends React.Component {

    state = {
        username: "",
        password: "",
        email: "",
        address: "",
        token: ""
    }


    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.username}
                    name="username"
                    placeholder="username"
                    onChange={this.updateFormField}
                />

                <input
                    type="text"
                    value={this.state.email}
                    name="email"
                    placeholder="email"
                    onChange={this.updateFormField}
                />

                <input
                    type="text"
                    value={this.state.address}
                    name="address"
                    placeholder="address"
                    onChange={this.updateFormField}
                />

                <input
                    type="text"
                    value={this.state.password}
                    name="password"
                    placeholder="password"
                    onChange={this.updateFormField}
                />

                <button onClick={this.register}>Create</button>

                {/* <div>
                    <button onClick={this.getProfile}>Get User Profile</button>
                </div> */}

            </div>


        )
    }


    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // getProfile = async () => {
    //     let response = await axios.get(`${base_url}api/user/profile`, {
    //         headers: {
    //             Authorization: `Bearer ${this.state.token}`
    //         }
    //     })
    //     console.log(response.data)
    // }

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