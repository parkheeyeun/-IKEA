import { Link } from "react-router-dom";

export default function Account() {
    return (
        <>
            <p className="text-3xl font-semibold text-center pt-20 max-w-xl mx-auto">
                IKEA에 오신것을 환영합니다</p>
            <div className="flex justify-around mt-16">
                <Link to="/account/login" className="">
                    <button
                        type="submit"
                        className="bg-[#2360a5] px-6 py-4 rounded-full text-white text-xl">
                        로그인 하기
                    </button>
                </Link>
                <Link to="/account/signup" className="">
                    <button
                        type="submit"
                        className="bg-[#f7d43c] px-6 py-4 rounded-full text-xl">
                        회원가입 하기
                    </button>
                </Link>
            </div>
            <div className="mt-8">
                <ul className="p-2">
                    <li className="border-gray-300 border-b text-xl py-3 pl-4">정책 <span className="float-right mr-6">&#62;</span></li>
                    <li className="border-gray-300 border-b text-xl py-3 pl-4">서비스 <span className="float-right mr-6">&#62;</span></li>
                    <li className="border-gray-300 border-b text-xl py-3 pl-4">피드백 <span className="float-right mr-6">&#62;</span></li>
                    <li className="border-gray-300 border-b text-xl py-3 pl-4">고객 지원 <span className="float-right mr-6">&#62;</span></li>
                </ul>
            </div>
        </>
    )
}