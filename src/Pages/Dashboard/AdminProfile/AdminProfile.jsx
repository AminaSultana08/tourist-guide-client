import { Helmet } from "react-helmet";
import Title from "../../../Component/Title/Title";
import useAuth from "../../../hooks/useAuth";


const AdminProfile = () => {
    const {user} = useAuth()
    return (
        <div>
        <Helmet><title>Paladium Awatis | My Profile</title></Helmet>
        <div >
        <Title heading='User' subHeading='Profile' ></Title>
        <div className="relative mx-auto mt-20 flex flex-col  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
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
    </div>
        </div>
    );
};

export default AdminProfile;