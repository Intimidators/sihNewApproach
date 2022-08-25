import React from 'react'
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';

const UploadSocialMediaContent = () => {

  return (
    <div style={{
      display: 'flex',
      margin: 'auto',
      width: 100,
      flexWrap: 'wrap',
      border: "2px solid red",
    }}>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
    </div>
  )
}

export default UploadSocialMediaContent