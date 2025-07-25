import "./homepage.scss"
import Banner from "../../components/Banner/Banner"
import Row from "../../components/Row/Row"
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "../../motionUtils";
import { rowstitle } from "../../data/rowstitle";


const Homepage = () => {
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
        </motion.div>
    )
}

export default Homepage
