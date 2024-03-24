import {
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import { useParams } from "react-router-dom";
import useDonationData from "../../hooks/useDonationData";
import { useEffect, useState } from "react";
import { saveToLocalStorage } from "../../hooks/localStorage";

const DonationDetails = () => {
  const [singleData, setSingleData] = useState({});
  const {data, loading} = useDonationData();
  const {id} = useParams();

  const handleDonate = ()=> {
    saveToLocalStorage(singleData);
  }

useEffect(()=>{
  if(data){
    const singleData = data.find((item) => item.id === parseInt(id));
    setSingleData(singleData);
  }
},[data, id])

const { banner, title, description, price, text_clr } = singleData || {};

  return (
    <section className="max-w-7xl mx-auto my-16 md:my-20 lg:my-24 px-4 md:px-8 lg:px-12">
       <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none relative"
      >
        
        <img className=" rounded-md max-h-[550px] w-full" src={banner} />


          <div
          color="transparent"
          className="absolute bottom-0 bg-opacity-40 bg-black w-full h-28 rounded-b-md flex items-center pl-8"
        >
          <Button
            onClick={handleDonate}
            style={{ backgroundColor: text_clr }}
            className="rounded-sm capitalize text-xl"
            color="red"
          >
            Donate ${price}
          </Button>
        </div>
      </CardHeader>
      <CardBody className="p-0 my-7">
        <Typography className="text-4xl" variant="h4" color="blue-gray">
          {title || "Title Placeholder"}
        </Typography>
        <Typography
          variant="lead"
          color="gray"
          className="mt-3 font-normal p-0"
        >
          {description || "Description Placeholder"}
        </Typography>
      </CardBody>
    </section>
  );
};

export default DonationDetails;