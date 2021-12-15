import React from 'react'
import './css/ProductItem.css'
import RemoveItem from './RemoveItemBtn';
import './RemoveItemBtn'

function CartItem(props) {
    const {item, products, cart, product_id} = props

    const getItem = () => {
        let product = products.find(p => p.id === product_id)
        return product
    }

    const {id, image_url, name, price} = getItem()


    return (
        <>
            <div className='products'>
                <div className="left">
                    <img src={image_url} alt="" />
                </div>
                <div className="right">
                    <div className="product-info">
                        <i class="fa fa-search"></i>
                        <i class="fa fa-user"></i>
                        <i class="fa fa-shopping-cart"></i>
                        <div className="details">
                            <h3>{name}</h3>
                            <h4>Price: ${price}</h4><br />
                            {/* <RemoveItem removeFromCart={removeItem} product={products}/> */}
                        </div>
                 
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
