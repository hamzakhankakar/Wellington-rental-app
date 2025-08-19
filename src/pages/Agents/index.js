import { useParams } from 'react-router-dom';
// import { useState } from "react";
import "./agents.scss";
import { allagentsData } from "../../data/allagentsdata";
// import { FaStreetView } from "react-icons/fa";
// import { FaSatellite } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { staggerOne, modalFadeInUpVariants } from "../../motionUtils";


const Agents = () => {

  const { id } = useParams();
  const agent = allagentsData.find(obj => obj.id == id);

  console.log(agent)

  return (
    <div className="agent-detail-container">
      {/* Main product section */}
      <div className="agent-detail-main">
        <div className='agent-detail-image'>
          <img src={agent.agentImage} />
        </div>
        <div className='agent-detail-profile'>
          <motion.div variants={staggerOne} initial="initial" animate="animate" exit="exit" className="Modal__info--wrp">
            <motion.h4 variants={modalFadeInUpVariants} className="Modal__info--otherTitle">{agent.agentName}</motion.h4>

            <span>location:  {agent.agentArea}</span>
            <motion.h4 variants={modalFadeInUpVariants} className="Modal__info--otherTitle"></motion.h4>
            <span>Phone: {agent.contact.Phone}</span>

            <motion.hr variants={modalFadeInUpVariants} className="Modal__info--line" />


            <div className='agentbadges'>
              <img src={agent.agentbadges} className='agentbadges' />

            </div>
          </motion.div>
        </div>
      </div>
      <motion.div variants={staggerOne} initial="initial" animate="animate" exit="exit" className="Modal__info--wrp">

        <motion.hr variants={modalFadeInUpVariants} className="Modal__info--line" />

        <motion.h4 variants={modalFadeInUpVariants} className="Modal__info--otherTitle">Information about  <b>Agent</b></motion.h4>
        <motion.div variants={modalFadeInUpVariants} className="Modal__info--row">
          <span className=''>{"Description "}</span>
          <span
            className="Modal__info--row-description"
            dangerouslySetInnerHTML={{ __html: agent.agentDescription }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Agents;
