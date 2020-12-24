import { useState , useEffect } from "react";
import RequestData from "./components/requestData";

function Home() {
  
  let [postsData , setPostsData] = useState([]);
  let postsURL = "https://jsonplaceholder.typicode.com/posts";
  
  useEffect( () => {
    RequestData(postsURL, setPostsData);
  } , [postsURL])
  
  console.log(postsData);
  return (
    <>
    {
      postsData.length > 0 && <ul className="post-list">
        {
          postsData.map(obj => (
            <li key={obj.id}>
            <h3>{obj.title}</h3>
            <p>{obj.body}</p>
            <a href={"/comments/" + obj.id}>Comments...</a>
            </li>
            ))
        }
      </ul>
      }
      </>
      )
    };
    
    export default Home;