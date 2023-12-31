import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpg', 'image/jpeg']

  const handleFileChange = (e) => {
    let selected = e.target.files[0];

    if(selected && types.includes(selected.type)){
      setFile(selected);
      setError('');
    }
    else{
      setFile(null);
      setError('Please select an image file (png, jpg or jpeg)')
    }
  }

  return (
    <form>
        <label>
          <input type="file" onChange={handleFileChange} />
          <span>+</span>
        </label>
        
        <div>
          { error && <div className='error'>{error}</div>}
          { file && <div>{ file.name }</div> }
          { file && <ProgressBar file={file} setFile={setFile} />}
        </div>
    </form>
  )
}

export default UploadForm