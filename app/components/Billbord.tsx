import React from "react";
import getBillboardVideo from "../actions/getBillboardVideo";
import PlayButton from "./PlayButton";

const Billbord = async () => {
  const billboardVideoData = await getBillboardVideo();

  return (
    <div className="relative h-[56.25vvw]">
      <video
        src={billboardVideoData?.videoUrl}
        poster={billboardVideoData?.thumbnailUrl}
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {billboardVideoData?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg md-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {billboardVideoData?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={billboardVideoData?.id} />
        </div>
      </div>
    </div>
  );
};

export default Billbord;
