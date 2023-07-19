import React, { useEffect, useState } from 'react';
import {FaPencilAlt} from 'react-icons/fa';
import { addDoc, collection, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../firebase/config'
import { useNavigate } from 'react-router-dom';


const CreatePost = ({isAuth}) => {

  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [postAuthor, setPostAuthor] = useState("");

  let navigate = useNavigate()

  const postsCollectionRef = collection(db, "posts");
  const createPost = async () => {

    const timestamp = serverTimestamp();
    const uploadDate = new Date();
    const uploadDay = uploadDate.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const postDocRef = doc(postsCollectionRef, new Date().toISOString())

    await setDoc(postDocRef, {
      title,
      postText,
      author: {postAuthor, id: auth.currentUser.uid, username: auth.currentUser.displayName},
      createdAt: timestamp,
      publishDay: uploadDay,
    });
    window.alert("Blog successfully posted, thank you!")
    navigate("/blog");
  };

  useEffect (() =>{
    if(!isAuth){
      navigate("/login");
    }
  }, []);

  return (
    <div className='w-full h-[100vh] bg-gray-300 flex items-center'>
      <div className='md:w-[700px] sm:w-[480px] w-[320px] rounded-md bg-white mx-auto shadow-lg'>
          <div className='bg-[#072033] text-white rounded-t-md'>
            <h1 className='text-4xl text-center py-5'>Create a Blog Post</h1>
          </div>

          <div className='w-full  py-10 flex flex-col gap-10 px-3'>
            <div className='w-full flex sm:justify-center justify-start'>
              <div className='w-1/2  flex'>
                <h1 className='bg-green-600 px-4 py-2 rounded-l-md text-white'>Title</h1>
                <input onChange={(e) => {setTitle(e.target.value)}} type="text" name="" id=""  className='md:w-[400px] sm:w-[180px] px-4 outline-none rounded-r-md border-2 border-green-600 bg-slate-100'/>
              </div>
            </div>
            <div className='w-full flex md:justify-end sm:justify-center justify-start'>
              <div className='md:w-5/6 sm:w-5/6 w-full  flex'>
                <div>
                    <h1 className='bg-green-600 px-4 py-2 rounded-l-md text-white'>Post</h1>
                </div>
                <textarea onChange={(e) => {setPostText(e.target.value)}} type="text" name="" id=""  className=' h-60 md:w-[400px] sm:w-[500px] px-4 py-2 outline-none rounded-r-md border-2 border-green-600 bg-slate-100'/>
              </div>
            </div>
            <div className='w-full flex sm:justify-center justify-start'>
              <div className='w-1/2  flex'>
                <h1 className='bg-green-600 px-4 py-2 rounded-l-md text-white'>Author</h1>
                <input onChange={(e) => {setPostAuthor(e.target.value)}} type="text" name="" id=""  className='md:w-[400px] sm:w-[180px] px-4 outline-none rounded-r-md border-2 border-green-600 bg-slate-100'/>
              </div>
            </div>
          </div>

          <div className='w-full grid  pb-7'>
            <button onClick={createPost} className='mx-auto px-4 py-2 bg-[#1877f2] hover:bg-[#1259b6] rounded-md hover:shadow-sm text-white flex items-center gap-2 uppercase'>
              <span className=' pr-2 border-r-2 border-gray-200'>Publish</span><span><FaPencilAlt /></span>
            </button>
          </div>

      </div>
    </div>
  )
}

export default CreatePost