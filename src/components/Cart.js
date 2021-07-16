import React, {useContext} from 'react'
import { CartContext } from '../Global/CartContext'
import StripeCheckout from "react-stripe-checkout"

const Cart = () => {
    const {shoppingCart, totalPrice, qty, dispatch} = useContext(CartContext)
    const handleToken = (token) => {}

    return (
        <div className="cart-container">
            <div className="cart-details">
                 {shoppingCart.length > 0 ? 
                    shoppingCart.map(cart => (
                        <div className="cart" key = {cart.id}>
                            <span className="cart-image"><img src={cart.image}/></span>
                            <span className="cart-product-name">{cart.title}</span>
                            <span className="text-primary">${cart.price}</span>
                            <span className="inc" onClick={() => dispatch({type: 'INC', id: cart.id, cart})}><button className="btn btn-warning"><i className="fas fa-plus text-dark"/></button></span>
                            <span className="product-quantity">{cart.qty}</span>
                            <span className="dec" onClick={() => dispatch({type: 'DEC', id: cart.id, cart})}><button className="btn btn-warning"><i className="fas fa-minus text-dark"/></button></span>
                            <span className="product-total-price">${cart.price * cart.qty}</span>
                            <span className="delete-product" onClick={() => dispatch({type: 'DELETE', id: cart.id, cart})}><button className="btn btn-danger"><i className="fas fa-trash text-light"/></button></span>
                        </div>
                    )) 
                : 'Giỏ hàng trống, bạn có muốn đặt gì không?'}
            </div>
            {shoppingCart.length > 0 ? 
            <div className="cart-summary">
                <div className="summary">
                    <h1>Giỏ hàng</h1>
                    <div className="total-items">
                        <div className="items">Total Items</div>
                        <div className="items-count">{qty}</div>
                    </div>
                    <div className="total-price-section">
                        <div className="just-title">Total Price</div>
                        <div className="items-price">${totalPrice}</div>
                    </div>
                    <div className="stripe-section text-center">
                        <StripeCheckout
                            stripeKey="pk_test_51J8hdEJogErFHKKnbK4R4qGjHgRX3c9MvFPYbX7Y9p8ig7UERcTXvmEShFrnB6IqZauxcmTrQM8lD03hrVYRbzFx00XGF4kGsv"
                            token={handleToken}
                            billingAddress
                            shippingAddress
                            amount={totalPrice * 100}
                            name="All product"
                        >
                        </StripeCheckout>
                    </div>
                </div>
            </div> : ''}
        </div>
    )
}
export default Cart
