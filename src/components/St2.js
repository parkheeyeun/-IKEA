import { useEffect, useState } from "react"
import './like.css'

export default function St2() {

    useEffect(() => {
        document.title = '침대/매트리스'
    }, [])

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))

    const bed = [
        { id: 10522136, title: "GRUSNARV 그루스나르브", price: "￦14900", count: 0, src: "https://www.ikea.com/kr/ko/images/products/grusnarv-waterproof-mattress-protector__0790191_pe764297_s5.jpg?f=s" },
        { id: 10522137, title: "PLUTTIG 플루티그", price: "￦30000", count: 0, src: "https://www.ikea.com/kr/ko/images/products/pluttig-foam-mattress-for-cot__0748979_pe745367_s5.jpg?f=s" },
        { id: 10522138, title: "TUSSÖY 투쇠위", price: "￦19900", count: 0, src: "https://www.ikea.com/kr/ko/images/products/tussoey-mattress-pad-white__0641078_pe700242_s5.jpg?f=s" },
        { id: 10522139, title: "ÅGOTNES 오고트네스", price: "￦80000", count: 0, src: "https://www.ikea.com/kr/ko/images/products/agotnes-foam-mattress-firm-light-blue__0986609_pe818096_s5.jpg?f=s" },
        { id: 10522130, title: "REXBEGONIA 렉스베고니아", price: "￦14900", count: 0, src: "https://www.ikea.com/kr/ko/images/products/rexbegonia-cooling-pad__1044036_pe841859_s5.jpg?f=s" }
    ]

    function addCart(id, title, price, count, src) {
        const updateCart = [...cart, { id, title, price, count, src }]
        localStorage.setItem("cart", JSON.stringify(updateCart))
        setCart(true)
    }

    const cate = [
        { title: "침대", src: "https://www.ikea.com/global/assets/range-categorisation/images/beds-bm003.jpeg?imwidth=300" },
        { title: "매트리스", src: "https://www.ikea.com/global/assets/range-categorisation/images/mattresses-bm002.jpeg?imwidth=300" },
        { title: "침구", src: "https://www.ikea.com/global/assets/range-categorisation/images/bedding-tl004.jpeg?imwidth=300" },
        { title: "침대협탁", src: "https://www.ikea.com/global/assets/range-categorisation/images/bedside-tables-20656.jpeg?imwidth=300" },
        { title: "칩대 수납", src: "https://www.ikea.com/global/assets/range-categorisation/images/under-bed-storage-19059.jpeg?imwidth=300" },
        { title: "침대헤드", src: "https://www.ikea.com/global/assets/range-categorisation/images/headboards-19064.jpeg?imwidth=300" }
    ]

    return (
        <>
            <div className="w-full h-[250px] object-cover bg-center bg-[url('https://www.ikea.com/ext/ingkadam/m/42cf4ab9b53efafa/original/PH172091-crop002.jpg?f=xl')]">
                <h1 className="flex h-full text-3xl font-semibold justify-center items-center text-white">침대/매트리스</h1>
            </div>

            <h1 className="font-semibold text-xl mt-8 mx-6">지금 가장 인기있는 매트리스를 만나보세요.</h1>
            <div className="flex m-4 overflow-auto overflow-y-hidden box-border px-2 py-2 relative">
                {bed.map(item => (
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

            <div className="mt-8 mx-4">
                <h1 className="text-xl font-semibold mb-1">수납형 침대로 편안함을 두 배로 누리세요</h1>
                <p>잠자는 공간과 수납공간을 합치면 침실이 금방 깔끔해져요. 수납형 침대를 사용하면 공간은 최대한으로 활용하면서 침구, 계절이 지난 옷, 일상용품 등을 보이지 않는 곳에 깔끔하게 보관할 수 있죠. 필요할 때 꺼내 쓰기 좋아요. 잡동사니가 어수선하게 나와 있지 않으면 공간에는 평화가 찾아오죠. 그럼 더 넓은 공간에서 원하는 활동을 할 수 있어요.</p>
                <div className="grid gap-4 grid-cols-1 mt-2 md:grid-cols-2">
                    <div className="relative">
                        <img
                            className="mr-4"
                            src="https://www.ikea.com/ext/ingkadam/m/3aa0622e7813ecd6/original/PH193635.jpg?f=xl" />
                        <div className="absolute bottom-28 right-20 w-8 h-8 bg-gray-200 opacity-70 z-10 rounded-full hover:bg-white hover:w-12 h-12 hover:border border-black hover:rounded"><span className="hidden hover:block"></span></div>
                    </div>
                    <img
                        src="https://www.ikea.com/ext/ingkadam/m/7b71349df7a829f5/original/PH193636.jpg?f=xl" />
                </div>
            </div>

            <h1 className="m-4 mt-8 text-lg">다른 카테고리로 이동</h1>
            <div className="flex m-4 overflow-auto pb-1">
                {cate.map(menu => (
                    <li className="list-none">
                        <div className="w-[200px] bg-gray-100 mr-2">
                            <img className="object-fit" src={menu.src} />
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