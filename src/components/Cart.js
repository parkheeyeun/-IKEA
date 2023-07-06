import { useEffect, useState } from "react";

export default function Cart() {

    const [count, setCount] = useState(JSON.parse(localStorage.getItem("cart") || 0))
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))

    useEffect(() => {
        document.title = "장바구니"
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    const CountUp = () => {
        setCount((prevcount) => prevcount + 1)
    }

    const CountDown = () => {
        return count > 0 ? setCount((prevcount) => prevcount - 1) : false
    }

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
                            <p className="text-lg">{item.count}</p>
                            <button
                                className="border rounded-full bg-blue-500 px-3 py-1 mr-2 text-white"
                                onClick={(count +1)}>+1</button>
                            <button
                                className="border rounded-full bg-blue-500 px-3 py-1 mr-2 text-white"
                                onClick={() => setCount(count - 1)}>-1</button>
                        </div>
                    </div>
                </li>
            ))}
            <div className="h-16"></div>
        </>
    )

}