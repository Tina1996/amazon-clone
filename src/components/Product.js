import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
    
    const [state,dispatch] = useStateValue()
    const {basket} = state
    // console.log("baslet",basket)
    const addToBasket = () => {
        //dispatch item into data layer
        // console.log("add to card")
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }

    return (
        <div className="product">
            {/* {console.log(":dsfsdf")} */}
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {   
                        Array.apply(null, Array(rating)).map(_ => <p><StarRateIcon /></p>)
                    }
                </div>
            </div>

            <img
                src={image} 
                alt="" 
            />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
