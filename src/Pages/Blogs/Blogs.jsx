import { Helmet } from "react-helmet";
import Title from "../../Component/Title/Title";


const Blogs = () => {
    return (
        <div className='bg-red-100 p-24'>
        <Helmet><title>Paladium Awatis | Blogs</title> </Helmet>
        <div className="max-w-6xl mx-auto  " >
       
         
        <div>
       
        
         <Title subHeading='Our' heading='Blogs'></Title>
        </div>

        <div className="">
        <div className="flex flex-col gap-4 justify-center items-center ">
        <img className="w-full" src="https://i.ibb.co/x5wr20D/md-zahid-hasan-joy-Hfcyr-Ss-A51-E-unsplash.jpg" alt=""/>
           <h1 className="text-3xl font-bold text-red-900">Cox's Bazar</h1>
           <p className="text-lg ">
           If you're looking for the most popular tourist places in Bangladesh, you should definitely visit Cox's Bazar, located alongside the Bay of Bengal beach. It has the world's largest unbroken sea beach that stretches more than one hundred and twenty kilometers.

           You can also find here miles of golden sands, surfing waves, towering cliffs, rare conch shells, waterfalls, pagodas, and parks. Aggmeda Khyang, which is a huge Buddhist monastery, is the major attraction of Cox's Bazar, containing ancient manuscripts and large bronze Buddha pictures.
           </p>
       </div>
        <div className="flex flex-col justify-center items-center ">
        <img src="https://i.ibb.co/JF4x90T/hossain-azad-bh-JRm6-K3-YFo-unsplash.jpg" alt=""/>
           <h1 className="text-3xl font-bold pt-5 text-red-900">Bandarban</h1>
           <p className="text-lg ">
           Nilgiris are located in Thanchi Upazila of Bandarban in Bangladesh. If you want to touch the clouds by mingling with the clouds and also want to see the sunrise and sunset then go to the Nilgiris in Bandarban. There is an amazing opportunity for the dry season.


           It is located at an altitude of 2200 feet above of the sea level where tourists can touch clouds from here. That’s why Bandarban takes place as the number of eight of the best places to visit in Bangladesh.
           </p>
       </div>
        </div>
        
     </div>
        </div>
    );
};

export default Blogs;