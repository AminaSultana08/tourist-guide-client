import { Helmet } from "react-helmet";


const ContactUs = () => {
    return (
        <div>
        <Helmet><title>Paladium Awatis | Contact Us</title> </Helmet>
        <div className='bg-pink-100 pt-20 h-96 w-full relative bg-gradient-to-tr from-gray-600 to-gray-700' >
        <img  className="w-full h-full pt-20 object-cover absolute mix-blend-overlay" src="https://i.ibb.co/N7z7W0d/ebadur-rehman-kaium-GBYWXNWO81-A-unsplash.jpg" alt=""/>  
        <div className='p-20 '>
          <h1 className='text-4xl font-Lobster text-center text-white  mt-14 items-center font-extrabold'>Contact Us</h1>

        </div>
      </div>
      <div className="bg-bg-gradient-to-tr pb-20 from-red-400  to-pink-300">
               
                <div className="grid lg:grid-cols-3 grid-cols-1 space-y-4 lg:space-y-0  items-center justify-center mx-auto text-center p-20">
                   <div className=" lg:pl-20" >
                   <h1 className="text-2xl mb-2 text-black">Phone</h1>
                   <p className="text-base text-red-900">+(568) 456 789 111 <br/>
                   +(553) 111 353 543</p>
                   </div>
                   <div>
                    <h1 className="text-2xl mb-2 text-black0">Address</h1>
                   <p className="text-base text-red-900"> Office:1st &  3rd floor, <br/> house : C-34 ,Block-E, <br/> Banani, Dhaka <br/>
                     1207 Dhaka, Bangladesh</p>
                   </div>
                   <div>
                    <h1 className="text-2xl mb-2 text-black">Email</h1>
                    <p className="text-base text-red-900">paladium.awatis@gmail.com <br/> touristGuide@gmail.com</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;