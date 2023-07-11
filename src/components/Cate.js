import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cate() {

    useEffect(() => {
        document.title = "메뉴"
    }, [])

    return (
        <>
        <h1 className="text-center text-4xl font-semibold">카테고리</h1>
            <div className="grid gap-4 w-3/4 m-auto mt-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                <Link to="/IKEA/cate/st1">
                <div className="w-full h-[280px] overflow-hidden">
                    <img
                        className="object-cover rounded-t w-full h-full"
                        src="https://www.ikea.com/images/platsa-ae04386d8804870b67b5c0eea71f0768.jpg?f=m" />
                </div>
                    <p className="w-full bg-[#ece6cc] h-16 text-lg text-center pt-2">수납/정리</p>
                </Link>
                <Link to="/IKEA/cate/st2">
                <div className="w-full h-[280px] overflow-hidden">
                    <img
                        className="object-cover rounded-t w-full h-full"
                        src="https://www.ikea.com/ext/ingkadam/m/365b7033ded6e3fd/original/PE842159-crop001.jpg?f=l" />
                </div>
                    <p className="w-full bg-[#ece6cc] h-16 text-lg text-center pt-2">침대/매트릭스</p>
                </Link>
                <Link to="/IKEA/cate/st3">
                <div className="w-full h-[280px] overflow-hidden">
                    <img
                        className="object-cover rounded-t w-full h-full"
                        src="https://www.ikea.com/ext/ingkadam/m/3f0c3505388a117f/original/PH193342-crop001.jpg?f=xs" />
                </div>
                    <p className="w-full bg-[#ece6cc] h-16 text-lg text-center pt-2">주방가구</p>
                </Link>
                <Link to="/IKEA/cate/st4">
                <div className="w-full h-[280px] overflow-hidden">
                    <img
                        className="object-cover rounded-t w-full h-full"
                        src="https://www.ikea.com/ext/ingkadam/m/420032c86818ef16/original/PH172449.jpg?f=xs" />
                </div>
                    <p className="w-full bg-[#ece6cc] h-16 text-lg text-center pt-2">욕실</p>
                </Link>
                <Link to="/IKEA/cate/st5">
                <div className="w-full h-[280px] overflow-hidden">
                    <img
                        className="object-cover rounded-t w-full h-full"
                        src="https://www.ikea.com/images/-05a29f3344522a1008e5ea9f1330e05a.jpg?f=xs" />
                </div>
                    <p className="w-full bg-[#ece6cc] h-16 text-lg text-center pt-2">세탁/청소</p>
                </Link>
                <Link to="/IKEA/cate/st6">
                <div className="w-full h-[280px] overflow-hidden">
                    <img
                        className="object-cover rounded-t w-full h-full"
                        src="https://www.ikea.com/images/bekant-jaervfjaellet-lack-7922294a1df4c37894da8cdac5a1b4ee.jpg?f=xs" />
                </div>
                    <p className="w-full bg-[#ece6cc] h-16 text-lg text-center pt-2">홈오피스</p>
                </Link>
                <div className="h-20"></div>
            </div>
        </>
    )

}