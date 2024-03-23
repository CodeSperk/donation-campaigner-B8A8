/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const Item = ({item}) => {
  const {id, img, category, title, card_bg, category_bg, text_clr} = item;
  console.log(img);
  return (
    <Card className="mt-6 rounded-none" style={{background:category_bg}}>
         
       <div>
       <img
          src={img}
          alt={title}
         className="w-full"/>
       </div>
     
      <CardBody style={{color:text_clr}}>
        <button style={{background:category_bg}} className="py-1 hover:px-4 px-2 rounded text-lg duration-1000 capitalize">{category}</button>
        <Typography className="mt-4">
          {title}
        </Typography>
      </CardBody>
     
    </Card>
  );
};

export default Item;