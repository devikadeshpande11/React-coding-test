import React,{ useState,useEffect } from "react";
import axios from "axios";

function FetchData(){
    const [joke, setJokes] = useState([]);


    const apiLink = "https://icanhazdadjoke.com/";
    const fetchData = async () => {
        const res = await axios.get(`${apiLink}`, { headers: { Accept: "application/json" } });
        console.log(res.data.joke);
        setJokes([res.data.joke]);
    }
    return(
        <div>
            <button onClick={fetchData}>Load jokes</button>

{/*data from api goes here*/}
{joke && joke.map((j, index) => (
    <div className="data" key={index}>
     {j}
    </div>
))}

        </div>
    )
}
export default FetchData;