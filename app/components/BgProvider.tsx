import React from "react";

type BgProviderProps = {
  children: React.ReactNode;
  removeBgOnMobile?: boolean;
};

const BgProvider: React.FC<BgProviderProps> = ({
  children,
  removeBgOnMobile,
}) => {
  return (
    <div className='h-full w-full bg-[url("/images/netflix-bg-uk.jpg")] bg-no-repeat bg-cover bg-fixed bg-center'>
      <div
        className={`
             bg-black bg-opacity-90 w-full h-full ${
               removeBgOnMobile ? "lg:bg-opacity-60" : "bg-opacity-100"
             }`}
      >
        {children}
      </div>
    </div>
  );
};

export default BgProvider;
