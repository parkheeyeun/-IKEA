import { useState } from 'react'
import './chat.css'

export default function Chat() {
    const [active, setActive] = useState(false)

    function close(e) {
        if (e.target === e.currentTarget) {
            setActive(false)
        }
    }

    const chatarea = (
        <div
            className='fixed right-5 bottom-28 z-10 w-96 h-96 rounded-lg bg-white'>
            <div className='flex flex-col bg-[#f7d43c] w-full h-14 rounded-t-lg'>
                <div className='flex justify-between'>
                    <p className='p-3 font-semibold text-lg'>IKEA 채팅에 오신것을 환영합니다!</p>
                    <button
                        className='text-4xl mr-2 leading-none'
                        onClick={close}>
                        &times;
                    </button>
                </div>
                <div className='flex flex-col h-[500px] justify-between mt-4 p-2'>
                    <p>고객지원 도우미 챗봇 Billie 🤖입니다.</p>
                    <p className='mt-1'>무엇을 도와 드릴까요?</p>
                    <div className='relative'>
                        <input
                            placeholder='여기에 메시지를 입력하세요'
                            className="border-t boder-black outline-none float-left w-full" />
                        <svg
                            className='w-5 h-5 absolute top-1 right-3'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
                        </svg></div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <div className="fixed right-5 bottom-28 z-10">

                {active && chatarea}

                <button
                    class="round"
                    onClick={() => setActive(true)}>
                    <svg
                        className='w-7 h-7 relative left-3'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                    </svg>
                </button>
            </div>
        </>
    )
}