// import {useState} from "react"
import "./rowPoster.scss";
// import { useDispatch } from "react-redux";
// import { showModalDetail } from "../../redux/modal/modal.actions";
import { Link } from "react-router-dom";
// import {  FaPlay, FaChevronDown } from "react-icons/fa";
// import { MdReadMore } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineBedroomParent } from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";
// import { GiHomeGarage } from "react-icons/gi";<GiHomeGarage />
// import { TbMathXFloorDivideY } from "react-icons/tb";







const RowPoster = (result) => {
  const {
    item: { title, original_name, original_title, name ,id},
  } = result;
  const fallbackTitle = title || original_title || name || original_name;
  // const dispatch = useDispatch();
  console.log(fallbackTitle)

  
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

    <>
    


    {
      result.item.type === "agent" ?(
        <div className="Row__poster" >
     
      <div className= "image-wrapper-agent">
        <img src={`${result.item?.images[0]}`} alt={fallbackTitle} 
        />
        <div className="Row__poster-title ">
          {result.item?.title}
        </div>
      </div>  
        
      
        <div className ="property-detail">
        
        <div className="Row__poster-property-info">
          <div className="">
          {/* <span>Name : </span> */}

{result.item.title}
          </div>
         <div className="" >
          <span><CiMobile3 />
          : </span>

          {result.item.phone === "" ? result.item.mobile : result.item.phone}
          </div>
         
        </div>
        {/* <div className="Row__poster-agent-contact">
          <span>Phone : </span>

          {result.item.phone}  
        </div> */}
        </div>
    </div>
      ):(
          
          <div className="Row__poster" >
           <div 
             className= {`${
                        result.item?.type === "property"
                          ? "image-wrapper-property"
                          :  "image-wrapper-blog"
                      }`}
             >
              {result.item.type === "property" ? 
          <Link to={`/property/${id}`}> 
            <img src={`${result.item?.images[0]}`} alt={fallbackTitle} 
             />
          </Link>
              : 
              <img src={`${result.item?.images[0]}`} alt={fallbackTitle} 
             />
              }

             
             <div className="Row__poster-title ">
               {result.item?.title}
             </div>
           </div> 
           {result.item.type === "property" && 
            <Link to={`/property/${id}`}> 

             <div className ="property-detail">
             <div className="Row__poster-address">
              {result.item.address}
             </div>
             <div className="Row__poster-property-info">
               <div className="Row__poster-property-ammenities">
               <div className="bedroom-div">
                 <span><MdOutlineBedroomParent />
                 : </span>
                 {result.item.rooms}
               </div>
               <div className="bathroom-div">
                 <span><LiaBathSolid />
                 : </span>
                 <span>{result.item.bath}</span>
               </div>
               </div>
              <div className="Row__poster-property-land-area">
              <div className="land-div">
                 {/* <span>Land
                 : </span>
                   {result.item.area} m <sup>2</sup>  */}
               </div>
              </div>
              
             </div>
             <div className="Row__poster-agent-contact">
               <span><CiMobile3 />: </span>
     
               {result.item.phone === ""? result.item.mobile :result.item.phone}  
             </div>
             </div>
             </Link>
             
             }
         </div>
      )
     
   
    }


   
    
    </>

  );
};
export default RowPoster;





// // import {useState} from "react"
// import "./rowPoster.scss";
// // import { useDispatch } from "react-redux";
// // import { showModalDetail } from "../../redux/modal/modal.actions";
// import { Link } from "react-router-dom";
// // import {  FaPlay, FaChevronDown } from "react-icons/fa";
// // import { MdReadMore } from "react-icons/md";



// const RowPoster = (result) => {
//   const {
//     item: { title, original_name, original_title, name ,id},
//   } = result;
//   const fallbackTitle = title || original_title || name || original_name;
//   // const dispatch = useDispatch();
//   console.log(fallbackTitle)

  
//   // const handleToggleInfo = () => {
//   //   setIsInfoOpen(prev => !prev);
//   // };

//   // const handleModalOpening = () => {
//     // dispatch(showModalDetail({ ...result.item, fallbackTitle }));
//   // };

//   // const handleIconClick = (e) => {
//   //   e.stopPropagation(); // prevent overlay toggle
//   //   // You can add more logic here if needed
//   // };

//   return (

//     <>
//     <Link to={`/property/${id}`}> 
//      <div className="Row__poster" >
     
//       <div 
//         className= {`${
//           result.item?.type === "property"
//             ? "image-wrapper-property"
//             : result.item?.type === "agent"
//             ? "image-wrapper-agent"
//             : "image-wrapper-blog"
//         }`}
//         >
//         <img src={`${result.item?.images[0]}`} alt={fallbackTitle} 
//         />
//         <div className="Row__poster-title ">
//           {result.item?.title}
//         </div>
//       </div>  
        
//       {result.item?.type ==="property" && (
//         <div className ="property-detail">
//         <div className="Row__poster-address">
//          {result.item.address}
//         </div>
//         <div className="Row__poster-property-info">
//           <div className="Row__poster-property-ammenities">
//           <div className="bedroom-div">
//             <span>Rooms : </span>
//             {result.item.rooms}
//           </div>
//           <div className="bathroom-div">
//             <span>Bath : </span>
//             <span>{result.item.bath}</span>
//           </div>
//           </div>
//          <div className="Row__poster-property-land-area">
//          <div className="land-div">
//             <span>Land : </span>
//               {result.item.area} m <sup>2</sup> 
//           </div>
//          </div>
         
