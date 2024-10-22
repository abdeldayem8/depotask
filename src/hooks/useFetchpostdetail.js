import React, { useEffect, useState } from 'react'


const useFetchpostdetail = (url,postId) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchPost = async () => {
     try {
       const response = await fetch(url);
       if (!response.ok) {
         throw new Error("Failed to fetch post");
       }
       const data = await response.json();
       setPost(data);
     } catch (error) {
       console.error("Error fetching post:", error);
     } finally {
       setLoading(false); 
     }
   };
 
   fetchPost();
       }, [postId]);
      
       return post;

}

export default useFetchpostdetail
