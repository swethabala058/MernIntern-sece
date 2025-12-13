import { useEffect, useState } from "react";
import axios from "axios";
const UseEffectAPI=()=>{
    const [postsParameter,setPostParameter]=useState([]);
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>{
        setPostParameter(res.data);
            console.log(postsParameter);
      }).catch(()=>{
        console.log("Can't fetch from the API")
      })
    },[])
    return(
        <div>
            <h1>useEffect API</h1>
            <p>It is going to fetch data from json typicode place holder</p>
            <ol>
                <p>The API values which fetched was </p>
                {postsParameter.map((post)=>(
                    <li key ={post.id}>{post.title}</li>
                ))}
                
            </ol>
        </div>

    )
}
export default UseEffectAPI;