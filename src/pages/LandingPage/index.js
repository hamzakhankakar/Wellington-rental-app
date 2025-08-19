import { useParams } from 'react-router-dom';
import { useState } from "react";
import "./landingpage.scss";
import { myallPropertyData } from "../../data/allPropertiesdata";
import { FaStreetView } from "react-icons/fa";
import { FaSatellite } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { staggerOne, modalFadeInUpVariants } from "../../motionUtils";


const LandingPage = () => {

  const { id } = useParams();

  const property = myallPropertyData.find(obj => obj.id == id);
  const product = { images: property.images };

  // Video with a thumbnail
  // const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";
  const videoUrl = property.video;
  // const videoThumbnail = "https://img.youtube.com/vi/VIDEO_ID/0.jpg"; // Replace with your thumbnail URL or static image

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
  console.log("videoUrrl", videoUrl)
  console.log("isVideo", isVideo)
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

            {/* {isVideo(activeIndex) ? (
              // <video
              //   src={videoUrl}
              //   controls
              //   autoPlay
              //   style={{ width: '100%', height: '500px' }}
              // />
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
            )} */}
            {isVideo(activeIndex) && videoUrl !== "" ? (
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


          <motion.h4 variants={modalFadeInUpVariants} className="Modal__info--otherTitle">Information about  <b>Agent</b></motion.h4>
          <div className='landingpage__center'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={property.agent.agentImage} width={40} height={40} />

              <span>{property.agent.agentName}</span>
            </div>
            <div>
              {property.agent.contact.Phone === "" ? property.agent.contact.Mobile : property.agent.contact.Phone}
            </div>
          </div>
          <motion.hr variants={modalFadeInUpVariants} className="Modal__info--line" />



          <motion.h4 variants={modalFadeInUpVariants} className="Modal__info--otherTitle">Information about  <b>{property.title}</b></motion.h4>


          <motion.h4 variants={modalFadeInUpVariants} className="Modal__info--otherTitle">Map Directions </motion.h4>
          <div className='landingpage__center'>
            <div>
              <span className=''>Street View: </span>
              <Link
                to={`/map/aerial-view?lat=${property.lat}&lon=${property.lon}`} onClick={(event) => {
                  event.stopPropagation(); // prevent event bubbling
                  // handleModalClose();     // close the modal
                }}
              >
                <span className="Modal__info--row-description"><FaStreetView /></span>
              </Link>
            </div>
            <div>
              <span className=''>Aerial View: </span>
              <Link
                to={`/map/aerial-view?lat=${property.lat}&lon=${property.lon}`}

                onClick={(event) => {
                  event.stopPropagation(); // prevent event bubbling
                }}
              >
                <span className="Modal__info--row-description">
                  <FaSatellite />
                </span>
              </Link>
            </div>
          </div>
          <motion.hr variants={modalFadeInUpVariants} className="Modal__info--line" />

          <motion.h4 variants={modalFadeInUpVariants} className="Modal__info--otherTitle">Amenities </motion.h4>
          <div className='landingpage__grid'>
            {Object.entries(property.features).map(([key, value]) => (
              <div key={key}>
                <span>{key}</span>: {value}
              </div>
            ))}
          </div>

          <motion.hr variants={modalFadeInUpVariants} className="Modal__info--line" />
          <div className='landingpage__center'>

          </div>
          <motion.h4 variants={modalFadeInUpVariants} className="Modal__info--otherTitle">Price <span>{property.price}</span></motion.h4>
          {/* <span>{property.price}</span> */}
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

    </div>
  );
};

export default LandingPage;
