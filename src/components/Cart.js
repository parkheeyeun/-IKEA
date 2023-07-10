import React, { useState, useEffect, useRef } from 'react';

// function saveDoc(cart) {
//     localStorage.setItem("cart", JSON.stringify(cart))
// }

export default function Cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));

    useEffect(() => {
        document.title = "장바구니";
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            {cart.length < 1 && (
                <p className="text-4xl font-semibold flex justify-center items-center">No Item</p>
            )}

            {cart.map(item => (
                <Item item={item} />
            ))
            }

            <div className="h-16"></div>
        </>
    );
}

function Item({ item }) {
    const [count, setCount] = useState(item.count);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));

    // 서버가 있을 때 하는게...ㅠㅠ
    // if (item.count !== count) {
    //     saveDoc([...cart, { ...item, count }])
    // }

    var price = (item.price).slice(1, item.price.length)
    // console.log(price)
    var price = Number(price)
    let total = count > 0 ? price * count : price

    function onDelete(id){
        const updatelist = cart.filter((item) => {
            return item.id !== id })
        setCart(updatelist)
    }

    return (
        <li className="list-none text-xl border-b border-black m-4" key={item.id}>
            <div className="flex p-4">
                <img className="w-[200px] float-left mr-4" src={item.src} alt={item.title} />
                <div className="flex flex-col w-full">
                    <div className="flex justify-between w-full">
                        <p className="font-semibold">{item.title}</p>
                        <button
                            className="underline underline-offset-3 mr-4"
                            onDelete={onDelete}>삭제</button>
                    </div>
                    <p className="text-lg font-semibold mt-2">{item.price}</p>
                    <div className="mt-4">
                        <p className="text-lg">{count}</p>
                        <button
                            className="border rounded-full bg-blue-500 px-3 py-1 mr-2 text-white"
                            onClick={() => setCount(count + 1)}>+1</button>
                        <button
                            className="border rounded-full bg-blue-500 px-3 py-1 mr-2 text-white"
                            onClick={() => count > 0 ? setCount(count - 1) : 0}>-1</button>
                        <p className='text-lg mt-3'>총금액 : ￦{total}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

