import "../AddProperty/addProperty.scss";
import React, { useState } from 'react';
import ImageUploader from "../../../components/ImageUploader";
import {updateCurrentAgent} from "../../../storage/updateCurrentAgent"
import { useSelector } from "react-redux";
import { selectCurrentUser } from '../../../redux/auth/auth.selectors';


const Profile = () => {
  
  const currentUser = useSelector(selectCurrentUser);
  const [agentArea, setAgentArea] = useState(currentUser?.agentArea?? "")
  const [agentName, setAgentName] = useState(currentUser?.displayName?? "")
  const [agentDescription, setAgentDescription] = useState(currentUser?.agentDescription?? "")
  const [email] = useState(currentUser?.email?? "")
  const [mobile, setMobile] = useState(currentUser?.contact?.Mobile?? "")
  const [phone, setPhone] = useState(currentUser?.contact?.Phone?? "")


  const handleSubmit = () => {
    const formData = {
      agentArea,
      agentName,
      agentDescription,
      "agentImage": "https://redcoats.professionals.co.nz/hubfs/1400x1000_Agent%20Page_16.jpg",
      contact:{
        Email:email,
        Mobile:mobile,
        Phone:phone
      },
      displayName:agentName
      }
  console.log("formData",formData)
  updateCurrentAgent(currentUser.id,formData).then((data)=>{
console.log("res", data)
  }).catch(e => console.log(e))
    
  
  
    };
  
   
  return (
    <>

      <div id="content">
        <div className="page add-new-product">
          <div className="wrapper">
            <div className="row">

              <div className="col">
                <div className="product-content">
                <div className="row ">
                {/* <Link to={`/addProperty`}>
                <button className="orange-btn">Add New Property</button>
                </Link> */}
                  </div>
                  <div className="row ">
                    <ImageUploader mode="single"/>
                  </div>
                 
                  <div className="row ">
                    <label>Agent Name</label>
                    <input type="text" onChange={(e) => setAgentName(e.target.value)}
                   value={agentName}
                    />
                  </div>
                  <div className="row ">
                    <label>Agent Location</label>
                    <input type="text" onChange={(e) => setAgentArea(e.target.value)}
                    value ={agentArea}
                    />
                  </div>
                  <div className="row product-wysiwyg">
                    <label>Agent Bio</label>
                    <div className="custom-textarea">
                      <textarea onChange={(e) => setAgentDescription(e.target.value)}
                        value ={agentDescription}
                        ></textarea>
                    </div>
                  </div>



                  <div className="contact-grid">
                    <div className="row" style={{ marginRight: "20px" }}>
                      <label>Email </label>
                      <div className="col item-4">
                        <input type="text" className="uniform-input" 
                      value ={ email}
                      readOnly
                        />
                        
                      </div>
                    </div>
                    <div className="row">
                      <label>Mobile #</label>
                      <div className="col item-4">
                        <input type="text" placeholder="123-456-7890" className="uniform-input" onChange={(e) => setMobile(e.target.value)}
                        value ={mobile} />
                      </div>
                    </div>
                    <div className="row">
                      <label>Phone #</label>
                      <div className="col item-4">
                        <input type="text" className="uniform-input" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" onChange={(e) => setPhone(e.target.value)} 
                        value ={phone}/>
                      </div>
                    </div>
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

export default Profile;