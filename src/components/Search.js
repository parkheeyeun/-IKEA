import React, { useState, useEffect } from 'react';

const SearchList = ({ product }) => {

    useEffect(() => {
        document.title = "검색"
    },[])

    const [products, setProducts] = useState('')

    const handleSearch = (e) => {
        setProducts(e.target.value)
    }

    const filteredData = product.filter(item => item.toLowerCase().includes(products.toLowerCase()))

    return (
        <div className="w-3/4 m-auto mt-10 relative">
            <input
                type="text"
                onChange={handleSearch}
                value={products}
                placeholder="검색어를 입력하세요"
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
            <ul>
                {filteredData.map((item, index) => (
                    <li key={index} className="py-2 relative left-6 text-lg cursor-pointer">{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default function Search() {
    const searchListData = [
       '옷장', '침대', '책상', '의자', '식탁', '선반', '수납'
    ]
    
    return (
        <>
            <SearchList product={searchListData}/>
        </>
    )

}


