import React from 'react'
import { Link } from 'react-router-dom';
import useFetchforpost from '../../hooks/useFetchforpost';
const Posts = () => {

  const posts = useFetchforpost("https://jsonplaceholder.typicode.com/posts")

  return (
    <>
    <div className="container mx-auto">
   <p className="font-bold text-lg my-4 text-center">Posts</p>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-1">
     {posts.map((post) => (
       <Link to={`/posts/${post.id}`} key={post.id}
         className="bg-white p-4 shadow-md rounded-lg border border-gray-200"
       >
         <h1 className="font-semibold text-xl mb-2">{post.title}</h1>
         <p className="text-gray-700">{post.body}</p>
       </Link>
     ))}
   </div>
 </div>
     </>
  )
}

export default Posts
