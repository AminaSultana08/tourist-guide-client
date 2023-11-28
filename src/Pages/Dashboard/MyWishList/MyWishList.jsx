
import useWishList from "../../../hooks/useWishList";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const MyWishList = () => {
    const [wishList, refetch] = useWishList()
    const axiosSecure = useAxiosSecure()
    const totalPrice = wishList.reduce((total, item) => total + item.price, 0);
    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {

            if (result.isConfirmed) {
            
            axiosSecure.delete(`/wishList/${id}`)
            .then(res=>{
                if(res.data.deletedCount>0){
                    refetch()
                      Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
    
                }
            } )
           
            }
          });
        
    }
    return (
        <div className="bg-red-100 min-h-screen ">
            <div className="flex justify-evenly py-7">
                <h1 className='text-red text-4xl '>Wish List: {wishList.length} </h1>
                <h1 className='text-red text-4xl '>Total Price: {totalPrice} </h1>
                <button
            
            className="middle none center rounded-lg bg-gradient-to-tr from-red-500 to-red-200 py-3 px-4 font-sans text-lg font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
           Pay
          </button>
                
            </div>
            {/* Table */}
            <div className="overflow-x-auto bg-red-100 min-h-screen mr-5">
  <table className="table w-full mx-5 ">
    {/* head */}
    <thead className="bg-red-200   ">
      <tr className="py-10">
        <th>
          #
        </th>
        

        
        <th>Name</th>
        <th >Tour Type</th>
        <th >Price</th>
        <th>Details </th>
        <th>Action </th>
      </tr>
    </thead>
    <tbody>
      {
        wishList.map((item,index)=> <tr key={item._id}>
            <th>
              <label className="p-4">
                {
                    index+1
                }
              </label>
            </th>
            <td>
              <div className="flex items-center gap-5">
                <div className="avatar">
                  <div className="mask mask-squircle w-14 h-12 rounded-md ">
                    <img className="rounded-lg " src={item?.image} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item?.title} </div>
                 
                </div>
              </div>
            </td>
            <td className="px-2">
              {item?.tour_type}
            </td>
            <td className="pr-2">{item?.price}tk </td>

            

            <th>
            <Link to={`/packageDetails/${item._id}`}>    <button
            data-ripple-light="true"
            data-tooltip-target="tooltip-top"
            className="middle none center rounded-lg bg-gradient-to-tr from-red-700 to-red-500 py-3 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
           View Details
          </button></Link>
            </th>

            <th>
            <button
            onClick={()=>handleDelete(item._id)}
        
        className="middle none center rounded-lg bg-gradient-to-tr mx-4 from-red-700 to-red-500 py-2 px-4 font-sans text-lg font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        < RiDeleteBin2Fill className="text-lg " />
      </button>
      
            </th>
           
          </tr>)
      }
      
    
    </tbody>
   
    
  </table>
</div>

        </div>
    );
};

export default MyWishList;