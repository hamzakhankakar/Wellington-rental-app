import "./Properties.scss"
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.scss";
import { Link } from "react-router-dom";
import RowPoster from "../../components/RowPoster/RowPoster"
import SkeletonElement from "../../components/SkeletonElement/SkeletonElement";
import SkeletonPoster from "../../components/SkeletonPoster/SkeletonPoster";
import { getPropertiesByAgentId }  from "../../storage/getAgentProperties.js"
import { useSelector } from "react-redux";
import { selectCurrentUser } from '../../redux/auth/auth.selectors';

const Properties = () => {
  const [properties, setProperties] = useState([{id:""}])
  const [loading, setLoading] = useState(true)
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    getPropertiesByAgentId(currentUser.id)
      .then((properties) => {
        const data =[]
        properties.forEach(element => {
          element.agent ={...currentUser}
          data.push(element)
        });
        console.log("data is",data)
        setProperties(data)
        setLoading(false)
      })
      .catch(e => console.log(e))
     
  }, [currentUser.id])

  if (loading) {
    return (
      <div className='Row__not-loaded'>
        <SkeletonElement type="title" />
        <SkeletonPoster />
      </div>
    )
  } else {
    return (
      <div className="properties-swiper-container">
        <Swiper
          spaceBetween={20} // space between slides
          slidesPerView={1.4} // number of slides visible
          breakpoints={{
            625: {
              slidesPerView: 4,
            },
            998: {
              slidesPerView: 6,
            },
            1378: {
              slidesPerView: 7,
            },
          }}
        >
          {properties?.id !=="" ? properties.map((result) => (
            <SwiperSlide key={result.id}>
              <Link to={`/property/${result.id}`}>
                <RowPoster item={result} />
              </Link>
            </SwiperSlide>
        )):<h1>No properties</h1>
        }
        </Swiper>
      </div>
    )
  }
}

export default Properties