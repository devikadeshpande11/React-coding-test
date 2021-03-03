import React, { useState, useEffect } from "react";
import axios from "axios";
function FetchData1() {
  const [data, setMyData] = useState([]);
  useEffect(() => {
    //var url = "https://icanhazdadjoke.com/";
    // var options = {
    //     method: 'GET',
    //     headers: {
    //       "Accept" : "application/json"
    //     }
    //   };
    fetch("https://icanhazdadjoke.com/search", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMyData([data]);
      });
  });
  return (
    <div>
      {data.map((items) => (
        <ul>
          <li>{items.joke}</li>
        </ul>
      ))}
    </div>
  );
}
export default FetchData1;
