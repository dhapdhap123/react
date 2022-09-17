import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";


function CreateDay(){
    const days = useFetch("http://localhost:3001/days")
    const navigate = useNavigate();

    const onClick = () => {
        if(window.confirm("날짜를 추가하시겠습니까?")){
            const newDate = days.length + 1

            fetch(`http://localhost:3001/days/`, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    day: newDate,
                }),
            }).then(res => {
                if (res.ok) {
                    alert("Day가 추가되었습니다!")
                    navigate(`/day/${newDate}`)
                }
            })

        }
        
        
    }
    return (
        <div>
            <h3>현재 일 수 : {days.length}일</h3>
            <button onClick={onClick}>Day 추가</button>
        </div>
    )
};

export default CreateDay;