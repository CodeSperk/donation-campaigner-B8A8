import useDonationData from "../../hooks/useDonationData";
import Item from "../categoryItem/Item";

const Category = () => {
  const {data, loading} = useDonationData();
  console.log(data, loading);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {
        data.map((item)=> <Item key={item.id} item={item}></Item>)
      }
    </div>
  );
};

export default Category;