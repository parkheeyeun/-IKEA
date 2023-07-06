import { useEffect, useState } from "react";
import Count from "./Count";

export default function Cart() {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))

    useEffect(() => {
        document.title = "장바구니"
    }, [])

    return (
        <>
            {cart.length < 1 && (
                <p className="text-4xl font-semibold flex justify-center items-center">No Item</p>
            )}


            {cart.map(item => (
                <li className="list-none text-xl p-4 border-b border-black m-4" key={item.id}>
                    <img className="w-[200px] float-left mr-4" src={item.src} />
                    <div className="flex flex-col">
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-lg font-semibold mt-2">{item.price}</p>
                        <div className="mt-2">
                           <Count/>
                        </div>
                    </div>
                </li>
            ))}
            <div className="h-16"></div>
        </>
    )

}