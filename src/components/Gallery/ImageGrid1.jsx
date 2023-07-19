import React, {useState} from 'react';
import useFirestore from '../../hooks/useFirestore'
import {motion} from 'framer-motion'


const ImageGrid1 = ({ setSelectedImg }) => {
    const {docs} = useFirestore('images');
    
  return (
        <div className='img-grid'>
            { docs && docs.map(doc => (
                <motion.div className='img-wrap' key={doc.id}
                    layout
                    whileHover={{opacity: 1 ,scale: 1.02}}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <img src={doc.url} alt='image unavailable'/>
                </motion.div>
            ))}


        </div>
  )      
}

export default ImageGrid1