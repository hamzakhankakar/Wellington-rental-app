import React, { useState,useEffect } from 'react';


const ImageUploader = ({ mode = 'single' ,clear = false}) => {
  const [images, setImages] = useState([]);
  useEffect(()=>{
    if (clear) return
    setImages([])
    
  },[clear])

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (mode === 'single') {
      const file = files[0];
      if (file && file.type.startsWith('image/')) {
        setImages([{
          file,
          preview: URL.createObjectURL(file),
        }]);
      }
    } else if (mode === 'multiple') {
      const validImages = files.filter(file => file.type.startsWith('image/'));
      const newImages = validImages.map(file => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setImages(prevImages => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    URL.revokeObjectURL(newImages[index].preview); // Clean up URL
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div style={{   }}>
      {/* <h3>{mode === 'single' ? 'Upload Profile Image' : 'Upload Multiple Images'}</h3> */}
      <label>{mode === 'single' ? 'Upload Profile Image' : 'Upload Multiple Images'}</label>


      {/* Show all selected images */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
        {images.length > 0 && (
          images.map((img, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <img
                src={img.preview}
                alt={`Preview ${index + 1}`}
                style={{ width: '100px', height: '100px', 
                  // borderRadius: '50%',
                  border: "none", objectFit: 'cover' }}
              />
              <button
                onClick={() => handleRemoveImage(index)}
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  background: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                &times;
              </button>
            </div>
          ))
        ) 
        // : (
        //   <p>No images uploaded</p>
        // )
        }
      </div>

      {/* File input */}
      <input
        type="file"
        accept="image/*"
        multiple={mode === 'multiple'}
        onChange={handleImageChange}
        style={{ marginTop: '10px', width:"100%" }}
      />
    </div>
  );
};

export default ImageUploader;