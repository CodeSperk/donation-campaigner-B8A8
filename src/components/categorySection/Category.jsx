/* eslint-disable react/prop-types */
import Item from "../categoryItem/Item";

const Category = ({data}) => {
  
  return (
    <section className="max-w-7xl mx-auto mt-16 md:mt-20 lg:mt-24 px-4 md:px-8 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-between">
      {
        data.map((item)=> <Item key={item.id} item={item}></Item>)
      }
    </section>
  );
};

export default Category;