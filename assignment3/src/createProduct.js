import React from "react"
import axios from "axios"

const base_url = "https://8080-c693cb85-d658-493b-9a4c-ec22f40a36b6.ws-us03.gitpod.io/"

export default class createProduct extends React.Component {

    state = {
        flavours:[],
        toppings:[],
        sugars:[],
       

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
                    {this.state.flavours.map(f=>(
                        <React.Fragment>
                    <input 
                    type="radio"
                    value={f.id}
                    name="flavour"
                    onChange={this.updateFormField}
                    />
                    <label>{f.tea}</label>
                    </React.Fragment>
                    ))}
                </div>
                <div>
                  <h3>sugar level</h3>
                    {this.state.sugars.map(s=>(
                    <React.Fragment>
                    <input 
                    type="radio"
                    value={s.id}
                    name="sugar"
                    onChange={this.updateFormField}
                    />
                    <label>{s.level}</label>
                    </React.Fragment>
                    ))}
                </div>
                <div>
                  <h3>topping</h3>
                    {this.state.toppings.map(t=>(
                    <React.Fragment>
                    <input 
                    type="checkbox"
                    value={t.id}
                    name="topping"
                    onChange={this.updateFormField}
                    />
                    <label>{t.topping}</label>
                    </React.Fragment>
                    ))}
                </div>
</div>
           


        )
    }

      updateFormField = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
}