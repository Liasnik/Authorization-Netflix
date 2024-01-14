import getCurrentUser from "@/app/actions/getCurrentUser";
import Billbord from "@/app/components/Billbord";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";

const Home: React.FC = async () => {
  const currentUser = await getCurrentUser();

  const image = currentUser?.image;
  const name = currentUser?.name;

  return (
    <div>
      <Navbar username={name} />

      {image && (
        <div className=" h-16 w-auto rounded-full ">
          <Image
            width={100}
            height={100}
            src={image}
            alt="avatar"
            className=" h-16 w-auto rounded-full "
          />
        </div>
      )}
      {name}
      <Billbord />
    </div>
  );
};

export default Home;
