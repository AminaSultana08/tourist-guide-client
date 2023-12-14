import { Helmet } from "react-helmet";
import Title from "../../Component/Title/Title";
import useAuth from "../../hooks/useAuth";


const MyProfile = () => {
    const {user} = useAuth()
    console.log(user);
    const handleAddStory= e =>{
      e.preventDefault()
      console.log('added');
      const form = e.target
      const placeName = form.placeName.value
      const photo = form.photo.value
      const touristName = form.touristName.value
      const touristPhoto = form.touristPhoto.value
      const email = form.email.value
      const address = form.address.value
      const price = form.price.value
      const description = form.description.value
    const story = {placeName ,photo,touristName,touristPhoto,email,address,price,description}
console.log(story);
    }

    return (
        <div>
        <Helmet><title>Paladium Awatis | My Profile</title></Helmet>
            <Title heading='User' subHeading='Profile' ></Title>
            <div className="relative flex flex-col mx-auto mt-20 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src={user.photoURL}
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {user.displayName}
    </h5>
   
  </div>
  
</div>

 <div>
 <section className="p-6 mt-10 bg-amber-50 dark:bg-gray-800 text-amber-600 dark:text-gray-50">
 <form onSubmit={ handleAddStory} className="container  flex flex-col mx-auto space-y-12">
     <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900   justify-center items-center">

         <div className="grid grid-cols-6 gap-4  justify-center items-center col-span-full lg:col-span-3">
             <div className="form-control  col-span-full sm:col-span-3">
                 <label className="text-sm">Place Name</label>
                 <input
                     name="placeName"
                     type="text"
                     placeholder="place Name" required
                     className="w-full p-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
             </div>
             <div className="form-control col-span-full sm:col-span-3">
                 <label className="text-sm">Place Photo</label>
                 <input type="url" required name='photo' placeholder="photo-url" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
             </div>
             <div className="form-control col-span-full sm:col-span-3">
                 <label className="text-sm">Tourist Name</label>
                 <input type="text" required name='touristName' placeholder="Tourist name" className="w-full rounded-md focus:ring p-2 focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" defaultValue={user?.displayName}  />
             </div>
             <div className="form-control col-span-full sm:col-span-3">
                 <label className="text-sm">Email</label>
                 <input  name="email" required  placeholder="Email" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" type="email" defaultValue={user?.email} />
             </div>
             <div className="form-control col-span-full sm:col-span-3">
                 <label className="text-sm">Tourist Photo</label>
                 <input  name="touristPhoto" required  placeholder="tourist photo-url" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" type="url"  />
             </div>
             <div className="form-control col-span-full sm:col-span-2">
                 <label className="text-sm"> Tour Area</label>
                 <input name="address" required type="text" placeholder="location" className="w-full rounded-md focus:ring focus:ri p-2 focus:ri dark:border-gray-700 dark:text-gray-900" />
             </div>
             <div className= "form-control col-span-full sm:col-span-2">
                 <label className="text-sm">Price</label>
                 <input name="price" required type="Number" placeholder="price" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
             </div>

             <div className="form-control col-span-full">
                 <label className="text-sm">Description </label>
                 <textarea  name="description"  type="text" placeholder="description" className="w-full text-amber-600 rounded-md p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
             </div>

         </div>
     </fieldset>
     <button type="submit" className="px-4 mt-4 py-2 w-full bg-gradient-to-r from-red-500 to-amber-600 hover:from-pink-500 hover:to-yellow-500  dark:text-red-600  max-w-2xl mx-auto border rounded-md text-white dark:border-gray-100">Add Story</button>

 </form>
</section>
 </div> 

        </div>
    );
};

export default MyProfile;