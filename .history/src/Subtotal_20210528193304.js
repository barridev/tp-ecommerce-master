import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StatePovider'

function Subtotal(){

    const getCartTotal = (basket) => 
    basket?.reduce((amount,item) => item.price + amount, 0);
// eslint-disable-next-line
    const [{basket}, dispatch] = useStateValue()

    return(<div className="subtotal">

        {/*prix*/}
            <CurrencyFormat>
                renderText={(value) => (
                    <p>
                        Subtotal({basket.length} items) : <strong>{'€{value}'}</strong>
                    </p>

                )
            }

            decimalScale={2}
            value ={getCartTotal(basket)}
            displayType = {'text'}
            thousandSeparator={true}
            prefix ={'€'}

            </CurrencyFormat>
        
        <button>Procéder au payement </button>
    </div>
    )
}

export default Subtotal