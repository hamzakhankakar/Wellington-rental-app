import {useState} from "react"
import "./rowPoster.scss";
import { useDispatch } from "react-redux";
import { showModalDetail } from "../../redux/modal/modal.actions";
// import { Link } from "react-router-dom";
// import {  FaPlay, FaChevronDown } from "react-icons/fa";
// import { MdReadMore } from "react-icons/md";



const RowPoster = (result) => {
  const {
    item: { title, original_name, original_title, name },
  } = result;
  const fallbackTitle = title || original_title || name || original_name;
  const dispatch = useDispatch();

  // const [isInfoOpen, setIsInfoOpen] = useState(false);
  
  // const handleToggleInfo = () => {
  //   setIsInfoOpen(prev => !prev);
  // };

  // const handleModalOpening = () => {
    // dispatch(showModalDetail({ ...result.item, fallbackTitle }));
  // };

  // const handleIconClick = (e) => {
  //   e.stopPropagation(); // prevent overlay toggle
  //   // You can add more logic here if needed
  // };

  return (
    <div
      className="Row__poster"
      // onClick={() => {
      //   handleToggleInfo();
      // }}
    >
      {/* Image wrapper */}
      <div className="image-wrapper">
        <img src={`${result.item?.images[0]}`} alt={fallbackTitle} />
        <div>{result.item?.trending}</div>
      </div>

      {/* Info overlay */}
      {/* <div
        className="Row__poster-info"
        style={{
          opacity: isInfoOpen ? 1 : 0,
          transform: isInfoOpen ? 'translateY(0)' : 'translateY(15%)',
          pointerEvents: isInfoOpen ? 'auto' : 'none',
        }}
        onClick={(e) => e.stopPropagation()} // prevent overlay from closing when clicking inside
      >
        {(result?.item.type === 'property' || result?.item.type === 'blog') && (
          <>
            <div className="Row__poster-info--iconswrp">
              {result?.item.type === 'property' && (
                <Link
                  className="Row__poster-info--icon icon--play"
                  onClick={handleIconClick}
                  to={`/play`}
                >
                  <FaPlay />
                </Link>
              )}

              {result?.item.type === 'property' && (
                <button
                  className="Row__poster-info--icon icon--toggleModal"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleModalOpening();
                  }}
                >
                  <FaChevronDown />
                </button>
              )}

              {result.item?.type === 'property' ? (
                <Link to={`/property/${result.item?.id}`} style={{ display: 'block' }}>
                  <span className="Row__poster-info--icon icon--toggleModal" onClick={handleIconClick}>
                    <MdReadMore size={'1em'} />
                  </span>
                </Link>
              ) : (
                <Link to={`/blog`} style={{ display: 'block' }}>
                  <span className="Row__poster-info--icon icon--toggleModal" onClick={handleIconClick}>
                    <MdReadMore size={'1em'} />
                  </span>
                </Link>
              )}
            </div>
            <div className="Row__poster-info--title">
              <h3>{fallbackTitle}</h3>
            </div>
          </>
        )}
      </div> */}
    </div>
  );
};
export default RowPoster;




// 3:4 (e.g., 300x400 pixels)
// 4:5 (e.g., 400x500 pixels)
// 2:3 (e.g., 200x300 pixels)
// 9:16 (used for mobile screens and stories)

// .portrait-container {
//   width: 300px; /* or any width you prefer */
//   aspect-ratio: 3 / 4; /* 3:4 aspect ratio */
//   overflow: hidden;
//   border-radius: 8px;
// }

// .portrait-container img {
//   width: 100%;
//   height: 100%;
//   object-fit: cover; /* ensures the image covers the container */
// }
