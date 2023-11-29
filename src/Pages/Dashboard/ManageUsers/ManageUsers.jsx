import { useQuery } from "@tanstack/react-query";
import Title from "../../../Component/Title/Title";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";
import {  AiFillDelete} from "react-icons/ai";
import Swal from "sweetalert2";



const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users=[], refetch } = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/users',{
              headers:{
                authorization:`Bearer ${localStorage.getItem('access-token') } `
              }
            } )
            return res.data

        }
    })

    const handleMakeAdmin = user =>{
      axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res =>{
        console.log(res.data);
        if(res.data.modifiedCount>0){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name}  is Admin now`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })


    }
    const handleMakeTourGuide = user =>{
      axiosSecure.patch(`/users/tourGuide/${user._id}`)
      .then(res =>{
        console.log(res.data);
        if(res.data.modifiedCount>0){
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name}  is Tour Guide now`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })

    }
    const handleDeleteUser =user =>{
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
            
            axiosSecure.delete(`/users/${user._id}`)
            .then(res=>{
                if(res.data.deletedCount>0){
                  refetch()
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
        <div>
            <div className="bg-red-50 min-h-screen">
                <Title subHeading='Manage' heading='Users'  ></Title>
                <div className="flex justify-evenly my-4">
                    <h1 className="text-3xl" >All Users </h1>
                    <h1 className="text-3xl" >Total Users: {users.length} </h1>
                    
                </div>
                <div className="overflow-x-auto mx-5">
  <table className="table table-zebra w-full rounded-lg ">
    {/* head */}
    <thead className="bg-red-200 p-5 rounded-lg">
      <tr className='rounded-lg'>
        <th className="p-2 ">#</th>
        <th>Name</th>
        <th>Email</th>
        
        <th> Role</th>
        <th> Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index) =>  <tr key={user._id}>
            <th className="p-4">{index+1}</th>
            <td className="pr-4">{user?.name} </td>
            <td className="pr-4">{user?.email} </td>
            
           {user.role === "admin"? 'Admin'  : <td><button onClick={()=>handleMakeAdmin(user)} type=""  className="middle none center rounded-lg bg-gradient-to-tr from-red-700 to-red-500 py-3 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"> Admin</button> </td>
}
           { user.role ==="tourGuide" ? 'TourGuide' : <td><button  type="" onClick={()=>handleMakeTourGuide(user)} className="middle none center rounded-lg bg-gradient-to-tr from-red-600 to-red-400 py-3 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"><FaUser/> </button> </td>  }
            <td><button type="" onClick={()=> handleDeleteUser (user) } className="middle none center rounded-lg bg-gradient-to-tr from-red-600 to-red-400 py-3 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"><AiFillDelete className='text-2xl' /></button> </td>
          </tr> )
      }
     
     
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageUsers;