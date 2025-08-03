// import {useState} from "react"
import "./rowPoster.scss";
// import { useDispatch } from "react-redux";
// import { showModalDetail } from "../../redux/modal/modal.actions";
// import { Link } from "react-router-dom";
// import {  FaPlay, FaChevronDown } from "react-icons/fa";
// import { MdReadMore } from "react-icons/md";



const RowPoster = (result) => {
  const {
    item: { title, original_name, original_title, name },
  } = result;
  const fallbackTitle = title || original_title || name || original_name;
  // const dispatch = useDispatch();

  
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
    <div className="Row__poster">
      <div className="image-wrapper">
        <img src={`${result.item?.images[0]}`} alt={fallbackTitle}  />
        <div className="Row__poster-title ">
          {result.item?.title}
        </div>
      </div>  
    </div>
 

    

  );
};
export default RowPoster;



