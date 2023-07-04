import { useState, useEffect } from "react"
import Scrollbtn from "./Scrollbtn"

export default function Home() {

    useEffect(() => {
        document.title = "홈"
    }, [])

    return (
        <>
            <Scrollbtn />
            <div className="flex mx-4">
                <img
                    src="https://www.ikea.com/images/be/24/be241105e72cf8bfb1fcd875f03827fe.jpg?f=xl"
                    className="w-2/3 object-cover"
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
                        <img
                            className="h-full max-w-fit"
                            src="https://www.ikea.com/ext/ingkadam/m/3aa319771247890b/original/PH171699-crop001.jpg?f=xxs"
                        />
                        <button className="bg-white rounded-full px-3 py-1 absolute bottom-5 left-20">
                            <p>침실</p>
                        </button>
                    </div>

                    <div className="relative mr-4">
                        <img
                            className="h-full max-w-fit"
                            src="https://www.ikea.com/ext/ingkadam/m/57af553408fd829f/original/PE867858-crop001.jpg?f=xxs"
                        />
                        <button className="bg-white rounded-full px-3 py-1 absolute bottom-5 left-20">
                            <p>수납/정리</p>
                        </button>
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

                <div className="flex mt-8 h-[450px] overflow-auto overflow-y-hidden box-border px-2 py-2">
                    <div className="relative mr-4">
                        <img
                            className="max-w-[340px]"
                            src="https://www.ikea.com/kr/ko/images/products/kleppstad-wardrobe-with-3-doors-white__0753594_pe748782_s5.jpg?f=s"
                        />
                        <div className="absolute top-0 left-0 bg-[#fa0764] text-white px-1"><span className="text-xs">베스트셀러</span></div>
                        <p className="font-semibold mt-2">KLEPPSTAD 클렙스타드</p>
                        <p className="font-semibold mt-2 text-2xl">￦18900</p>
                        <div>
                            <svg
                                className="fill-white"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16"
                                viewBox="0 0 16 16">
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </div>

                    </div>
                    <div className="relative mr-4">
                        <img
                            className="max-w-[340px]"
                            src="https://www.ikea.com/kr/ko/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xxs"
                        />
                        <p className="font-semibold mt-2">KLEPPSTAD 클렙스타드</p>
                        <p className="font-semibold mt-2 text-2xl">￦45,000</p>
                    </div>
                    <div className="relative mr-4">
                        <img
                            className="max-w-[340px]"
                            src="https://www.ikea.com/kr/ko/images/products/utespelare-gaming-desk-black__0985179_pe816538_s5.jpg?f=s"
                        />
                        <div className="absolute top-0 left-0 bg-[#fa0764] text-white px-1"><span className="text-xs">베스트셀러</span></div>
                        <p className="font-semibold mt-2">KLEPPSTAD 클렙스타드</p>
                        <p className="font-semibold mt-2 text-2xl">￦189,000</p>
                    </div>
                    <div className="relative mr-4">
                        <img
                            className="max-w-[340px]"
                            src="https://www.ikea.com/kr/ko/images/products/raskog-trolley-white__0503386_pe632627_s5.jpg?f=s"
                        />
                        <p className="font-semibold mt-2">KLEPPSTAD 클렙스타드</p>
                        <p className="font-semibold mt-2 text-2xl">￦189,000</p>
                    </div>
                    <div className="relative mr-4">
                        <img
                            className="max-w-[340px]"
                            src="https://www.ikea.com/kr/ko/images/products/djungelskog-soft-toy-orangutan__0710167_pe727369_s5.jpg?f=s"
                        />
                        <p className="font-semibold mt-2">DJUNGELSKOG 융엘스코그</p>
                        <p className="font-semibold mt-2 text-2xl">￦12,900</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-60"></div>
        </>
    )
}