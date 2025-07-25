// import "./rowPoster.scss";
// import { useDispatch } from "react-redux";
// import { showModalDetail } from "../../redux/modal/modal.actions";
// import { Link } from "react-router-dom";
//  import {  FaPlay, FaChevronDown } from "react-icons/fa";
//  import { MdReadMore } from "react-icons/md";


// const RowPoster = result => {
// 	const {  item: { title, original_name, original_title, name,  
//   }
//    } = result;
// 	let fallbackTitle = title || original_title || name || original_name;
// 	const dispatch = useDispatch();
// 	const handleModalOpening = () => {
// 		dispatch(showModalDetail({ ...result.item, fallbackTitle,}));
// 	}
// 	const handlePlayAction = event => {
// 		event.stopPropagation();

// 	};

// 	return (

//     <div  className="Row__poster"  >
//         <div className="item">
//     <img  src={`${result.item?.images[0]}`}
//         alt={fallbackTitle} />
//     <div>
      
//       {result.item?.trending}
//     </div>
//  </div>
     

       
// 		<div className="Row__poster-info" >
// 		{result?.item.type === "property" && (
//   <div className="Row__poster-info--iconswrp">
//     <Link
//       className="Row__poster-info--icon icon--play"
//       onClick={handlePlayAction}
//       to={`/play`}
//     >
//       <FaPlay />
//     </Link>

//     <button className="Row__poster-info--icon icon--toggleModal" onClick={handleModalOpening}>
//       <FaChevronDown  />
//     </button>

//     <Link to={`/property/${result.item?.id}`} style={{ display: 'block' }}>
//       {/* <button
//                     className="Banner__button "
//                   > */}


                    
//                     <span className="Row__poster-info--icon icon--toggleModal"> 
                      
//                     <MdReadMore size={"1em"} />
//                     </span>
                  
//                     </Link>
//   </div>
// )}

// 		</div>
    
//   </div>
	
// 	);
// };

// export default RowPoster;
	

import "./rowPoster.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showModalDetail } from "../../redux/modal/modal.actions";
import { Link } from "react-router-dom";
import { FaPlay, FaChevronDown } from "react-icons/fa";
import { MdReadMore } from "react-icons/md";

const RowPoster = (result) => {
 
  
  const {
    item: { title, original_name, original_title, name },
  } = result;
  let fallbackTitle = title || original_title || name || original_name;
  const dispatch = useDispatch();

  const handleModalOpening = () => {
    dispatch(showModalDetail({ ...result.item, fallbackTitle }));
  };

  const handlePlayAction = (event) => {
    event.stopPropagation();
  };
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleTouchToggle = () => {
    setIsOverlayOpen(prev => !prev);
  };
  return (
    <div
      className={`swiper-slide ${isOverlayOpen ? 'open' : ''}`}
      onTouchStart={handleTouchToggle}
    >
    <div className="Row__poster"
    >

      {/* Property card */}
      <div className="image-wrapper">        
        <img src={`${result.item?.images[0]}`} alt={fallbackTitle} />
        <div>{result.item?.trending}</div>
      </div>

      <div className={`Row__poster-info 
        
        `}>        
           {(result?.item.type === "property" || result?.item.type === "blog") && (
          <>
              <div className="Row__poster-info--iconswrp">
                 { result?.item.type === "property" && <Link
                  className="Row__poster-info--icon icon--play"
                  onClick={handlePlayAction}
                  to={`/play`}
                >
                  <FaPlay />
                </Link>}

              {  result?.item.type === "property" &&  <button
                  className="Row__poster-info--icon icon--toggleModal"
                  onClick={handleModalOpening}
                >
                  <FaChevronDown />
                </button>}

                {result.item?.type === "property" ?
                <Link
                to={`/property/${result.item?.id}`}
                style={{ display: "block" }}
              >
            

                <span className="Row__poster-info--icon icon--toggleModal">
                  <MdReadMore size={"1em"} />
                </span>
              </Link>:
              <Link
              to={`/blog`}
              style={{ display: "block" }}
            >
          

              <span className="Row__poster-info--icon icon--toggleModal">
                <MdReadMore size={"1em"} />
              </span>
            </Link>}
              </div>
              <div className="Row__poster-info--title">
              <h3>{fallbackTitle}</h3>
            </div>
         </>
        )}
      </div>
    </div>

    </div>
  );
};

export default RowPoster;
