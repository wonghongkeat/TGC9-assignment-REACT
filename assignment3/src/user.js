import React from "react"
import axios from "axios"

const base_url = "https://8080-c693cb85-d658-493b-9a4c-ec22f40a36b6.ws-us03.gitpod.io/"

export default class User extends React.Component {
    state={
        username:"",
        password:"",


    }

    render(){
        return(
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
        </React.Fragment>
        )
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]:event.target.value 
        })
    }

    login = async ()=> {
        let response = await axios.post(`${base_url}api/user/login`,{
            username: this.state.username,
            password: this.state.password
        })
         console.log(response.data);
    }
}