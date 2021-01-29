import React from "react"
import axios from "axios"

export default class Topping extends React.Component{
    state = {
        toppings:{
            topping:[],
            price:[]
        } 
        
}

async componentDidMount(){
    let response = await axios.get("https://8080-c693cb85-d658-493b-9a4c-ec22f40a36b6.ws-us03.gitpod.io/reactTopping")
    this.setState({
        toppings: response.data
    })
}

renderTopping(){
    let x = []
    for (let t of this.state.toppings.topping){
        x.push(
            <React.Fragment key={t.id}>
    <h1>{t.value}</h1>
            </React.Fragment>
        )
    }
    return x
}

render(){
    return(
        <React.Fragment>
            {this.renderTopping()}
        </React.Fragment>
    )
}



}