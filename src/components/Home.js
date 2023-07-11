import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Scollbtn from './Scrollbtn'
import Chat from "./Chat"
import './like.css'

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

export default function Home() {

    const Item = [
        { id: 1, title: "KLEPPSTAD 클렙스타드", price: "￦189000", count: 0, src: "https://www.ikea.com/kr/ko/images/products/kleppstad-wardrobe-with-3-doors-white__0753594_pe748782_s5.jpg?f=s" },
        { id: 2, title: "LINNMON 린몬 / ADILS 아딜스", price: "￦45000", count: 0, src: "https://www.ikea.com/kr/ko/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xxs" },
        { id: 3, title: "RÅSKOG 로스코그", price: "￦39900", count: 0, src: "https://www.ikea.com/kr/ko/images/products/utespelare-gaming-desk-black__0985179_pe816538_s5.jpg?f=s" },
        { id: 4, title: "UTESPELARE 우테스펠라레", price: "￦169000", count: 0, src: "https://www.ikea.com/kr/ko/images/products/raskog-trolley-white__0503386_pe632627_s5.jpg?f=s" },
        { id: 5, title: "DJUNGELSKOG 융엘스코그", price: "￦12900", count: 0, src: "https://www.ikea.com/kr/ko/images/products/djungelskog-soft-toy-orangutan__0710167_pe727369_s5.jpg?f=s" }
    ]

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))

    function addCart(id, title, price, count, src) {
        const updateCart = [...cart, { id, title, price, count, src }]
        localStorage.setItem("cart", JSON.stringify(updateCart))
        setCart(true)
    }

    useEffect(() => {
        document.title = "홈"
    }, [])

    return (
        <>
            <Scollbtn />
            <Chat />
            <div className="flex mx-4">
                <img
                    src="https://www.ikea.com/images/be/24/be241105e72cf8bfb1fcd875f03827fe.jpg?f=xl"
                    className="w-1/2 object-cover md:w-2/3"
                />
                <div className="bg-[#d93c1f]">
                    <div className="h-full font-semibold text-white lg:text-lg lg:mt-8 max-w-screen-md:flex flex-col text-sm my-4 mx-4">
                        <p className="leading-loose">2023 여름 세일</p>
                        <p className="leading-loose">IKEA가 여러분을 위한 세일을 진행합니다.</p>
                        <p>매장부터 온라인, 전화주문으로 구매 가능한 200개 이상의 다양한 할인 제품으로 작지만 큰 행복을 만들어보세요.</p>
                        <button className="px-2 py-4 bg-white rounded-full mt-4">
                            <p className="text-black text-sm">할인 제품 확인하기</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mx-4 my-8">
                <h1 className="text-xl font-semibold">
                    베스트 카테고리 쇼핑하기
                </h1>
                <div className="flex mt-8 h-[300px] overflow-auto overflow-y-hidden whitespace-nowrap py-1">
                    <div className="bg-[#CA5008] h-full mr-4 relative">
                        <p className="text-white px-8 mt-8">이케아 신제품 보러가기</p>
                        <svg
                            className="fill-white w-8 h-8 absolute bottom-5 left-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
                        </svg>
                    </div>

                    <div className="relative mr-4">
                        <Link to='/IKEA/cate/st2'>
                            <img
                                className="h-full max-w-fit"
                                src="https://www.ikea.com/ext/ingkadam/m/3aa319771247890b/original/PH171699-crop001.jpg?f=xxs"
                            />
                            <button className="bg-white rounded-full px-3 py-1 absolute bottom-5 left-20">
                                <p>침실</p>
                            </button>
                        </Link>
                    </div>

                    <div className="relative mr-4">
                        <Link to='/IKEA/cate/st1'>
                            <img
                                className="h-full max-w-fit"
                                src="https://www.ikea.com/ext/ingkadam/m/57af553408fd829f/original/PE867858-crop001.jpg?f=xxs"
                            />
                            <button className="bg-white rounded-full px-3 py-1 absolute bottom-5 left-20">
                                <p>수납/정리</p>
                            </button>
                        </Link>
                    </div>

                    <div className="relative mr-4">
                        <img
                            className="h-full max-w-fit"
                            src="https://www.ikea.com/images/f0/87/f087331e4416c4ce01d265d6c4288e9b.jpg?f=xxs"
                        />
                        <button className="bg-white rounded-full px-3 py-1 absolute bottom-5 left-20">
                            <p>홈오피스</p>
                        </button>
                    </div>

                    <div className="relative mr-4">
                        <img
                            className="h-full max-w-fit"
                            src="https://www.ikea.com/ext/ingkadam/m/206171a86cff819c/original/PH166826-crop001.jpg?f=xxs"
                        />
                        <button className="bg-white rounded-full px-3 py-1 absolute bottom-5 left-20">
                            <p>다이닝</p>
                        </button>
                    </div>

                    <div className="relative mr-4">
                        <img
                            className="h-full max-w-fit"
                            src="https://www.ikea.com/ext/ingkadam/m/7a90f1e0176f5447/original/PH167387-crop001-crop002.jpg?f=xxs"
                        />
                        <button className="bg-white rounded-full px-3 py-1 absolute bottom-5 left-20">
                            <p>거실</p>
                        </button>
                    </div>

                    <div className="relative mr-4">
                        <img
                            className="h-full max-w-fit"
                            src="https://www.ikea.com/ext/ingkadam/m/7e56e5a9f682485f/original/PH181607.jpg?f=xxs"
                        />
                        <button className="bg-white rounded-full px-3 py-1 absolute bottom-5 left-20">
                            <p>주방</p>
                        </button>
                    </div>

                    <div className="relative mr-4">
                        <img
                            className="h-full max-w-fit"
                            src="https://www.ikea.com/ext/ingkadam/m/2cefdac0dd90b2a3/original/PH159748-crop002.jpg?f=xxs"
                        />
                        <button className="bg-white rounded-full px-3 py-1 absolute bottom-5 left-14">
                            <p>홈데코/장식품</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mx-4 my-8">
                <h1 className="text-xl font-semibold">
                    추천 상품
                </h1>

                {/* <ul className="my-8">
                    {Item.map(item => (
                        <li className="border m-4">
                            {item.title}
                            <button onClick={() => alert(item.id)}>Add To Cart</button>
                        </li>
                    ))}
                </ul> */}

                <div className="flex mt-8 h-[500px] overflow-auto overflow-y-hidden box-border px-2 py-2 relative">
                    {Item.map(item => (
                        <li className="list-none mr-3" key={item.id}>
                            <Link to={`/IKEA/menu/${item.id}`}>
                                <img
                                    className="max-w-[340px]"
                                    src={item.src} />
                                <p className="font-semibold mt-2">{item.title}</p>
                                <p className="font-semibold mt-2 text-2xl">{item.price}</p>
                            </Link>
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
                    <div className="absolute top-2 left-2 bg-[#fa0764] text-white px-1"><span className="text-xs">베스트셀러</span></div>
                </div>
            </div>

            <div className="mx-4 my-8">
                <h1 className="text-xl font-semibold">
                    진행중인 이벤트
                </h1>
                <div className="flex mt-8 h-[800px] overflow-auto overflow-y-hidden box-border px-2 py-3">
                    <div className="relative mr-4">
                        <img
                            className="max-w-[340px]"
                            src="https://www.ikea.com/ext/ingkadam/m/409fff1c197773c4/original/PH193132.jpg?f=xs"
                        />
                        <div className="max-w-[340px] bg-[#f9e66c] h-full">
                            <div className="flex flex-col px-4">
                                <p className="font-semibold text-xl mt-6">IKEA의 신제품을 만나보세요</p>
                                <p className="mt-2">톡톡 튀는 다양한 컬러로 찾아온 최신 제품으로 활기가 넘치는 집을 만들어 보세요.</p>
                                <svg
                                    className="w-12 h-12 absolute bottom-5 left-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="relative mr-4">
                        <img
                            className="max-w-[340px]"
                            src="https://www.ikea.com/ext/ingkadam/m/409fff1c197773c4/original/PH193132.jpg?f=xs"
                        />
                        <div className="max-w-[340px] bg-[#f9e66c] h-full">
                            <div className="flex flex-col px-4">
                                <p className="font-semibold text-xl mt-6">IKEA의 신제품을 만나보세요</p>
                                <p className="mt-2">톡톡 튀는 다양한 컬러로 찾아온 최신 제품으로 활기가 넘치는 집을 만들어 보세요.</p>
                                <svg
                                    className="w-12 h-12 absolute bottom-5 left-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="relative mr-4">
                        <img
                            className="max-w-[340px]"
                            src="https://www.ikea.com/ext/ingkadam/m/409fff1c197773c4/original/PH193132.jpg?f=xs"
                        />
                        <div className="max-w-[340px] bg-[#f9e66c] h-full">
                            <div className="flex flex-col px-4">
                                <p className="font-semibold text-xl mt-6">IKEA의 신제품을 만나보세요</p>
                                <p className="mt-2">톡톡 튀는 다양한 컬러로 찾아온 최신 제품으로 활기가 넘치는 집을 만들어 보세요.</p>
                                <svg
                                    className="w-12 h-12 absolute bottom-5 left-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="relative mr-4">
                        <img
                            className="max-w-[340px]"
                            src="https://www.ikea.com/ext/ingkadam/m/409fff1c197773c4/original/PH193132.jpg?f=xs"
                        />
                        <div className="max-w-[340px] bg-[#f9e66c] h-full">
                            <div className="flex flex-col px-4">
                                <p className="font-semibold text-xl mt-6">IKEA의 신제품을 만나보세요</p>
                                <p className="mt-2">톡톡 튀는 다양한 컬러로 찾아온 최신 제품으로 활기가 넘치는 집을 만들어 보세요.</p>
                                <svg
                                    className="w-12 h-12 absolute bottom-5 left-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="relative mr-4">
                        <img
                            className="max-w-[340px]"
                            src="https://www.ikea.com/ext/ingkadam/m/409fff1c197773c4/original/PH193132.jpg?f=xs"
                        />
                        <div className="max-w-[340px] bg-[#f9e66c] h-full">
                            <div className="flex flex-col px-4">
                                <p className="font-semibold text-xl mt-6">IKEA의 신제품을 만나보세요</p>
                                <p className="mt-2">톡톡 튀는 다양한 컬러로 찾아온 최신 제품으로 활기가 넘치는 집을 만들어 보세요.</p>
                                <svg
                                    className="w-12 h-12 absolute bottom-5 left-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="relative mr-4">
                        <img
                            className="max-w-[340px]"
                            src="https://www.ikea.com/ext/ingkadam/m/409fff1c197773c4/original/PH193132.jpg?f=xs"
                        />
                        <div className="max-w-[340px] bg-[#f9e66c] h-full">
                            <div className="flex flex-col px-4">
                                <p className="font-semibold text-xl mt-6">IKEA의 신제품을 만나보세요</p>
                                <p className="mt-2">톡톡 튀는 다양한 컬러로 찾아온 최신 제품으로 활기가 넘치는 집을 만들어 보세요.</p>
                                <svg
                                    className="w-12 h-12 absolute bottom-5 left-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[300px] mt-4 bg-[#f2f2f2]">
                <div className="flex flex-col p-4">
                    <p className="font-semibold text-xl">IKEA 코리아</p>
                    <p className="mt-2 text-sm">주소 : (우) 14352 경기도 광명시 일직로 17 IKEA광명점</p>
                    <p className="mt-2 text-sm">사업자 등록번호 : 106-86-82871</p>
                    <p className="mt-2 text-sm">대표자 : 프레드릭 요한손</p>
                    <p className="mt-2 text-sm">통신판매업 신고 : 2018-경기광명-0209</p>
                    <p className="mt-2 text-sm">TEL : 1670-4532</p>
                </div>
            </div>
        </>
    )
}