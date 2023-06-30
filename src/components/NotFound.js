import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    useEffect(() => {
        document.title = 'Page not Found - IKEA'
    }, [])

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold my-8 text-center text-red-500 leading-relaxed">
                페이지를 찾을 수 없습니다<br />
                존재하지 않는 주소를 입력하셨거나<br />
                요청하신 페이지 주소가 변경, 삭제되어 찾을 수 없습니다
            </h1>
            <div className="w-full">
                <svg
                    className="fill-red-500 m-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    height="80"
                    viewBox="0 0 512 512">
                    <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                </svg>
            </div>
            <p className="block text-center text-xl mt-8">
                <Link to="/" className="text-blue-500">홈으로</Link>
            </p>
        </div>
    )
}