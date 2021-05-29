import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StatePovider'

function Subtotal(){

    const getCartTotal = (basket) =>
    basket?.reduce()
    
    const [{basket}, dispatch] = useStateValue();

    return (<div className="subtotal">
        {/* price */}
            <CurrencyFormat
                renderText={(value) => (
                    <p>
                        Subtotal({basket.length} items) : <strong>{`${value}`}</strong>
                    </p>
                    )
                }
                decimalScale = {2}
                value={getCartTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

        <button>Valider le panier</button>
    </div>
    )
}

export default Subtotal