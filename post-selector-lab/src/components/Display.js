import { useState, useEffect } from "react";

function Display(props) {
  const [postObj, setPostObj] = useState(null);

  useEffect(() => {
    if (!postObj) {
      fetch("https://jsonplaceholder.typicode.com/posts" + props.postId)
        .then((res) => res.json())
        .then((postArr) => {
          setPostObj(postArr);
        });
    }
  });

  return (
      <div>
          {postObj ? <div><h1>{postObj.title}</h1>
          <p>{postObj.body}</p></div>}

      </div>
  )
}

export default Display;
