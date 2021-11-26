import React from 'react'
import "./Subtotal.css"
import { getBasketTotal } from './reducer';
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";

function Subtotal() {
    const [{basket },dipatch]=useStateValue()
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket.length} items) : <strong>{value}</strong></p>   
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This Order Contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
