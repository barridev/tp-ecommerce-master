import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from './StatePovider'
import ProductCart from './ProductCart'

function Checkout(){
  
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">


                {
                    basket.length === 0 ? (
                        <div>
                            <h2 className="checkout__title">Votre panier est vide</h2>
                            <p>Vous n'avez pas encore séléctionné d'articles.</p>
                        </div>
                    ) : (
                        <div>
                            <h2 className='shoppingbaskettitle'>Articles dans votre panier.</h2>
                        </div>

                    )
                }
                
            
                

           
        
        </div>
    </div>
    )
  
}


export default Checkout 