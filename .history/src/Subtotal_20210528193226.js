import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StatePovider'

function Subtotal(){

    const getCartTotal = (basket) => 
    basket?.reduce((amount,item) => item.price + amount, 0);
// eslint-disable-next-line
    const [{basket}, dispatch] = useStateValue()

    return(<div className="subtotal">


    </div>
    )
}

export default Subtotal