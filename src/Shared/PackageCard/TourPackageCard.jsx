

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
   
    IconButton,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
   
  export function TourPackageCard({item}) {
    const {_id,image,tour_type,title,Details,price} = item
    return (
      <Card className="w-full p-5 max-w-[26rem] shadow-lg hover:scale-110  transition duration-300">
        <CardHeader floated={false} color="blue-gray">
          <img className="w-full h-60 "
            src={image}
            alt="ui/ux review check"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute top-4 right-10 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </IconButton>
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between p-3">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {tour_type}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
             
              {price}tk
            </Typography>
          </div>
          <Typography color="gray p-3">
            {title}
          </Typography>
         
        </CardBody>
        <CardFooter className="pt-3">
         <Link to={`/packageDetails/${_id}`}> <Button className="w-1/2 flex justify-center px-3 py-5 rounded-3xl mx-auto bg-red-600 my-2 text-white" size="lg" fullWidth={true}>
         View Details
       </Button>
       
       </Link>
        </CardFooter>
      </Card>
    );
  }