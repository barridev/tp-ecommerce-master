import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StatePovider'

function Subtotal(){
    return (<div className="subtotal">
        <button>Valider le panier</button>
    </div>
    )
}

export default Subtotal