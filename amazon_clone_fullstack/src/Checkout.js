import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket, user}, dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout_Ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
                <div>
                    <h3>Hello,{user?.email}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <img className="checkout_Ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"/>
                <Subtotal/>
            </div>
        </div>
    )
}
export default Checkout
