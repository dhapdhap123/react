import { useNavigate, useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

export default function Day(){
    const { day } = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    const days = useFetch(`http://localhost:3001/days?${day}`);
    const navigate = useNavigate();

    const onLeftClick = () => {
        if(days[day - 2]){
            navigate(`/day/${Number(day) - 1}`)
        }
    }
    const onRightClick = () => {
        if(days[day]){
            navigate(`/day/${Number(day) + 1}`)
        }
    }
    const onDeleteClick = () => {
        if(window.confirm("날짜를 삭제하시겠습니까?")){
            fetch(`http://localhost:3001/days/${day}`, {
                method : 'DELETE',
            }).then(res => {
                if(res.ok){
                    
                    console.log("삭제되었다!")


                    navigate("/")
                }
            });
        }
    }
    return (
    <>
        <div>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map(word => (
                    <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
            <br />
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <button onClick={onLeftClick}>◁</button>
                <button onClick={onDeleteClick} className="btn_del">X</button>
                <button onClick={onRightClick}>▷</button>
            </div>
        </div>
    </>
    );
}