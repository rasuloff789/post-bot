import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import RequestData from "./components/requestData";

function Comment() {
  let {postID} = useParams();

  let [commentData , setCommentData]  = useState([]);
 
  let commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postID}`

  useEffect( () => {
    RequestData(commentUrl, setCommentData);
  } , [commentUrl])

  console.log(commentData);
  return (
    <>
        <p className="comment-top">Comment ID {postID}</p>
    {
      commentData.length > 0 && (
        <ul className="post-list">
          {
            commentData.map(obj => (
              <li key={obj.id}>{obj.body}</li>
            ))
          }
        </ul>
      )
    }
    {
      !(commentData.length > 0) && (
        <p>Not found</p>
      )
    }
    </>
  )
};

export default Comment;