/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
  const {id, img, category, title, card_bg, category_bg, text_clr} = item;
  return (
    <Link to={`/donation-details/${id}`}>
      <Card className="mt-6 rounded-none flex flex-col" style={{background:card_bg}}>
         <div>
         <img
            src={img}
            alt={title}
           className="w-full"/>
         </div>
       
        <CardBody style={{color:text_clr}} className="flex flex-col">
          <button style={{background:category_bg}} className="py-1 hover:px-4 px-2 rounded text-lg duration-1000 capitalize flex-grow">{category}</button>
          <Typography className="mt-4">
            {title}
          </Typography>
        </CardBody>
       
      </Card>
    
    </Link>
  );
};

export default Item;