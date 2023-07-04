import { useState, useEffect } from "react"

export default function TotheTop() {
    const [btn, setBtn] = useState(true)

    const handleScroll = () => {
        const { scrollY } = window

        scrollY > 150 ? setBtn(true) : setBtn(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const goTop = () => {
        window.scroll({ top: 0, behavior: "smooth" })
    }

    return (
        <>
            {btn &&
                <div className="fixed right-5 bottom-20 z-10">
                    <svg
                        className="w-6 h-6 cursor-pointer fill-gray-400"
                        onClick={goTop}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM385 231c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V376c0 13.3-10.7 24-24 24s-24-10.7-24-24V193.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 119c9.4-9.4 24.6-9.4 33.9 0L385 231z" />
                    </svg>
                </div>
            }
        </>
    )
}
