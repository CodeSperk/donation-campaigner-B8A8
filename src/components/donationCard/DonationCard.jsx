/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const DonationCard = ({item}) => {
  const {id, img2, title,category,category_bg,text_clr, card_bg, price } = item;
  return (
    <Card className="w-full max-w-[40rem] flex-row" style={{background:card_bg}}>
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={img2}
          alt={title}
          className="h-full w-full object-cover"
        />
      </CardHeader>

      <CardBody style={{color:text_clr}} >
        <button style={{background:category_bg}} className="py-1 hover:px-4 px-2 rounded text-lg duration-1000 capitalize flex-grow">{category}</button>

        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>

        <Typography color="gray" className="mb-8 font-normal">
         {price}
        </Typography>

       <Link to={`/donation-details/${id}`}>
        <Button
            style={{ backgroundColor: text_clr }}
            className="rounded-sm capitalize text-xl"
            color="red"
          >
            View Details
          </Button>
       </Link>

      </CardBody>
    </Card>
  );
};

export default DonationCard;