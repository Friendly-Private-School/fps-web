import React, { useEffect, useState } from 'react';
import { query, collection, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const Blog = () => {

    const postsCollectionRef = collection(db, 'posts')

    const [postList, setPostList] = useState([]);

    useEffect(() =>{
        const getPosts = async () =>{
            const postsQuery = query(postsCollectionRef, orderBy("createdAt", "desc"));
            const data = await getDocs(postsQuery);
            setPostList(data.docs.map((doc) =>({...doc.data(), id: doc.id})))
        };
        getPosts();
    });

  return (
    <div className='w-full  bg-gray-200 pt-10 pb-32'>

        <div className=' w-72 xs:w-96 h-20 text-white bg-gray-600 border-l-8 border-accent mx-auto grid place-items-center'>
            <h1 className='text-3xl xs:text-4xl '>School Blog Posts</h1>
        </div>

        <div className=' w-full  mt-10 md:px-20 sm:px-16 px-10 flex flex-col gap-10'>
            {postList.map((post) =>{
                return(
                    <div className='text-white bg-slate-800 xs:px-10 px-5 pt-10 pb-5 rounded-md'>
                        <div>
                            <h1 className='text-4xl'>{post.title}</h1>
                        </div>
                        <div className='pt-5 pb-14'>
                            <div>
                                {post.postText}
                            </div>
                        </div>
                        <div className='flex sm:flex-row flex-col justify-between pb-10'>
                            <p>{post.publishDay}</p>
                            <p className='text-xl'>@ {post.author.postAuthor}</p>
                        </div>
                    </div>
                )
            })}
        </div>



    </div>
  )
}

export default Blog