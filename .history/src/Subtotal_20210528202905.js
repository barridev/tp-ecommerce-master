import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StatePovider'

function Subtotal(){

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
            />

        <button>Valider le panier</button>
    </div>
    )
}

export default Subtotal