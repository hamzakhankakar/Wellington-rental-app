import { useParams } from 'react-router-dom';
import { useState, useLayoutEffect  } from "react";
import { myrentalData } from "../../data/rentaldata"
import { motion } from "framer-motion"
import { staggerOne, modalFadeInUpVariants } from "../../motionUtils";


const RentalPage = () => {

  const { id } = useParams();

  const property = myrentalData.find(obj => obj.id == id);
  
  const product = {
    images: property.images,
  };
  // Scroll to top when component mounts
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }, []);
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  
  // Insert video thumbnail as the first thumbnail
  const [activeIndex, setActiveIndex] = useState(0);

  //   // Helper to check if current is video
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="product-detail-container">
      {/* Main product section */}
      <div className="product-main">
        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="main-image">
            <img src={product.images[activeIndex]} alt={product.name} />
          </div>
          <div className="thumbnails">
            {product.images.map((img, index) => (

              <div
                key={index}
                className={`thumbnail-item ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
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
