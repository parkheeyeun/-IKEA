import { useState, useEffect, useRef } from "react";

export default function Search() {
    const [error, setError] = useState(null)
    const [product, setProduct] = useState([])

    console.log(product)

    async function handleChange(e) {
        try{
            const goods = e.target.value

            if(!goods){
                return setProduct([])
            }

        }catch(error){
            setError(error)
        }
    }

    useEffect(() => {
        document.title = "검색"
    })

    return (
        <>
            <div className="w-3/4 m-auto mt-10 relative">
                <input
                    type="text"
                    className="w-full bg-transparent border-2 border-[#2360a5] py-4 px-4 rounded-full outline-none"
                />
                <svg
                    className="absolute cursor-pointer right-8 top-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                    />
                </svg>
            </div>

        </>
    )
}
