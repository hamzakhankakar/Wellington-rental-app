import { useParams } from 'react-router-dom';
import { useState } from "react";
import { myrentalData } from "../../data/rentaldata"
import { motion } from "framer-motion"
import { staggerOne, modalFadeInUpVariants } from "../../motionUtils";


const RentalPage = () => {

  const { id } = useParams();

  const property = myrentalData.find(obj => obj.id == id);
  // const propertyImages = property.images.map((pro)=>{
  //   return pro.images
  // })
  const product = {
    images: property.images,
  };

  // Video with a thumbnail
  const videoUrl = property.video;
  

  // For demonstration, using a static thumbnail
  const videoThumbnailImage = "https://via.placeholder.com/150?text=Video+Thumbnail";

  // Insert video thumbnail as the first thumbnail
  const combinedImages = [videoThumbnailImage, ...product.images];
  const [activeIndex, setActiveIndex] = useState(0);

  //   // Helper to check if current is video
  const isVideo = (index) => index === 0;
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="product-detail-container">
      {/* Main product section */}
      <div className="product-main">
        {/* Image Gallery */}
        <div className="image-gallery">
          {/* <div className="main-image">
            <p className='trending'>{property.trending}</p>
            <img src={product.images[activeIndex]} alt={product.name} />
          </div> */}
          {/* <div className="thumbnails">
            {product.images.map((img, index) => (

              <div
                key={index}
                className={`thumbnail-item ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div> */}
          <div className="main-image">
            <p className='trending'>{property.trending}</p>

            {isVideo(activeIndex) ? (
             
              <iframe
                width="100%"
                height="500"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={combinedImages[activeIndex]}
                alt="Product"
              />
            )}
          </div>
          <div className="thumbnails">
            {combinedImages.map((img, index) => (
              <div
                key={index}
                className={`thumbnail-item ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleThumbnailClick(index)}
              >
                {isVideo(index) ? (
                  // Thumbnail for video
                  <img src={img} alt="Video Thumbnail" width="50" height="50" style={{ objectFit: 'cover' }} />
                ) : (
                  <img src={img} alt={`Thumbnail ${index + 1}`} width="50" />
                )}
              </div>
            ))}
          </div>
        </div>

        <motion.div variants={staggerOne} initial="initial" animate="animate" exit="exit" className="Modal__info--wrp">
          <motion.h3 variants={modalFadeInUpVariants} className="Modal__info--title"></motion.h3>
          <motion.p variants={modalFadeInUpVariants} className="Modal__info--description"></motion.p>
          <motion.hr variants={modalFadeInUpVariants} className="Modal__info--line" />


          <motion.h4 variants={modalFadeInUpVariants} className="Modal__info--otherTitle">Infomation about  <b>Agent</b></motion.h4>
          <div className='landingpage__center'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={property.agentImage} width={40} height={40} />

              <span>{property.agentName}</span>
            </div>
            <div>
              {property.phone === "" ? property.mobile : property.phone}
            </div>
          </div>
          <motion.hr variants={modalFadeInUpVariants} className="Modal__info--line" />



          <motion.h4 variants={modalFadeInUpVariants} className="Modal__info--otherTitle">Infomation about  <b>{property.title}</b></motion.h4>


          <motion.h4 variants={modalFadeInUpVariants} className="Modal__info--otherTitle">Amenities </motion.h4>
          <div className='landingpage__center'>

          </div>

          {property.ammenities.map((amenity, index) => (
            <div key={index}>
              <span>{Object.keys(amenity)[0]}</span>: {amenity[Object.keys(amenity)[0]]}

              {/* {ammenity} */}
            </div>
          ))}
          <motion.hr variants={modalFadeInUpVariants} className="Modal__info--line" />



          <motion.h4 variants={modalFadeInUpVariants} className="Modal__info--otherTitle">Price </motion.h4>
          <span>{property.price}</span>
          <motion.hr variants={modalFadeInUpVariants} className="Modal__info--line" />



          <motion.div variants={modalFadeInUpVariants} className="Modal__info--row">
            <span className=''>{"Description "}</span>
            <span
              className="Modal__info--row-description"
              dangerouslySetInnerHTML={{ __html: property.description }}
            />
          </motion.div>


         
        </motion.div>
      </div>

      {/* Additional info or reviews can go here */}
    </div>
  );
};

export default RentalPage;
