import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StatePovider'

function Subtotal(){

    const [{basket}, dispatch] = useStateValue();

    return (<div className="subtotal">

        <button>Valider le panier</button>
    </div>
    )
}

export default Subtotal