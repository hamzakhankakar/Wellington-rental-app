import "./agent.scss";
import React, { useState } from 'react';


const Agent = () => {
  const options = ['Park', 'School', 'Hospital', 'Playground'];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [lat, setLat] = useState()
  const [lon, setLon] = useState()
  const [area, setArea] = useState()
  const [rooms, setRooms] = useState()

  const handleToggle = (option) => {
    setSelectedOptions(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = () => {
    console.log("title is", title)
    console.log("des is", description)
    console.log("lat is", lat)
    console.log("lon is", lon)
    console.log("price is", price)
    console.log("rooms is", rooms)
    console.log("area is", area)
    setArea("")
    setTitle("")
    setDescription("")
    setLat("")
    setLon("")
    setPrice(0)
    setRooms(0)
    setArea(0)
    setSelectedOptions([])

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
                    {/* <div className="col">
                      <div className="custom-select">
                        <label>Websites</label>
                        <div>
                          <select name="example">
                            <option value="1">KH</option>
                            <option value="2">EN</option>
                            <option value="2">FR</option>
                          </select>
                        </div>
                      </div>
                    </div> */}
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
                  {/* <div className="row product-info"> */}
                  <div className="row ">
                    <label>Product Image</label>
                    <input type="file" id="myFile" name="filename" multiple
                      style={{ width: "100%", border: "none" }}
                    />

                    {/* <a href={"#"} className="product-image"><img src="https://via.placeholder.com/680x340" />
                      <span>Edit</span> 
                  </a> */}


                  </div>
                  {/* <div className="row product-category">													<label>Categories</label>
                    <div className="col">
                      <input type="text" />
                    </div>
                    <div className="col">
                      <div className="custom-select">
                        <div>
                          <select name="example">
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                          </select>
                        </div>
                      </div>

                    </div>
                  </div> */}
                  {/* <div className="row product-title"> */}
                  <div className="row ">
                    <label>Property Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                  </div>
                  <div className="row product-wysiwyg">
                    {/* <div className="row "> */}
                    <label>Property Description</label>
                    <div className="custom-textarea">
                      <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                  </div>



                  <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
                    <div className="row" style={{ marginRight: "20px" }}>
                      <label>Latitude </label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input" onChange={(e) => setLat(e.target.value)} />
                      </div>
                    </div>
                    <div className="row">
                      <label>Longitude ...</label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input" onChange={(e) => setLon(e.target.value)} />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center" }}>
                    <div className="row" style={{ marginRight: "20px" }}>
                      <label>Area sqft</label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input" onChange={(e) => setArea(e.target.value)} />
                      </div>
                    </div>
                    <div className="row">
                      <label>NO of Rooms</label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input" onChange={(e) => setRooms(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "start", alignContent: "center" }}>
                    <div className="row" style={{ marginRight: "20px" }}>
                      <label>Price in NZS</label>
                      <div className="col item-4">
                        <input type="number" className="uniform-input"
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      {/* Empty or other content */}
                      <div className="col item-4"></div>
                    </div>
                  </div>

                  <div className="row" >
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
                  </div>





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

export default Agent;