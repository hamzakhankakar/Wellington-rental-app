import "./homepage.scss"
import Banner from "../../components/Banner/Banner"
import Row from "../../components/Row/Row"
// import Credits from "../../components/Credits/Credits";
// import { useRetrieveData } from "../../hooks/useRetrieveData";
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "../../motionUtils";
 import { rowstitle } from "../../data/rowstitle";
//  import StreetViewExample from "../../components/Maps/StreetView"
//  import SatelliteMap from "../../components/Maps/Aerial"
// import SatelliteMap from "../../components/Maps/Aerial"


const Homepage = () => {
    // const rows = useRetrieveData('movies');
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
                 rowstitle.map((data , index) => (
                
                    <Row key={data.id} index={index} data ={data}  />
                ))
            }
            
            <div>
            {/* <StreetViewExample/>
            <SatelliteMap /> */}
            {/* <SatelliteMap /> */}
            </div>
        </motion.div>
    )
}

export default Homepage
