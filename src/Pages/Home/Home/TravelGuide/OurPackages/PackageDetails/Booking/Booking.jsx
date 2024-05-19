import { useEffect } from "react";
import useAuth from "../../../../../../../hooks/useAuth";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Title from "../../../../../../../Component/Title/Title";
import Swal from "sweetalert2";




const Booking = () => {
  const {user}=useAuth()
  
  const packages = useLoaderData()
  console.log(packages);
  const{_id,price,title} = packages
  const[tourGuides,setTourGuides]=useState([])
    useEffect(()=>{
        fetch('https://tourist-guide-server-five.vercel.app/users')
        .then(res=> res.json())
        .then(users=>{
           
            const tourGuideUsers = users.filter(user => user.role === 'tourGuide')
            setTourGuides(tourGuideUsers)
        })
    } ,[])

console.log(tourGuides);
 const handleBooking=e=>{
    e.preventDefault()
    console.log('clicked');
    const form = e.target;
    
    const title = form.title.value;
    const tourist_name = form.tourist_name.value;
    const tourist_email = form.tourist_email.value;
    const tourist_image = form.tourist_image.value;
    const price = form.price.value;
    const date = form.date.value;
    const tourGuide = form.tourGuide.value;
    const booking={title,tourist_name,tourist_email,tourist_image,price,date,tourGuide }
    console.log(booking);

        fetch('https://tourist-guide-server-five.vercel.app/bookings',{
          method:"POST",
          headers:{
            'content-type':'application/json'

          },
          body:JSON.stringify(booking)
        })
        .then(res =>res.json())
        .then(data=>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `${title} package has been booked successfully`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })

       }

  
    return (
        <div className="my-10" > 
            <h1 className="text-4xl text-center py-10"><Title subHeading='Book Tour' heading=' Package'></Title> </h1>
            <div className="text-white text-lg   m-2  ">
            <div className="card shrink-0 w-full max-w-2xl mx-auto p shadow-2xl bg-base-100">
      <form onSubmit={handleBooking} className="card-body  p-10 space-y-3 bg-slate-800 ">
      <div className="form-control ">
      <label className="label">
        <span className="label-text">Trip Title</span>
      </label> <br/>
      <input type="title" defaultValue={title} name="title" placeholder="Tourist Name" className="input py-1 w-full rounded-xl text-black input-bordered px-4" required />
    </div>
        <div className="flex lg:flex-row md:flex-row flex-col gap-10">
       
        <div className="form-control ">
        <label className="label">
          <span className="label-text">Tourist Name</span>
        </label>
        <input type="name" defaultValue={user?.displayName} name="tourist_name" placeholder="Tourist Name" className="input py-1 rounded-xl text-black input-bordered px-4" required />
      </div>
      <div className="form-control gap-2">
          <label className="label">
            <span className="label-text">Tourist Email</span>
          </label>
          <input type="email"defaultValue={user?.email} name="tourist_email" placeholder="email" className="input py-1 rounded-xl text-black  input-bordered px-4" required />
        </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col gap-10">
        <div className="form-control gap-2">
        <label className="label">
          <span className="label-text">Tourist Image</span>
        </label>
        <input type="photo" defaultValue={user?.photoURL} name="tourist_image" placeholder="Tourist Image" className="input py-1 text-black  rounded-xl input-bordered px-4" required />
      </div>
      <div className="form-control gap-2">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" defaultValue={price }  name="price" placeholder="Price" className="input py-1 text-black  rounded-xl input-bordered px-4" required />
        </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col gap-10">
        <div className="form-control gap-2">
        <label className="label">
          <span className="label-text">Tour Date</span>
        </label>
        <input type="date" name="date" placeholder="Tour Date" className="input py-1 text-black rounded-xl input-bordered px-4" required />
      </div>
      
      <div className="form-control gap-2">
          <label className="label">
            <span className="label-text"> Tour guide name</span>
          </label>
       
        <select
        id="tourGuide"
        name="tourGuide"
        required
        className="input text-black py-1 rounded-xl input-bordered px-4  required"
      >
        <option value="" disabled selected hidden>
          Select Tour Guide
        </option>
        {tourGuides.map((tourGuide) => (
          <option key={tourGuide._id} value={tourGuide.name}>
            <ul>
              <li>{tourGuide.name} </li>
            </ul>
          </option>
        ))}
      </select>
        </div>
        </div>
        
        <div className="form-control pt-8 ">
       
        <input className="btn bg-gray-600 font-bold  text-white rounded-xl py-3 flex justify-center w-full"  type="submit" name="" value="Book Now"/>
          
        </div>
      </form>
    </div>
            </div>
        </div>
    );
};

export default Booking;