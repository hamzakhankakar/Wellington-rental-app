import "./filterProperties.scss";
import { useState } from 'react';

const propertiesSuburb = [
  "Avalon",
  "Blue Mountains",
  "Churton Park",
  "Ebdentown",
  "Elderslea",
  "Fairfield",
  "Kaitoke",
  "Kelson",
  "Maoribank",
  "Naenae",
  "Normandale",
  "Petone",
  "Pinehaven",
  "Riverstone Terraces",
  "Raumati South",
  "Stokes Valley",
  "Stokes Valley",
  "Silverstream",
  "Taita",
  "Tirohanga",
  "Te Aro",
  "Trentham",
  "Trentham",
  "Wallaceville",
  "Wainuiomata",
  "Wainuiomata",
  "Whitemans Valley",
];

const rentalSuburb = [
  "Pinehaven",
  "Elderslea",
  "Wallaceville",
  "Heretaunga"
]

function SuburbSelect({ onFilterProperty, type }) {

  const handleData = (type) => {
    const lowerCaseType = type.toLowerCase()
    switch (lowerCaseType) {

      case 'all properties': return propertiesSuburb;
      case 'all rentals': return rentalSuburb;
      default: return []
    }
  }

  const [selectedSuburb, setSelectedSuburb] = useState("");

  const handleChange = (e) => {
    setSelectedSuburb(e.target.value);
    onFilterProperty(e.target.value.toLowerCase())
  };



  return (
    <div className="suburbselect">
      <select id="suburb" value={selectedSuburb} onChange={handleChange}>
        <option value="">--Choose an Suburb--</option>
        {handleData(type).map((suburb, index) => (
          <option key={index} value={suburb}>
            {suburb}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SuburbSelect;