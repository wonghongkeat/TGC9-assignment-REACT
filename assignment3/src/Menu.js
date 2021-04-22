import React from "react"
import axios from "axios"

const base_url = "https://8080-rose-boar-u6d1djgq.ws-us03.gitpod.io/"

export default class Topping extends React.Component {
    state = {
        toppings: [],
        flavours: [],
        sugars: []


    }

    async componentDidMount() {
        let responseTopping = await axios.get(`${base_url}reactTopping`)
        let responseFlavour = await axios.get(`${base_url}reactFlavours`)
        let responseSugar = await axios.get(`${base_url}reactSugar`)
        this.setState({
            toppings: responseTopping.data,
            flavours: responseFlavour.data,
            sugars: responseSugar.data
        })
    }


    render() {
        return (
            <React.Fragment>

                <h1>toppings available:</h1>
                {this.state.toppings.map(t => (
                    <div>
                        <p>{t.topping} - ${t.price / 100}</p>
                    </div>
                ))}

                <h1>flavours available</h1>
                {this.state.flavours.map(f => (
                    <div>
                        <p>{f.tea} - ${f.price / 100}</p>
                    </div>
                ))}

                <h1>Sugar level</h1>
                {this.state.sugars.map(s => (
                    <div>
                        <p>{s.level}%</p>
                    </div>
                ))}

            </React.Fragment>
        )
    }



}