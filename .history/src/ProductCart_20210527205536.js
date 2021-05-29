import React from 'react'
import './ProductCart.css'
import {useStateValue} from './StatePovider'



function ProductCart ({id,title,image,price,rating}){
// eslint-disable-next-line
    const [{basket}, dispatch] = useStateValue();
    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

   

    return(

        <div className='productcart'>
                <img className='productcart__image' src={image} alt="" />
                <div className='product__info'>
                    <p>{title}</p>
                    <p>{price}</p>


                </div>
                <div>
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>*</p>
                        ))
                    }
                </div>
                <button onClick={removeItem}> Retirer du panier</button>


        </div>
        
        
        
    )

}

export default ProductCart