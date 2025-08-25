import "./homepage.scss"
import Banner from "../../components/Banner/Banner"
import Row from "../../components/Row/Row"
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "../../motionUtils";
import { rowstitle } from "../../data/rowstitle";
import { myallPropertyData } from "../../data/allPropertiesdata";
import{allagentsData} from "../../data/allagentsdata";
import{myagentsData} from "../../data/agentsdata";
import{myrentalData} from "../../data/rentaldata";
import { mypropertyData } from "../../data/propertiesdata";


const Homepage = () => {

    const handleData = (type)=>{
    const lowerCaseType = type.toLowerCase()
    switch (lowerCaseType) {
        case 'trending properties': return {data :mypropertyData , showTrending:true};
        case 'top agents': return {data :myagentsData , showTrending:true}
        case 'all properties': return {data:myallPropertyData, showTrending:false};
        case 'all agents': return {data:allagentsData , showTrending:false};
        case 'all rentals': return {data:myrentalData, showTrending:false};
        default: return {data :[] ,  showTrending:false}
}
    }
    return (
        <motion.div
            className="Homepage"
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Banner />
            {
                rowstitle.map((data , index) => {
                    const cardData = handleData(data.title)
                    return(
                        <Row 
                            key={index} 
                            index={index} 
                            rowData ={data} 
                            cardData={cardData.data}
                            showTrending={cardData.showTrending}
                                
                        />
                    )

                }
                    
                )
            }
        </motion.div>
    )
}

export default Homepage
