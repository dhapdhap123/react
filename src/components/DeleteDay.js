import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch"

function DeleteDay(){
    const [newDayArray, setNewDayArray] = useState([]);

    const navigate = useNavigate();

    const days = useFetch("http://localhost:3001/days")
    const words = useFetch("http://localhost:3001/words")

    const dayRef = useRef(null);

    useEffect(() => {
        setNewDayArray(days);
        //console.log("days가 변경되었다", days)
    }, [days])
 
    const delDay = () => {
        const a = newDayArray.filter((day) => Number(day.day) !== Number(dayRef.current.value))
        //a는 하나뺀 어레이, b는 이를 새로 정렬한 array
        for (let i = 0; i < days.length; i++){
            fetch(`http://localhost:3001/days/${i + 1}`, {
                method : 'DELETE',
            }).then(res => {
                if(res.ok){
                    console.log(`${i+1}일 삭제완료!`);
                }
            })}
        for (let i = 0; i < a.length; i++){
            fetch(`http://localhost:3001/days/`, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    day: i+1
                }),
            }).then(res => {
                if (res.ok) {
                    console.log("good")
                }
            })
        }
        console.log(a);

                    
            }
    const delWord = () => {
        return (
            <></> //얘 만들자!!!!!
        )
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(window.confirm("삭제하시겠습니까?")){
            delDay();
            delWord();
            navigate('/');
        }
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <label>Day</label>
                <div className="input_area">
                    <select ref={dayRef}>
                        {days.map(day => (
                            <option key={day.id} value={day.day}>
                                {day.day}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="btn_del">Delete</button>
            </form>
        </>
    )




}

export default DeleteDay;