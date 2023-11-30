import { Helmet } from "react-helmet";
import Title from "../../../Component/Title/Title";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddPackage = () => {
  const { register, handleSubmit , reset} = useForm();
  const axiosPublic= useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = {image:data.image[0]}
    const res= await axiosPublic.post(image_hosting_api,imageFile,{
        headers:{
            'content-type':'multipart/form-data'
        }
    })
    if(res.data.success){
        const packageItem={
           image:res.data.data.display_url,

            tour_type:data.tour_type,
            type_icon:data.type_icon,
            title : data.title,
            price:parseInt(data.price),
            
            Description:data.Description,
            day1_tourPlan:data.day1_tourPlan,
            day1_description:data.day1_description,
            day2_tourPlan:data.day2_tourPlan,
            day2_description:data.day2_description,
            
            day3_tourPlan:data.day3_tourPlan,
            day3_description:data.day3_description
        

        }
        const packageRes=await axiosSecure.post('/packages',packageItem)
        console.log(packageRes.data);
        if(packageRes.data.insertedId){
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} has been added to  Packages Collection`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log('with image url', res.data);
  };
  return (
    <div>
      <Helmet>
        <title>Paladium Awatis | Add Package</title>{" "}
      </Helmet>
      <div className="mb-4 ml-4">
        <Title subHeading="Add" heading="Package"></Title>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col justify-center gap-5">
             
              <div className="flex gap-10">
              <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-red-800 text-md"> Trip Title</span>
              
              </div>
              <input
              {...register("title"  , {required:true})}
                type="text"
                placeholder=" Trip Title"
                className="input input-bordered p-2 mt-1 bg-red-100 border-2 border-red-600 rounded-md w-full"
              />
             
            </label>
              <label className="form-control w-full ">
              <div className="label ">
                <span className="label-text font-bold text-red-800 text-md">Photo</span>
              
              </div>
            
              <div className="form-control w-full  ">
                <input {...register ("image" , {required:true})} type="file" className="file-input input input-bordered p-2 mt-1 bg-red-100 border-2 border-red-600 rounded-md w-full" />
                </div>
             
            </label>
              </div>
              <div className=" ">
               <div className="flex gap-5">
               <label className="form-control w-full ">
               <div className="label">
               <span className="label-text font-bold text-red-800 text-md">Tour Type</span>
             
             </div>
               <select
                 color="red"
                 className="p-2 w-80 max-x-xs rounded-md mt-1 bg-red-100 border-2 border-red-600"
                 {...register("tour_type" , {required:true})}
               >
                 <option value="beach">Beach</option>
                 <option value="wildLife">WildLife</option>
                 <option value="hiking">Hiking</option>
                 <option value="urban">Urban</option>
                 <option value="cultural">Cultural</option>
                 <option value="culinary ">Culinary </option>
                 <option value="history">History</option>
               </select>
               <input className="bg-red-600 text-white p-2 rounded-lg ml-1" type="submit"/>
               </label>
               
               <label className="form-control w-full ">
               <div className="label ">
                 <span className="label-text font-bold text-red-800 text-md">Type Icon</span>
               
               </div>
               <input
               {...register("type_icon")}
                 type="URL"
                 placeholder="Type Icon"
                 className="input input-bordered p-2 mt-1 bg-red-100 border-2 border-red-600 rounded-md w-full "
               />
              
             </label>
               </div>
                <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold text-red-800 text-md">Price</span>
                
                </div>
                <input
                {...register("price"  , {required:true})}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered p-2 mt-1 bg-red-100 border-2 border-red-600 rounded-md w-96 "
                />
               
              </label>

              </div>
              <div>
              <label className="form-control">
              <div className="label">
                <span className="label-text font-bold text-red-800 text-md">Place Description</span>
               
              </div>
              <textarea {...register("Description")} className="textarea textarea-bordered h-24 rounded-md bg-red-100 border-2 border-red-600 p-6 w-full mt-1" placeholder="Description"></textarea>
             
            </label>
              </div>
              <div className="flex gap-2">
                <div className=" flex flex-col gap-2">
                    
                    <div className=" flex flex-col gap-2">
                        
                        <div className=" flex items-center gap-3">
                           <div>
                          
                           <label className="form-control w-full ">
                           <div className="label">
                             <span className="label-text font-bold text-red-800 text-md">Day-1</span>
                           
                           </div>
                           <input
                           {...register("day1_tourPlan")}
                             type="text"
                             placeholder="Day-1"
                             className="input input-bordered p-2 mt-1 bg-red-100 border-2 border-red-600 rounded-md w-64 "
                           />
                          
                         </label>
                           </div>
                           <div>
                           <label className="form-control w-full ">
                           <div className="label">
                             <span className="label-text font-bold text-red-800 text-md">Description</span>
                           
                           </div>
                           <input
                           {...register("day1_description")}
                             type="text"
                             placeholder="Description"
                             className="input input-bordered p-2 mt-1 bg-red-100 border-2 border-red-600 rounded-md w-80 "
                           />
                          
                         </label>
                           </div>
                        </div>
                        <div className="flex items-center gap-3">
                           <div>
                          
                           <label className="form-control w-full ">
                           <div className="label">
                             <span className="label-text font-bold text-red-800 text-md">Day-2</span>
                           
                           </div>
                           <input
                           {...register("day2_tourPlan")}
                             type="text"
                             placeholder="day2_tourPlan"
                             className="input input-bordered p-2 mt-1 bg-red-100 border-2 border-red-600 rounded-md w-64 "
                           />
                          
                         </label>
                           </div>
                           <div>
                           <label className="form-control w-full ">
                           <div className="label">
                             <span className="label-text font-bold text-red-800 text-md">Description</span>
                           
                           </div>
                           <input
                           {...register("day2_description")}
                             type="text"
                             placeholder="Description"
                             className="input input-bordered p-2 mt-1 bg-red-100 border-2 border-red-600 rounded-md w-80 "
                           />
                          
                         </label>
                           </div>
                        </div>
                        <div className=" flex items-center gap-3">
                           <div>
                          
                           <label className="form-control w-full ">
                           <div className="label">
                             <span className="label-text font-bold text-red-800 text-md">Day-3</span>
                           
                           </div>
                           <input
                           {...register("day3_tourPlan")}
                             type="text"
                             placeholder="Day-3"
                             className="input input-bordered p-2 mt-1 bg-red-100 border-2 border-red-600 rounded-md w-64 "
                           />
                          
                         </label>
                           </div>
                           <div>
                           <label className="form-control w-full ">
                           <div className="label">
                             <span className="label-text font-bold text-red-800 text-md">Description</span>
                           
                           </div>
                           <input
                           {...register("day3_description")}
                             type="text"
                             placeholder="Description"
                             className="input input-bordered p-2 mt-1 bg-red-100 border-2 border-red-600 rounded-md w-80 "
                           />
                          
                         </label>
                           </div>
                        </div>

                       

                    </div>
                   
                    </div>
                    
                
              </div>
            </div>
            <div className="form-control pt-8 ">
         <button   className="btn bg-red-600 font-bold  text-white rounded-xl py-3 flex justify-center items-center w-full" type="">Add Package</button>
          
        </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;
