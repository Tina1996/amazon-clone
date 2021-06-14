import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css'

function Subtotal() {

    const history = useHistory()
    const [state,dispatch] = useStateValue()
    // const totalPrice = state.basket.map((item)=>item.price) 
    console.log(JSON.stringify(getBasketTotal(state.basket)))
    return (
        <div className="subtotal">
           
            <CurrencyFormat 

                renderText={value => <>
                    <p>
                        Subtotal ({state.basket.length} items): <strong>{value}</strong> 
                    </p>  
                    <small className="subtotal__gift">
                        <input type="checkbox" />This order contains a gift
                    </small>
                </>}
 
                decimalScale={2}
                value={getBasketTotal(state.basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix = {'$'}
                />

                <button onClick={(e)=> history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal