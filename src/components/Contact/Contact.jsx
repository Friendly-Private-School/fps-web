import React, { useState } from 'react';
import useFirestore from '../../hooks/useFirestore'
import { projectFirestore, timestamp } from '../../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
    
    const navigate = useNavigate();

    const [details, setDetails] = useState({
        name : '',
        email : '',
        message : '',
    });

    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.name] : e.target.value,
            [e.target.email] : e.target.value,
            [e.target.message] : e.target.value,
        });
    };

    const handleSubmit = async () => {
        console.log(details);

         // Generate a unique identifier for the new message
        const messageId = uuidv4();

        // Create a new document with the generated ID and message details
        const newMessage = {
            name: details.name,
            email: details.email,
            message: details.message,
            timestamp: new Date().toISOString(),
            messageId: uuidv4()
        };

        try {
            await setDoc(doc(projectFirestore, 'contact-us', newMessage.timestamp), newMessage);
            console.log('Message successfully saved to Firestore');
            window.alert('Your message has been successfully sent! Thank you.');
            navigate('/');
          } catch (error) {
            console.error('Error saving message:', error);
          }
        
    }

  return (
    <div className='bg-white w-full  flex justify-center items-center pt-2 pb-16'>
        <form action="" className='container h-1/2 pt-2 pb-20 rounded flex flex-col gap-5 sm:px-0 px-5 '>
            <h1 className='text-4xl'>Contact Us</h1>
            <p>Ask a question or leave a message!</p>
            <div className='w-full flex sm:flex-row flex-col gap-5 justify-center items-center'>
                <input type="text" id='name' name='name' value={details.name} onChange={handleChange} placeholder='Name' className='px-4 py-2 bg-gray-200 rounded-md sm:w-auto w-full' />
                <input type="email" id='email' name='email' value={details.email} onChange={handleChange} placeholder='Email' className='px-4 py-2 bg-gray-200 rounded-md sm:w-auto w-full' />
            </div>
            <div className='w-full'>
                <textarea value={details.message} onChange={handleChange} name='message' placeholder='Leave a message or question' className='sm:w-[430px] w-full h-32 rounded px-4 py-2 bg-gray-200'>
                </textarea>
            </div>
            <div>
                <button type='button' className='px-4 py-2 bg-[#1766c1] text-white sm:w-[430px] w-full rounded' onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default Contact