import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Daylist(){
    const days = useFetch('http://localhost:3001/days');

    return (
        <ul className="list_day">
            {days.map(day => (
                <Link to={`/day/${day.day}`} key={day.id}><li key={day.id}>Day {day.day}</li></Link>
            ))}        
        </ul> 
    );   
}