import React from 'react'
import './Product.css'
import { useStateValue } from './StatePovider'

function Product({id,title,image,price,rating}){

    const [{basket}, dispatch] = useStateValue()

    console.log('basket content', basket)

    const addToBasket = () => {
        dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating
        }
     })
    }

    return(
        <div className="product">
        <div className="product__info">
                <p>
                    {title}
                </p>
                <p className="product__price">
                        <small>€</small>
                        <strong>{price}</strong>
                </p>
                <div className="product__rating">
                        {
                            Array(rating)
                            .fill()
                            .map((_) => (
                                <p>*</p>
                            ))
                        }
                </div>
                <img src={image} className="product__image1" alt="">
                </img>
                <button onClick ={addToBasket} className="product__bouton1"> 
                    Ajouter au panier
                </button>
        </div>
        </div>

    )
}

export default Product