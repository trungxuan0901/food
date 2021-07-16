import React, {useContext} from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'
import Banner from './Banner'

const Products = () => {
    const {products} = useContext(ProductsContext)
    const {dispatch} = useContext(CartContext)
    return (
        <div className="container mb-5">
            <Banner/>
            <div className="products">
            { products.map((product) => (
                <div className="product" key={product.id}>
                    <div className="product-image" alt="oop, error!">
                        <img src={product.image} alt=""/>
                    </div>
                    <div className="product-details">
                        <div>{product.title}</div>
                        <div>${product.price}</div>
                        <div>
                        {
                            Array(product.rating)
                            .fill()
                            .map((_)=>(
                                <i className="fa fa-star text-warning" />
                            ))
                        }
                        </div>
                        <div className="addCart" 
                            onClick={()=> dispatch(
                            { type: 'ADD_TO_CART', id:product.id, product})}
                        >
                            <button className="bg-dark btn-block rounded pt-1 pb-1" width="100%">
                                <i className="fas fa-cart-plus text-warning"></i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Products