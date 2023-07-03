import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Login() {

    useEffect(() => {
        document.title = "로그인"
    }, []) 
    
    return (
        <>
            <form className="w-3/4 flex flex-col justify-center m-auto mt-10">
                <div className="mb-2">
                    <label className="block">
                        이메일 또는 휴대폰 번호
                        <input
                            type="text"
                            className="border px-2 py-2 w-full rounded"
                        />
                    </label>
                </div>
                <div className="mb-2">
                    <label className="block">
                        비밀번호
                        <input
                            type="text"
                            className="border px-2 py-2 w-full rounded"
                        />
                    </label>
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="w-full bg-[#2360a5] px-6 py-4 rounded-full text-white text-xl">
                        로그인 하기
                    </button>
                </div>
                <p className="mt-8 text-center">IKEA 계정이 없으신가요? 지금 만들어보세요.</p>
                <div className="my-4">
                    <Link to="/account/signup" className="">
                        <button
                            type="submit"
                            className="w-full bg-[#f7d43c] px-6 py-4 rounded-full text-white text-xl">
                            개인 계정 생성하기
                        </button>
                    </Link>
                </div>
                <div className="mb-2">
                    <Link to="/account/signup" className="">
                        <button
                            type="submit"
                            className="w-full bg-[#f7d43c] px-6 py-4 rounded-full text-white text-xl">
                            비즈니스 계정 생성하기
                        </button>
                    </Link>
                </div>
            </form>
        </>
    )
}