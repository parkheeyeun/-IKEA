import { useEffect, useState } from "react";

export default function Cart({Item}) {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))

    useEffect(() => {
        document.title = "장바구니"
    },[])

    return(
        <>
        {cart.length < 1&&(
            <p className="text-4xl font-semibold flex justify-center items-center">No Item</p>
        )}

        {cart.map(id => (
            <li 
            key={id} 
            className="w-2/3 flex justify-center items-center list-none m-auto text-2xl">{product.title}</li>
        ))}
        </>
    )

}