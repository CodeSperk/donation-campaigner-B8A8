import { useState } from "react";
import DonationCard from "../../components/donationCard/DonationCard";
import { Alert } from "@material-tailwind/react";

const Donation = () => {
  const donated = JSON.parse(localStorage.getItem("donation"))  || [];
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = ()=>{
    setShowAll(!showAll);
  }
  if (donated.length == 0) {
    return (
      <div className="w-[50%] mx-auto mt-12">
        <Alert color="red">Please donate some data first....</Alert>
      </div>
    );
  }
  return (
    <section className="max-w-7xl mx-auto my-16 md:my-20 lg:my-24 px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {donated.slice(0, showAll? donated.length:4).map((item) => (
          <DonationCard key={item.id} item={item}></DonationCard>
        ))}
      </div>

      <div className="text-center mt-10">
        {
          donated.length>4? <button onClick={handleShowAll} className="bg-red-500 hover:bg-red-700 py-3 px-8 text-white text-xl rounded-lg">{!showAll? "Show All": "Show Less"}</button>:""
        }
      
      </div>
    </section>
  );
};

export default Donation;
