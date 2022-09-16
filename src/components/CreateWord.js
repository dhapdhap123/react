

function CreateWord() {
    return (
        <form>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select>
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
            <button>저장</button>
        </form>
    )
};

export default CreateWord;