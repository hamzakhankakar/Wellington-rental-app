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
        <img src={`${result.item?.images[0]}`} alt={fallbackTitle} 
          style={{
            height: result.item?.type === 'blog' ? '100%' :  result.item?.type === 'agent'? '90%' :'70%'
          }}
        />
        <div className="Row__poster-title ">
          {result.item?.title}
        </div>
       {result.item?.type ==="property" && (
        <>
        <div className="Row__poster-address">
          {result.item.address}
        </div>
        <div className="Row__poster-property-info">
          <div className="Row__poster-property-ammenities">
          <div className="bedroom-div">
            <span>Rooms : </span>
            {result.item.rooms}
          </div>
          <div className="bathroom-div">
            <span>Bath : </span>
            <span>{result.item.bath}</span>
          </div>
          </div>
         <div className="Row__poster-property-land-area">
         <div className="land-div">
            <span>Land : </span>
              {result.item.area} m <sup>2</sup> 
          </div>
         </div>
        </div>
        </>
       )}
        <div className="Row__poster-agent-contact">
          <span>Contact : </span>

          {result.item.agentNumber}  
        </div>
      </div>  
    </div>
 

    

  );
};
export default RowPoster;



