import { useEffect } from "react";
import useAuth from "../../../../../../../hooks/useAuth";
import { useState } from "react";
import { Link } from "react-router-dom";



const Booking = () => {
  const {user}=useAuth()
 const [tourGuides, setTourGuides] = useState()


   
  // const handleBookings=packages=>{

    
  // }
    return (
        <div className="mb-10" > 
            <h1 className="text-4xl text-center text-red-500 py-10">ready to book tour package?</h1>
            <div className="text-white text-lg   m-2  ">
            <div className="card shrink-0 w-full max-w-2xl mx-auto p shadow-2xl bg-base-100">
      <form className="card-body  p-10 space-y-3 bg-slate-800 ">
        <div className="flex lg:flex-row md:flex-row flex-col gap-10">
        <div className="form-control ">
        <label className="label">
          <span className="label-text">Tourist Name</span>
        </label>
        <input type="name" defaultValue={user?.name} name="name" placeholder="Tourist Name" className="input py-1 rounded-xl input-bordered px-4" required />
      </div>
      <div className="form-control gap-2">
          <label className="label">
            <span className="label-text">Tourist Email</span>
          </label>
          <input type="email"defaultValue={user?.email} name="email" placeholder="email" className="input py-1 rounded-xl input-bordered px-4" required />
        </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col gap-10">
        <div className="form-control gap-2">
        <label className="label">
          <span className="label-text">Tourist Image</span>
        </label>
        <input type="photo" defaultValue={user?.photoURL} name="photo" placeholder="Tourist Image" className="input py-1  rounded-xl input-bordered px-4" required />
      </div>
      <div className="form-control gap-2">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name="price" placeholder="Price" className="input py-1  rounded-xl input-bordered px-4" required />
        </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col gap-10">
        <div className="form-control gap-2">
        <label className="label">
          <span className="label-text">Tour Date</span>
        </label>
        <input type="date" name="date" placeholder="Tour Date" className="input py-1 rounded-xl input-bordered px-4" required />
      </div>
      <div className="form-control gap-2">
          <label className="label">
            <span className="label-text">Tour guide name</span>{/* drop down by map tour guide name */}
          </label>
          <input type=" guideName" name="guideName" placeholder="Tour guide name" className="input py-1 rounded-xl input-bordered px-4" required />
        </div>
        </div>
        
        <div className="form-control pt-8 ">
        <button  className="btn bg-gray-600 font-bold  text-white rounded-xl py-3 flex justify-center w-full" type="">Book Now</button>
          
        </div>
      </form>
    </div>
            </div>
        </div>
    );
};

export default Booking;