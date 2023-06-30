export default function Login() {
    return (
        <>
            <div className="mb-2">
                <label className="block">
                    이메일 또는 휴대폰 번호
                    <input
                    type="text"
                    className="border px-2 py-1 w-full rounded"
                    />
                </label>
            </div>
        </>
    )
}