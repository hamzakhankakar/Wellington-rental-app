import "./rowPoster.scss";
import { Link } from "react-router-dom";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineBedroomParent } from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";

const RowPoster = (result) => {
  const {
    item: { title, original_name, original_title, name ,id,address,features,agent},
  } = result;
  const fallbackTitle = title || original_title || name || original_name;
  
  return (

    <>
    {
      result.item.type === "agent" ?(
        <Link to={`/agent/${id}`}> 
        <div className="Row__poster" >
     
      <div className= "image-wrapper-agent">
        <img src={`${result.item?.agentImage}`} alt={fallbackTitle} 
        />
        <div className="Row__poster-title ">
          {result.item.agentName}
        </div>
      </div>  
        
      
        <div className ="property-detail">
        
        <div className="Row__poster-property-info">
          <div className="">{result.item.agentName}</div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
  <span style={{ display: 'flex', alignItems: 'center' }}>
    <CiMobile3 />
    : 
  </span>
  <span style={{ marginLeft: '5px' }}>
    {result?.item?.contact?.Phone === "" ? result?.item?.contact?.Mobile : result?.item?.contact?.Phone}
  </span>
</div>
         
        </div>
        </div>
         </div>
         </Link>
      ):(
          
          <div className="Row__poster" >
           <div 
             className= {`${
                        result.item?.type === "property" || result.item?.type === "rental"
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
          result.item.type === "rental" ? 
            <Link to={`/rental/${id}`}> 
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
           {result.item.type === "property" ?
            <Link to={`/property/${id}`}> 

             <div className ="property-detail">
             <div className="Row__poster-address"         
             >
              <span >
                {address}
              </span>
             </div>
             <div className="Row__poster-property-info">
               <div className="Row__poster-property-ammenities">
               <div className="bedroom-div" style={{ display: 'flex', alignItems: 'center' }}>
                 <span style={{ display: 'flex', alignItems: 'center' }}><MdOutlineBedroomParent />
                 : </span>
                 {/* {result?.item?.rooms} */}
                 {features?.Bed}
               </div>
               <div className="bathroom-div" style={{ display: 'flex', alignItems: 'center' }}>
                 <span style={{ display: 'flex', alignItems: 'center' }}><LiaBathSolid />
                 : </span>
                 {/* <span>{result.item.bath}</span> */}
                 <span>{features?.Bath}</span>
               </div>
               </div>
              
             </div>
             <div className="Row__poster-agent-contact"style={{ display: 'flex', alignItems: 'center' }}>
               <span style={{ display: 'flex', alignItems: 'center' }}><CiMobile3 />: </span>
     
               {/* {result.item.phone === ""? result.item.mobile :result.item.phone}   */}
               {agent?.contact?.Phone === ""? agent?.contact?.Mobile :agent?.contact?.Phone}  
             </div>
             </div>
             </Link>
             :<Link to={`/rental/${id}`}> 

             <div className ="property-detail">
             <div className="Row__poster-address">
              <span>
              {result.item.address}
              </span>
             </div>
             <div className="Row__poster-property-info">
               <div className="Row__poster-property-ammenities">
               <div className="bedroom-div" style={{ display: 'flex', alignItems: 'center' }}>
                 <span style={{ display: 'flex', alignItems: 'center' }}><MdOutlineBedroomParent />
                 : </span>
                 {result.item.rooms}
               </div>
               <div className="bathroom-div"style={{ display: 'flex', alignItems: 'center' }}>
                 <span style={{ display: 'flex', alignItems: 'center' }}><LiaBathSolid />
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
             <div className="Row__poster-agent-contact" style={{ display: 'flex', alignItems: 'center' }}>
               <span style={{ display: 'flex', alignItems: 'center' }}><CiMobile3 />: </span>
     
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