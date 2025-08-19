import "./addProperty.scss";
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { selectCurrentUser } from '../../../redux/auth/auth.selectors';
import {createNewProperty} from "../../../storage/writeProperty";
import ImageUploader from "../../../components/ImageUploader";


const AddProperty = () => {
 const images = [
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150908_1600-0.jpeg?width=1200&name=3003150908_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150922_1600-0.jpeg?width=1200&name=3003150922_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150926_1600-0.jpeg?width=1200&name=3003150926_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150925_1600-0.jpeg?width=1200&name=3003150925_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150932_1600-0.jpeg?width=1200&name=3003150932_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150933_1600-0.jpeg?width=1200&name=3003150933_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150934_1600-0.jpeg?width=1200&name=3003150934_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150931_1600-0.jpeg?width=1200&name=3003150931_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150930_1600-0.jpeg?width=1200&name=3003150930_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150929_1600-0.jpeg?width=1200&name=3003150929_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150927_1600-0.jpeg?width=1200&name=3003150927_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150928_1600-0.jpeg?width=1200&name=3003150928_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150935_1600-0.jpeg?width=1200&name=3003150935_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150936_1600-0.jpeg?width=1200&name=3003150936_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150943_1600-0.jpeg?width=1200&name=3003150943_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150944_1600-0.jpeg?width=1200&name=3003150944_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150945_1600-0.jpeg?width=1200&name=3003150945_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150938_1600-0.jpeg?width=1200&name=3003150938_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150940_1600-0.jpeg?width=1200&name=3003150940_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150923_1600-0.jpeg?width=1200&name=3003150923_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150921_1600-0.jpeg?width=1200&name=3003150921_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150916_1600-0.jpeg?width=1200&name=3003150916_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150913_1600-0.jpeg?width=1200&name=3003150913_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150919_1600-0.jpeg?width=1200&name=3003150919_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150917_1600-0.jpeg?width=1200&name=3003150917_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150920_1600-0.jpeg?width=1200&name=3003150920_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150955_1600-0.jpeg?width=1200&name=3003150955_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150907_1600-0.jpeg?width=1200&name=3003150907_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150914_1600-0.jpeg?width=1200&name=3003150914_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150915_1600-0.jpeg?width=1200&name=3003150915_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150909_1600-0.jpeg?width=1200&name=3003150909_1600-0.jpeg",
      "https://www.professionals.co.nz/hs-fs/hubfs/property_images/RED26894/3003150910_1600-0.jpeg?width=1200&name=3003150910_1600-0.jpeg"
    ]
  // const options = ['Park', 'School', 'Hospital', 'Playground'];
  // const [selectedOptions, setSelectedOptions] = useState([]);
  const currentUser = useSelector(selectCurrentUser);
  const [removeImage, setRemoveImage] = useState(false);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState( "");
  const [price, setPrice] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [Floor, setFloor] = useState("");
  const [Land, setLand] = useState("");
  const [Bed, setBed] = useState("");
  const [Bath, setBath] = useState("");
  const [Garages, setGarages] = useState("");

  // const handleToggle = (option) => {
  //   setSelectedOptions(prev =>
  //     prev.includes(option)
  //       ? prev.filter(o => o !== option)
  //       : [...prev, option]
  //   );
  // };

  const handleSubmit = () => {
    const formData = { 
      title,
      address,
      price,
      description,
      images,
      video:"",
      lat,
      lon,
      "type":"property",
      "features":{
        "Bed": Bed.toString(),
        "Bath" :Bath.toString(),
        "Floor":Floor.toString(),
        "Land":Land.toString(),
        "Garages":Garages.toString()
      },
      "userId":currentUser?.id
    }
    console.log("formData is", formData)

    createNewProperty(currentUser.id,formData).then((data)=>{
      console.log("res", data)
        }).catch(e => console.log(e))
    setFloor("")
    setLand("")
    setTitle("")
    setRemoveImage(true)
    setAddress("")
    setDescription("")
    setLat("")
    setLon("")
    setPrice("")
    setBed("")
    setBath("")
    setGarages("")
    setFloor("")
    setLand("")
    // setSelectedOptions([])

  }
  return (
    <>

      <div id="content">

        <div className="page add-new-product">
          <div className="wrapper">
            <div className="row">

              <div className="col">
                <div className="product-content">
                  <div className="row product-website">
                  
                    <div className="col switcher">
                      <label>Property Availible </label>
                      <div>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                      </div>
                    </div>
                    <div className="w-100"></div>
                  </div>
                  <div className="row ">
                    {/* <label>Product Image</label>
                    <input type="file" id="myFile" name="filename" multiple
                      style={{ width: "100%", border: "none" }}
                    /> */}
                     <ImageUploader mode="multiple" clear = {removeImage}/>



                  </div>
                 
                  <div className="row ">
                    <label>Property Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    />
                  </div>
                  <div className="row ">
                    <label>Property Address</label>
                    <input type="text" onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    />
                  </div>
                  <div className="row product-wysiwyg">
                    <label>Property Description</label>
                    <div className="custom-textarea">
                      < textarea  onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      ></textarea >
                    </div>
                  </div>

                  <div className="ammenities-grid">
                    <div className="row">
                      <label>Latitude </label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input" onChange={(e) => setLat(e.target.value)} value={lat}/>
                      </div>
                    </div>
                    <div className="row">
                      <label>Longitude </label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input" onChange={(e) => setLon(e.target.value)}value={lon} />
                      </div>
                    </div>
                    <div className="row" >
                      <label>Floor Area meter<sub>2</sub></label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input" onChange={(e) => setFloor(e.target.value)}value={Floor} />
                      </div>
                    </div>
                    <div className="row" >
                      <label>Land meter<sub>2</sub></label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input" onChange={(e) => setLand(e.target.value)} value={Land} />
                      </div>
                    </div>
                    <div className="row">
                      <label>NO of Bed</label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input" onChange={(e) => setBed(e.target.value)} value={Bed}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <label>NO of Bath</label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input" onChange={(e) => setBath(e.target.value)} value={Bath}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <label>NO of Garages</label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input" onChange={(e) => setGarages(e.target.value)}
                        value={Garages}
                        />
                      </div>
                    </div>
                    <div className="row" >
                      <label>Price in NZD</label>
                      <div className="col item-4">
                        <input type="text" className="uniform-input"
                          onChange={(e) => setPrice(e.target.value)} value={price}
                        />
                      </div>
                    </div>
                  
                  </div>



                  {/* <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
                    <div className="row" style={{ marginRight: "20px" }}>
                      <label>Latitude </label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input" onChange={(e) => setLat(e.target.value)} />
                      </div>
                    </div>
                    <div className="row">
                      <label>Longitude </label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input" onChange={(e) => setLon(e.target.value)} />
                      </div>
                    </div>
                  </div> */}

                  {/* <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
                    <div className="row" style={{ marginRight: "20px" }}>
                      <label>Area sqft</label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input" onChange={(e) => setArea(e.target.value)} />
                      </div>
                    </div>
                    <div className="row">
                      <label>NO of Bed</label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input" onChange={(e) => setBed(e.target.value)}
                        />
                      </div>
                    </div>
                  </div> */}

                  {/* <div style={{ display: "flex", justifyContent: "start", alignContent: "center" }}>
                    <div className="row" style={{ marginRight: "20px" }}>
                      <label>Price in NZS</label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input"
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col item-4"></div>
                    </div>
                  </div> */}

                  {/* <div className="row" >
                    <label >Ammenities</label>
                    {options.map((option) => (
                      <label
                        key={option}
                        style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}
                      >
                        <input
                          type="checkbox"
                          checked={selectedOptions.includes(option)}
                          onChange={() => handleToggle(option)}
                          style={{ marginRight: '8px' }}

                        />
                        {option}
                      </label>
                    ))}
                  </div> */}





                  <div className="row button-set">
                    <button className="btn-save" onClick={() => handleSubmit()}>Save</button>
                  </div>
                </div>
              </div>
              <div className="w-100"></div>
            </div>
          </div>
        </div>
      </div >
    </>

  )
}

export default AddProperty;