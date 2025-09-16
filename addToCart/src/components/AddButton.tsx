import { useState, useEffect } from "react"

function addButton(){

    const [items, setItems] = useState(0)
    const [cart, setCart] = useState(true)

    useEffect(() => {
        if (items === 0) {
            setCart(true);
        }
    }, [items]);

    return(
        <div className="addToCartButtonWrapper">
            <div className="cart"
            onClick={()=>setCart(!cart)}
            style={{display: cart ? "block":"none"}}>
                <button className="content" onClick={()=>setItems(prev => prev+1)}>🛒 Add to Cart</button>
            </div>

            <div className="addItems"
            style={{display: cart ? "none":"block"}}>
                <button onClick={()=> setItems(prev => prev-1)}>-</button>
                <span className="itemCount">{items}</span>
                <button onClick={()=> setItems(prev => prev+1)}>+</button>
            </div>
        </div>
    )
}

export default addButton;