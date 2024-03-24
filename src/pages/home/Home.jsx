import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Category from "../../components/categorySection/Category";
import useDonationData from "../../hooks/useDonationData";

const Home = () => {

  const {data, loading} = useDonationData();
  const [filteredData, setFilteredData] = useState([])

  useEffect(()=>{
    setFilteredData(data);
  },[data])

  return (
    <div className="min-h-[100vh]">
        <Banner></Banner>
        
          <Category data={data} loading={loading}></Category>
    

      home
    </div>
  );
};

export default Home;