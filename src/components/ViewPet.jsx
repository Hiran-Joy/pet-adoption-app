import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import axios from "axios";

const ViewPet = () => {
  const [petdata, changeData] = useState([]);
  const fetchData = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/pet.json"
      )
      .then(
        (response) => {
            changeData(response.data)
        }
      )
      .catch();
  };

  useEffect(

    () => {
        fetchData()
    },[]
  )

  return (
    <div>
      {/* <NavigationBar /> */}
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {petdata.map((value, index) => {
                return (
                  <div
                    className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3"
                    key={index}
                  >
                    <div class="card">
                      <img
                        src={value.image}
                        height="300px"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h6 class="card-title">Pet Name: {value.petName}</h6>
                        <h6 class="card-title">Species: {value.species}</h6>
                        <h6 class="card-title">Breed: {value.breed}</h6>
                        <h6 class="card-title">Age: {value.age}</h6>
                        <h6 class="card-title">Gender: {value.gender}</h6>
                        <h6 class="card-title">Adoption Fee: {value.adoptionFee}</h6>
                        <a href="#" class="btn btn-success">
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewPet;