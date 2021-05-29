import React from 'react'
import './Checkout.css'


function Checkout(){
  

    return (
        <div className="checkout">
            <div className="checkout__left">


                {  (
                        <div>
                            <h2 className='shoppingbaskettitle'>Articles dans votre panier.</h2>
                            {
            
                
                <div className="checkout__right">
                    <Subtotal></Subtotal>
                </div>

           
        
        </div>
    </div>
    )
  
}


export default Checkout 