import React from 'react'
import { Link } from 'react-router-dom'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {

    const [state,dispatch] = useStateValue()
    const {basket,user} = state

    return (
        <div className="checkout">
            <div className="checkout__left">
                <Link to="/">
                <img 
                    className="checkout__ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""/>
                </Link>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                     

                    {/* Basket Item */}
                    {state.basket.map(item => {
                        return <CheckoutProduct key={item.id} id={item.id} title={item.title} image={item.image} rating={item.rating} price={item.price}/>
                    })}
                
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
