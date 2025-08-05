import "./Properties.scss"
import RowPoster from "../../components/RowPoster/RowPoster"
import { mypropertyData } from "../../data/propertiesdata";


const Properties = ()=>{
  return(
    <div className="poster-grid">
      {
        mypropertyData && mypropertyData.map((result, i) => (  
          // <div className="poster-grid"  key={i} >
            <RowPoster
              item={result}
              key={result.id}
              index = { i}
            />              
          // </div>
      ))}    
    </div>
  )
}

export default Properties