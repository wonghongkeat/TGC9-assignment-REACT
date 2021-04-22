import React from "react"
import axios from "axios"

const base_url = "https://8080-rose-boar-u6d1djgq.ws-us03.gitpod.io/"

export default class createProduct extends React.Component {

    state = {
        flavours: [],
        toppings: [],
        sugars: [],
            flavour: "",
            topping: [],
            sugar: ""

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
            <div>
                <div>
                    <h3>flavour</h3>
                    {this.state.flavours.map(f => (
                        <React.Fragment>
                            <input
                                type="radio"
                                value={f.id}
                                name="flavour"
                                onChange={this.updateFlavourField}
                            />
                            <label>{f.tea}</label>
                        </React.Fragment>
                    ))}
                </div>
                <div>
                    <h3>sugar level</h3>
                    {this.state.sugars.map(s => (
                        <React.Fragment>
                            <input
                                type="radio"
                                value={s.id}
                                name="sugar"
                                onChange={this.updateSugarField}
                            />
                            <label>{s.level}</label>
                        </React.Fragment>
                    ))}
                </div>
                <div>
                    <h3>topping</h3>
                    {this.state.toppings.map(t => (
                        <React.Fragment>
                            <input
                                type="checkbox"
                                value={t.id}
                                name="topping"
                                onChange={this.updateToppingField}
                            />
                            <label>{t.topping}</label>
                        </React.Fragment>
                    ))}
                </div>
                <button onClick={this.create}>add to cart</button>
            </div>
        )
    }

    updateFlavourField = (e) => {
        this.setState({
        flavour: e.target.value
        });
    };
     updateSugarField = (e) => {
        this.setState({
        sugar: e.target.value
        });
        
    };
    //   updateToppingField = (e) => {
    //     this.setState({
    //     topping: e.target.value
    //     });
    //     console.log(this.state.sugar,this.state.topping)
    // };

    updateToppingField = (e) => {
    let originalTopping = this.state[e.target.name];
    if (!originalTopping.includes(e.target.value)) {
        let modified = [...originalTopping, e.target.value];
        this.setState({
            [e.target.name] : modified
        })
    } else {
        let modified = originalTopping.filter((eachItem)=>{
            return eachItem !== e.target.value;
        })
        this.setState({
            [e.target.name] : modified
        })
    }
    console.log(this.state.topping)
  }
   

    create = async () =>{
        await axios.post(`${base_url}react/create`,{
            flavour: this.state.flavour,
            sugar: this.state.sugar,
            topping: this.state.topping
        }
        )
    }
}