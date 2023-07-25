import React from "react"
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { useDispatch } from "react-redux"
import "./header.css"
import { cartActions } from "../../store/cartSlice"

export const CartItem = ({id, cover, name, price, quantity, totalPrice,}) => {
    const dispatch = useDispatch()

    const incCartItems = () => {
        dispatch(cartActions.addToCart({id, name, price}))
    }

    const descCartItems = () => {
        dispatch(cartActions.removeFromCart(id))
    }
    
    return(
        <>
            <div className="cardList" key={id}>
                <div className="cartContent">
                    <div className="img">
                        <img src={cover} alt="" />
                        <button className="remove flexCenter">
                            <AiOutlineClose />
                        </button>
                    </div>
                    <div className="details">
                        <p>{name}</p>
                        <label htmlFor="">Unit Price ${price}</label>
                    
                        <div className="price">
                            <div className="qty flexCenter">
                                <button className="plus" onClick={incCartItems}>
                                    <AiOutlinePlus />
                                </button>
                                <button className="num">{quantity}</button>
                                <button className="minus" onClick={descCartItems}>
                                    <AiOutlineMinus />
                                </button>
                            </div>
                            <div className="priceTitle">${totalPrice}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}