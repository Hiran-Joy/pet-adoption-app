import React from 'react'
import NavigationBar from './NavigationBar'

const AddPet = () => {
  return (
    <div>
        
      <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Pet ID</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Pet Name</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Species</label>
                        <select name="" id="" className="form-control">
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                            <option value="Bird">Bird</option>
                            <option value="Fish">Fish</option>
                            <option value="Rabbit">Rabbit</option>
                            <option value="Other">Other</option>
                        </select>

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Breed</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Age</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Gender</label>
                        <select name="" id="" className="form-control">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Vaccinated</label>
                        <select name="" id="" className="form-control">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Adoption Fee</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Image URL</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Description</label>
                        <textarea className="form-control" rows="3"></textarea>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-warning">Add Pet</button>
                    </div>
                </div>
            </div>
        </div>
      </div>   </div>
  )
}

export default AddPet