import { useEffect, useState } from "react"
import './like.css'

export default function St1() {

    useEffect(() => {
        document.title = '수납/정리'
    }, [])

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))

    const Item = [
        { id: 30563791, title: "ALEX 알렉스", price: "￦69900", count: 0, src: "https://www.ikea.com/kr/ko/images/products/alex-storage-unit-white-stained-oak-effect__1213607_pe911179_s5.jpg?f=s" },
        { id: 30563792, title: "BILLY 빌리", price: "￦39900", count: 0, src: "https://www.ikea.com/kr/ko/images/products/billy-bookcase-white__0627110_pe693186_s5.jpg?f=xxs" },
        { id: 30563793, title: "BLÅLIDEN 블롤리덴", price: "￦99900", count: 0, src: "https://www.ikea.com/kr/ko/images/products/blaliden-glass-door-cabinet-white__1186284_pe898752_s5.jpg?f=s" },
        { id: 30563794, title: "BONDSKÄRET 본셰레트", price: "￦59900", count: 0, src: "https://www.ikea.com/kr/ko/images/products/bondskaeret-hat-and-coat-stand-lilac__1176356_pe894995_s5.jpg?f=s" },
        { id: 30563795, title: "PLATSA 플랏사", price: "￦80000", count: 0, src: "https://www.ikea.com/kr/ko/images/products/platsa-open-clothes-hanging-unit-blue__1210324_pe909645_s5.jpg?f=s" }
    ]

    function addCart(id, title, price, count, src) {
        const updateCart = [...cart, { id, title, price, count, src }]
        localStorage.setItem("cart", JSON.stringify(updateCart))
        setCart(true)
    }

    const cate = [
        { title: "소형수납/정리", src: "https://www.ikea.com/global/assets/range-categorisation/images/small-storage-organisers-st007.jpeg?imwidth=300" },
        { title: "카트/이동식 선반", src: "https://www.ikea.com/kr/ko/range-categorisation/images/trolleys-fu005.jpeg?imwidth=300" },
        { title: "수납 솔루션 시스템", src: "https://www.ikea.com/global/assets/range-categorisation/images/storage-solution-systems-46052.jpeg?imwidth=300" },
        { title: "수납장/장식장", src: "https://www.ikea.com/global/assets/range-categorisation/images/cabinets-cupboards-st003.jpeg?imwidth=300" },
        { title: "TV/멀티미디어가구", src: "https://www.ikea.com/global/assets/range-categorisation/images/tv-media-furniture-10475.jpeg?imwidth=300" },
        { title: "거실장/찬장/콘솔테이블", src: "https://www.ikea.com/kr/ko/range-categorisation/images/sideboards-buffets-console-tables-30454.jpeg?imwidth=300" }
    ]

    return (
        <>
            <div className="w-full h-[250px] object-cover bg-center bg-[url('https://www.ikea.com/ext/ingkadam/m/5b95374cafad75b4/original/PH179313.jpg?f=xs')]">
                <h1 className="flex h-full text-3xl font-semibold justify-center items-center">수납/정리</h1>
            </div>

            <div className="flex mt-8 m-4 overflow-auto overflow-y-hidden box-border px-2 py-2 relative">
                {Item.map(item => (
                    <li className="list-none mr-3">
                        <div className="w-[300px] h-[300px]">
                            <img
                                className="w-full h-full"
                                src={item.src} />
                        </div>
                        <p className="font-semibold mt-2">{item.title}</p>
                        <p className="font-semibold mt-2 text-2xl">{item.price}</p>
                        <div>
                            <div className="bg-[#2360a5] rounded-full w-10 h-10 mt-2 mr-4 relative float-left">
                                <svg
                                    onClick={() => addCart(item.id, item.title, item.price, item.count, item.src)}
                                    className="fill-white w-6 h-6 absolute left-2 top-2 cursor-pointer"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16">
                                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </div>
                            <div className="w-10 h-10 mt-2 relative float-left">
                                <Like />
                            </div>
                        </div>
                    </li>
                ))}
            </div>

            <h1 className="m-4 mt-8 text-lg">다른 카테고리로 이동</h1>
            <div className="flex m-4 overflow-auto pb-1">
                {cate.map(menu => (
                    <li className="list-none">
                        <div className="w-[200px] bg-gray-100 mr-2">
                            <img className="object-fit" src={menu.src}/>
                            <p className="p-2 text-center">{menu.title}</p>
                        </div>
                    </li>
                ))}
            </div>

            <div className="h-20"></div>
        </>
    )
}

function Like() {
    const [like, setLike] = useState(true)

    const likecheck = () => {
        setLike(!like)
    }

    return (
        <>
            <button className={`Like ${like ? 'like' : ''}`}
                onClick={likecheck}>
                {like ? (<svg
                    className="w-6 h-6 absolute top-2 left-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                </svg>) : (<svg
                    className="w-6 h-6 absolute top-2 left-1 fill-[#ff0000] bounce-animation"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>)}
            </button>
        </>
    )
}