//         </div>
//         {/* <div className="Row__poster-agent-contact">
//           <span>Phone : </span>

//           {result.item.phone}  
//         </div> */}
//         </div>
//        )}
//       {result.item?.type ==="agent" && (
//         <div className ="property-detail">
//         {/* <div className="Row__poster-address">
//          {result.item.address}
//         </div> */}
//         <div className="Row__poster-property-info">
//           <div className="">
//           <span>Name : </span>

// {result.item.title}
//           </div>
//          <div className="" style={{border: "1px solid black"}}>
//           <span>Phone : </span>

//           {result.item.phone === "" ? result.item.mobile : result.item.phone}
//           </div>
         
//         </div>
//         {/* <div className="Row__poster-agent-contact">
//           <span>Phone : </span>

//           {result.item.phone}  
//         </div> */}
//         </div>
//        )}
//     </div>
//   </Link>
//     <Link to={`/property/${id}`}> 
//      <div className="Row__poster" >
     
//       <div 
//         className= {`${
//           result.item?.type === "property"
//             ? "image-wrapper-property"
//             : result.item?.type === "agent"
//             ? "image-wrapper-agent"
//             : "image-wrapper-blog"
//         }`}
//         >
//         <img src={`${result.item?.images[0]}`} alt={fallbackTitle} 
//         />
//         <div className="Row__poster-title ">
//           {result.item?.title}
//         </div>
//       </div>  
        
//       {result.item?.type ==="property" && (
//         <div className ="property-detail">
//         <div className="Row__poster-address">
//          {result.item.address}
//         </div>
//         <div className="Row__poster-property-info">
//           <div className="Row__poster-property-ammenities">
//           <div className="bedroom-div">
//             <span>Rooms : </span>
//             {result.item.rooms}
//           </div>
//           <div className="bathroom-div">
//             <span>Bath : </span>
//             <span>{result.item.bath}</span>
//           </div>
//           </div>
//          <div className="Row__poster-property-land-area">
//          <div className="land-div">
//             <span>Land : </span>
//               {result.item.area} m <sup>2</sup> 
//           </div>
//          </div>
         
//         </div>
//         {/* <div className="Row__poster-agent-contact">
//           <span>Phone : </span>

//           {result.item.phone}  
//         </div> */}
//         </div>
//        )}
//       {result.item?.type ==="agent" && (
//         <div className ="property-detail">
//         {/* <div className="Row__poster-address">
//          {result.item.address}
//         </div> */}
//         <div className="Row__poster-property-info">
//           <div className="">
//           <span>Name : </span>

// {result.item.title}
//           </div>
//          <div className="" style={{border: "1px solid black"}}>
//           <span>Phone : </span>

//           {result.item.phone === "" ? result.item.mobile : result.item.phone}
//           </div>
         
//         </div>
//         {/* <div className="Row__poster-agent-contact">
//           <span>Phone : </span>

//           {result.item.phone}  
//         </div> */}
//         </div>
//        )}
//     </div>
//   </Link>
//     <Link to={`/property/${id}`}> 
//      <div className="Row__poster" >
     
//       <div 
//         className= {`${
//           result.item?.type === "property"
//             ? "image-wrapper-property"
//             : result.item?.type === "agent"
//             ? "image-wrapper-agent"
//             : "image-wrapper-blog"
//         }`}
//         >
//         <img src={`${result.item?.images[0]}`} alt={fallbackTitle} 
//         />
//         <div className="Row__poster-title ">
//           {result.item?.title}
//         </div>
//       </div>  
        
//       {result.item?.type ==="property" && (
//         <div className ="property-detail">
//         <div className="Row__poster-address">
//          {result.item.address}
//         </div>
//         <div className="Row__poster-property-info">
//           <div className="Row__poster-property-ammenities">
//           <div className="bedroom-div">
//             <span>Rooms : </span>
//             {result.item.rooms}
//           </div>
//           <div className="bathroom-div">
//             <span>Bath : </span>
//             <span>{result.item.bath}</span>
//           </div>
//           </div>
//          <div className="Row__poster-property-land-area">
//          <div className="land-div">
//             <span>Land : </span>
//               {result.item.area} m <sup>2</sup> 
//           </div>
//          </div>
         
//         </div>
//         {/* <div className="Row__poster-agent-contact">
//           <span>Phone : </span>

//           {result.item.phone}  
//         </div> */}
//         </div>
//        )}
//       {result.item?.type ==="agent" && (
//         <div className ="property-detail">
//         {/* <div className="Row__poster-address">
//          {result.item.address}
//         </div> */}
//         <div className="Row__poster-property-info">
//           <div className="">
//           <span>Name : </span>

// {result.item.title}
//           </div>
//          <div className="" style={{border: "1px solid black"}}>
//           <span>Phone : </span>

//           {result.item.phone === "" ? result.item.mobile : result.item.phone}
//           </div>
         
//         </div>
//         {/* <div className="Row__poster-agent-contact">
//           <span>Phone : </span>

//           {result.item.phone}  
//         </div> */}
//         </div>
//        )}
//     </div>
//   </Link>
//     </>

//   );
// };
// export default RowPoster;



