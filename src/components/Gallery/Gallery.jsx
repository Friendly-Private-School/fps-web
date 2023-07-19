import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageGrid1 from './ImageGrid1'
import Modal from './Modal'
import UploadForm from './UploadForm'

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);


  return (
    <div className='w-full bg-[#ffffff] text-black'>
      <div className='w-full h-20 px-10 bg-gray-200 flex items-center'>
        <div className='flex gap-7 '>
          <div className='text-slate-400 rounded-md cursor-pointer hover:text-white px-4 py-2 bg-[#072033]'>School Photos</div>
          </div>
      </div>

      <div className='max-w-[960px] mx-auto'>
            <UploadForm />
            <ImageGrid1 setSelectedImg={setSelectedImg}/>
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
            
      </div>
        
    </div>
  )
}

export default Gallery