import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    const [error, setError] = useState(null)
    const [firstname, setFirstname] = useState("")
    const [name, setName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAdress] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setshowPassword] = useState(false)

    async function handleSumbmit(e) {
        try {
            e.preventDefault()

            const newUser = { firstname, name, birthday, phone, address, email, password }
            console.log(newUser)

            const _error = {}

            if (!firstname) {
                _error.firstname = "성은 필수 정보입니다"
            }

            if (!name) {
                _error.name = "이름은 필수 정보입니다"
            }

            if (!birthday.match(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)) {
                _error.birthday = "생년월일을 YYYY-MM-DD형식으로 입력해주세요"
            }

            if (!phone) {
                _error.phone = "전화번호는 필수 정보입니다"
            } else if (phone.match(/^(01[016789]{1})-[0-9]{3,4}-[0-9]{4}$/)) {
                _error.phone = "전화번호가 유효하지 않습니다"
            }

            if (!address) {
                _error.address = "상세주소는 필수 정보입니다"
            }

            if (!email) {
                _error.email = "이메일은 필수 정보입니다"
            }
            else if (email.indexOf("@") === -1) {
                _error.email = "이메일이 유효하지 않습니다"
            }

            if (!password) {
                _error.password = "비밀번호는 필수 정보입니다"
            } else if (!password.match(/[A-Za-z0-9]{8,20}$/)) {
                _error.password = "비밀번호는 최소 8자 이상, 대문자, 소문자 또는 숫자로 이루어져야합니다"
            }

            if (Object.keys(_error).length > 0) {
                throw _error
            }

        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        document.title = "회원가입"
    }, [])

    return (
        <>
            <form onSubmit={handleSumbmit} className="w-3/4 flex flex-col justify-center m-auto mt-10">
                <div className="mb-2">
                    <label className="block">
                        성
                        <input
                            type="text"
                            name="firstname"
                            onChange={({ target }) => setFirstname(target.value)}
                            className="border px-2 py-2 w-full rounded"
                        />
                    </label>
                    {error && <p className="text-red-500">{error.firstname}</p>}
                </div>

                <div className="mb-2">
                    <label className="block">
                        이름
                        <input
                            type="text"
                            name="name"
                            onChange={({ target }) => setName(target.value)}
                            className="border px-2 py-2 w-full rounded"
                        />
                    </label>
                    {error && <p className="text-red-500">{error.name}</p>}
                </div>
                <div className="mb-2">
                    <label className="block">
                        생일
                        <input
                            type="text"
                            name="birthday"
                            onChange={({ target }) => setBirthday(target.value)}
                            className="border px-2 py-2 w-full rounded"
                        />
                        <p className="text-xs text-[#767676] my-1">YYYY-MM-DD</p>
                    </label>
                    {error && <p className="text-red-500">{error.birthday}</p>}
                </div>
                <div className="mb-2 mt-4">
                    <label className="block">
                        휴대폰
                        <input
                            type="text"
                            name="phone"
                            onChange={({ target }) => setPhone(target.value)}
                            className="border px-2 py-2 w-full rounded"
                        />
                        {error && <p className="text-red-500">{error.phone}</p>}
                    </label>
                </div>
                <div className="mb-2">
                    <label className="block">
                        성별(선택사항)
                        <select className="border px-2 py-2 w-full rounded">
                            <option value=""></option>
                            <option value="여자" className="">여자</option>
                            <option value="남자" className="">남자</option>
                            <option value="응답거부" className="">응답거부</option>
                        </select>
                    </label>
                </div>
                <div className="my-4">
                    <button
                        className="bg-[#2360a5] px-6 py-4 rounded-full text-white">
                        우편번호 찾기
                    </button>
                </div>
                <div className="mb-2">
                    <label className="block">
                        도로명 주소
                        <input
                            type="text"
                            className="border px-2 py-2 w-full rounded" disabled
                        />
                    </label>
                </div>
                <div className="mb-2">
                    <label className="block">
                        상세 주소
                        <input
                            type="text"
                            name="address"
                            onChange={({ target }) => setAdress(target.value)}
                            className="border px-2 py-2 w-full rounded"
                        />
                    </label>
                    {error && <p className="text-red-500">{error.address}</p>}
                </div>
                <div className="mb-2">
                    <label className="block">
                        우편번호
                        <input
                            type="text"
                            className="border px-2 py-2 w-full rounded" disabled
                        />
                    </label>
                </div>
                <div className="mb-2">
                    <label className="block">
                        선호하는 매장
                        <select className="border px-2 py-2 w-full rounded">
                            <option value=""></option>
                            <option value="고양점">고양점</option>
                            <option value="광명점">광명점</option>
                            <option value="기흥점">기흥점</option>
                            <option value="동부산">동부산</option>
                        </select>
                    </label>
                </div>
                <div className="mb-2">
                    <label className="block">
                        이메일
                        <input
                            type="text"
                            name="email"
                            onChange={({ target }) => setEmail(target.value)}
                            className="border px-2 py-2 w-full rounded"
                        />
                        {error && <p className="text-red-500">{error.email}</p>}
                    </label>
                </div>
                <div className="mb-2">
                    <label className="block relative">
                        비밀번호
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            onChange={({ target }) => setPassword(target.value)}
                            className="font-sans border px-2 py-2 w-full rounded"
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-8"
                            onClick={() => setshowPassword(!showPassword)}
                        >
                            {showPassword ? '숨기기' : '보이기'}
                        </button>
                    </label>
                    {error && <p className="text-red-500">{error.password}</p>}
                </div>
                <div className="my-4 flex items-center">
                    <input
                        type="checkbox"
                        id="check1"
                        className="w-14 h-14 bg-white border border-black rounded mr-4
                            checked:bg-[#2360a5] checked:border-transparent focus:outline-none checked:text-white-600"
                    />
                    <label className="block" for="check1">나의 프로필, 관심사 그리고 구매 이력에 따라 맞춰진 IKEA의 홈퍼니싱 아이디어와
                        신상품 소식, 그리고 할인 혜택 정보를 받고 싶어요!</label>

                </div>
                <div className="my-2 ml-8 flex">
                    <input
                        type="checkbox"
                        id="check2"
                        className="w-6 h-6 bg-white border border-black rounded mr-4
                            checked:bg-[#2360a5] checked:border-transparent focus:outline-none checked:text-white-600"
                    />
                    <label className="block" for="check2">이메일 수신</label>
                </div>
                <div className="my-2 ml-8 flex">
                    <input
                        type="checkbox"
                        id="check3"
                        className="w-6 h-6 bg-white border border-black rounded mr-4
                            checked:bg-[#2360a5] checked:border-transparent focus:outline-none checked:text-white-600"
                    />
                    <label className="block" for="check3">문자 수신</label>
                </div>
                <div className="my-2 ml-8 flex">
                    <input
                        type="checkbox"
                        id="check4"
                        className="w-6 h-6 bg-white border border-black rounded mr-4 align-middle
                            checked:bg-[#2360a5] checked:border-transparent focus:outline-none checked:text-white-600"
                    />
                    <label className="block" for="check4">우편물 수신</label>
                </div>
                <div className="my-4 flex items-center">
                    <input
                        type="checkbox"
                        id="check5"
                        className="w-7 h-7 bg-white border border-black rounded mr-4
                            checked:bg-[#2360a5] checked:border-transparent focus:outline-none checked:text-white-600"
                    />
                    <label className="block" for="check5">(필수) 약관을 모두 읽고 동의합니다</label>
                </div>
                <div className="my-4 flex items-center">
                    <input
                        type="checkbox"
                        id="check5"
                        className="w-7 h-7 bg-white border border-black rounded mr-4
                            checked:bg-[#2360a5] checked:border-transparent focus:outline-none checked:text-white-600"
                    />
                    <label className="block" for="check5">(필수) 개인정보 수집ꞏ이용에 동의합니다</label>
                </div>
                <button className="w-full bg-black rounded-full mt-4 p-4">
                    <p className="text-white">가입하기</p>
                </button>
                <div className="mt-8">
                    <p className="text-lg">이미 계정을 가지고 계신가요?</p>
                    <Link to="/account/Login">
                    <p className="mt-4 text-center text-lg underline underline-offset-4">로그인하기</p>
                    </Link>
                </div>
                <div className="mb-20"></div>
            </form>
        </>
    )
}

