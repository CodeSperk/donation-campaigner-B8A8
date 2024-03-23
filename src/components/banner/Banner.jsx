import { Button, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";

const Banner = () => {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <div className="h-[600px] w-full max-w-full relative">
        <div className="absolute inset-0 bg-[url('/resources/Rectangle-4288.png')] bg-cover bg-center bg-no-repeat opacity-10">

        </div>


      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-center items-center h-full gap-4">
        <Typography variant="h2">I Grow By Helping People In Need</Typography>

        <div className="relative flex w-full max-w-[24rem]">
          <Input
            type="email"
            label="Email Address"
            value={email}
            onChange={onChange}
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            color={email ? "red" : "red"}
            className="!absolute right-0 top-0 rounded h-full"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
