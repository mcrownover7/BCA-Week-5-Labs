import { useState, useEffect } from "react";

function List(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!posts.length) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then((postArr) => {
          setPosts(postArr);
        })
    }
  });

  console.log(posts);

  return (
    <ul>
          {posts.map((postObj) => {
              return <li key= {postObj.id}>{postObj.title}</li>
          })}
    </ul>
  );
}

export default List;
