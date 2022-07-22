import React from "react";
import DownloadAds from "./DownloadAds";

function Download() {
  return (
    <div className="flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[48rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]">
     
      <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />
   
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>Um pouco Sobre</span>
        <span>
          <b>Henry Freitas</b>
        </span>
        <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[1rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis magni odit! Accusamus provident ea doloribus reiciendis voluptatibus ab, ratione beatae ducimus corrupti consequuntur commodi porro cupiditate maxime? Sequi, molestiae!
        </span>
      </div>
      
      <div className="mt-14">
        <DownloadAds />
      </div>
    </div>
  );
}

export default Download;
