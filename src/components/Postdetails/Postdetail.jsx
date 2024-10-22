import React from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading';
import useFetchpostdetail from '../../hooks/useFetchpostdetail';

const Postdetail = () => {

    const {postId} = useParams();
    const post = useFetchpostdetail(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  
    
      if (!post) {
        return <Loading/>
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
