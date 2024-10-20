import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Postdetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null);
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
   
    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(data => setPost(data))
          .catch((error) => console.error(error));
      }, [postId]);
    
      if (!post) {
        return <p>Loading...</p>;
      }
  return (
    <div className="container mx-auto my-8">
    <div className="bg-white p-6 shadow-md rounded-lg border border-gray-200">
      <h1 className="font-bold text-2xl mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  </div>
  )
}

export default Postdetail
