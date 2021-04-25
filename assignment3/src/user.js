import React from "react"
import axios from "axios"

const base_url = "https://8080-rose-boar-u6d1djgq.ws-us03.gitpod.io/"

export default class User extends React.Component {
    state = {
        username: "",
        password: "",
        token: "",
        flavours: [],
        toppings: [],
        sugars: [],
        product: {
            flavour: "",
            topping: "",
            sugar: ""
        },
        cart: {},
        cartProduct:{
            productFlavour: "",
            productSugar: "",
            productTopping: ""
        }
       
       

    };

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
    //create Product
    createProduct = () => {

    }
    create = () => {
        let product = this.state.product
        let copy = {...this.state.cart}
        let modified = {...copy, product}
        this.setState({
            cart: modified,
            product: {
                ...this.state.product,
                flavour: "",
                sugar: "",
                topping: []
            }
        })
        console.log(JSON.stringify(this.state.product))
    }

    updateFlavourField = (e) => {
        this.setState({
            product: {
                ...this.state.product,
                flavour: e.target.value
            }
        });
        console.log(this.state.product.flavour)
    };

    updateSugarField = (e) => {
        this.setState({
             product: {
              ...this.state.product,
           sugar: e.target.value
          }
            
        });
    };

    updateToppingField = (e) => {
        this.setState({
             product: {
              ...this.state.product,
           topping: e.target.value
          }
            
        });
    };

  


    //user login
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
        console.log(this.state.cart)
        let cartContent = JSON.stringify(this.state.cart);
        let option = {
            headers: {
                Authorization: "Bearer " + this.state.token
            }
        };
        console.log(option);
        let response = await axios.put(`${base_url}api/cart`, {
            cart_content: cartContent
        },
            option
        );
        console.log(response);
    };
    getCart = async () => {
        let response = await axios.get(`${base_url}api/cart`, {
            headers: {
                Authorization: "Bearer " + this.state.token
            }
        });
        this.setState({
            cart: JSON.stringify(response.data),
            actual_cart: response.data
        });
    };

    render() {
     
        return (
            <React.Fragment>

                <div>
                    <div>
                        <h3>flavour</h3>
                        {this.state.flavours.map(f => (
                            <React.Fragment>
                                <input
                                    type="radio"
                                    value={f.tea}
                                    name="flavour"
                                    checked={this.state.product.flavour == f.tea}
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
                                    value={s.level}
                                    name="sugar"
                                    checked={this.state.product.sugar == s.level}
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
                                    value={t.topping}
                                    name="topping"
                                    checked={this.state.product.topping.includes(t.topping.toString())}
                                    onChange={this.updateToppingField}
                                />
                                <label>{t.topping}</label>
                            </React.Fragment>
                        ))}
                    </div>
                    <button onClick={this.create}>add to cart</button>
                </div>

                {/* ++++++++++++++++++++++++++user login+++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}  

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
                        value={JSON.stringify(this.state.product)}
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
                    window.open(base_url + "/api/loginWithToken?token=" + escapedToken);
                }}
                >
                    Login With API Token
                </button>

            </React.Fragment>
        )
    }




}