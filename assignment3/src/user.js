import React from "react"
import axios from "axios"

const base_url = "https://8080-c693cb85-d658-493b-9a4c-ec22f40a36b6.ws-us03.gitpod.io/"

export default class User extends React.Component {
    state = {
        username: "",
        password: "",
        token: ""


    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input
                        type="text"
                        value={this.state.username}
                        name="username"
                        placeholder="username"
                        onChange={this.updateFormField}
                    />

                </div>
                <div>
                    <input
                        type="text"
                        value={this.state.password}
                        name="password"
                        placeholder="password"
                        onChange={this.updateFormField}
                    />

                </div>
                <div>
                    <button onClick={this.login}>Login</button>
                </div>

                <div>
                    <button onClick={this.getProfile}>Get User Profile</button>
                </div>

                <h1>Send shopping cart data</h1>
                <div>
                    <textarea
                        onChange={this.updateFormField}
                        value={this.state.cart}
                        placeholder="cart_data"
                        name="cart"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={this.state.token}
                        placeholder="User token"
                    />
                </div>
                <button onClick={this.getCart}>Get Cart</button>
                <button onClick={this.sendCart}>Send Cart</button>
                <button onClick={() => {
                        let escapedToken = encodeURIComponent(this.state.token);
                        window.open(base_url + "loginWithToken?token=" + escapedToken);
                    }}
                >
                    Login With API Token
        </button>

            </React.Fragment>
        )
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = async () => {
        let response = await axios.post(`${base_url}api/user/login`, {
            username: this.state.username,
            password: this.state.password
        })
        console.log(response.data);
        this.setState({
            token: response.data.token
        });
    }

    getProfile = async () => {

        let response = await axios.get(`${base_url}api/user/profile`, {
            headers: {
                Authorization: `Bearer ${this.state.token}`
            }
        })
        console.log(response.data)
       
    }

    sendCart = async () => {
        let cartContent = JSON.parse(this.state.cart);
        let option = {
            headers: {
                Authorization: "Bearer " + this.state.token
            }
        };
        console.log(option);
        let response = await axios.put(`${base_url}api/cart`,{ 
            cart_content: cartContent },
            option
        );
        console.log(response);
    };
    getCart = async () => {
        let response = await axios.get( `${base_url}api/cart`, {
            headers: {
                Authorization: "Bearer " + this.state.token
            }
        });
        this.setState({
            cart: JSON.stringify(response.data),
            actual_cart: response.data
        });
    };


}