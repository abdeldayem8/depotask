import React, { useEffect, useState } from 'react'

const useFetchforpost = (url) => {

    const[posts,setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async () => {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error("Oh no, something went wrong!");
            }
            const data = await response.json();
            setPosts(data);
          } catch (error) {
            console.error(error.message); 
          }
        };
      
        fetchPosts();
      },[url]);
      return posts;

}

export default useFetchforpost
