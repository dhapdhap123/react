import dummy from "../db/data.json";
import { Link } from "react-router-dom";

export default function Daylist(){
    console.log(dummy);
    return (
        <ul className="list_day">
            {dummy.days.map(day => (
                <Link to={`/day/${day.day}`}><li key={day.id}>Day {day.day}</li></Link>
            ))}        
        </ul> 
    );   
}