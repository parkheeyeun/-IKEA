import { useEffect, useState } from "react"

export default function Count() {
    const [count, setCount] = useState(
        () => JSON.parse(window.localStorage.getItem("count")) || 0)
    
    useEffect(() => {
        window.localStorage.setItem("count", JSON.stringify(count))
    }, [count])

    const CountUp = () => {
        setCount((prevcount) => prevcount + 1)
    }

    const CountDown = () => {
        return count > 0 ? setCount((prevcount) => prevcount - 1) : false
    }

    return (
        <>
            <p className="mt-12 mb-1 text-2xl">{count}</p>
            <button
                className="border rounded-full bg-blue-500 px-3 py-1 mr-2 text-white"
                onClick={CountUp}>+1</button>
            <button
                className="border rounded-full bg-blue-500 px-3 py-1 mr-2 text-white"
                onClick={CountDown}>-1</button>
        </>
    )
}
