export default function Form({ handleSubmit, setValue, value }){

    const handleChange = e => {
        setValue(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit} className="flex pt-2">
            <input
                type="text"
                name="value"
                placeholder="해야 할 일을 입력하세요."
                className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
                value={value}
                onChange={handleChange}
            />
            <input
                type="submit"
                value="입력"
                className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-300 cursor-pointer"
                style={{ flex: "1" }}
            />
        </form>
    )
}