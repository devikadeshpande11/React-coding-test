import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData3() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [idB, setIdB] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idB]);
  const clickB=()=>{
      setIdB(id);
  }
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

      <button onClick={clickB}>
        Fetch Title
      </button>
      <div>{posts.title}</div>
    </div>
  );
}
export default FetchData3;
