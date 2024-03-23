import { useEffect, useState } from "react";

const useDonationData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


   useEffect(()=>{
    const fetchedData = async () => {
      setLoading(true);
      const res = await fetch("./data.json");
      const data = await res.json();
      setData(data);
      setLoading(false);
    }

    fetchedData();
  },[]);
  
  return {data, loading}
};

export default useDonationData;