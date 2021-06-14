import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState,useEffect } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link, useHistory } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import axios from 'axios'
import { db } from '../firebase'

function Payment() {

    const history = useHistory()
    const [state,dispatch] = useStateValue()
    const { user,basket} = state

    const [error,setError] = useState(null)
    const [disabled,setDisabled] = useState(true)
    const [succeeded,setSucceeded] = useState(false)
    const [processing,setProcessing] = useState("")
    const [clientSecret,setClientSecret] = useState(true)

    useEffect(() => {
        //to generate special stripe secret
        const getClientSecret = async () => {
            const response = await axios({
                method:'post',
                url:`/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret()
    }, [basket])

    console.log("secrwt is",clientSecret)

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //payment Intent = payment confirmation
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket:basket,
                    amount:paymentIntent.amount,
                    created:paymentIntent.created
                })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type:"EMPTY_BASKET"
            })
            history.replace('/orders')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Dilivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123,React Line</p>
                        <p>Nagpur,India</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivert</h3>
                    </div>
                    <div className="payment__items">
                        {/* {Products} */}
                        {basket.map(item => (
                        <CheckoutProduct key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            rating={item.rating}
                            price={item.price}/>
                        ))}
                
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* {stripe magic} */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText = {(value) => (                                       
                                        <h3>Order Total : {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Error */}
                            {error && <div>{error} </div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
