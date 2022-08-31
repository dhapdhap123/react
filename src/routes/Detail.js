import React from 'react';
import { useParams } from "react-router-dom";

function Detail(){
    let {id} = useParams();
    console.log(id);
    console.log("기모띠")
    return <h1>Detail</h1>;
}

export default Detail;