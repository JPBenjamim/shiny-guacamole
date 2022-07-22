import { React, useState } from "react";
import MusicPlayer from "./MusicPlayer";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
function Search() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };
  
  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
    
      <div className="left flex-1">
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/backgraphics.png")}
          alt=""
          className="absolute top-[22rem] left-[-47rem]"
        />
        <motion.img
          src={require("../img/hfd.png")}
          alt=""
          className="w-[33rem] top-[23.7rem] absolute"
        />{" "}
      
        
        <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={require("../img/d4.png")}
          alt=""
          className="w-[23rem] top-[45rem] left-[15rem] absolute"
        />
      </div>
      
      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
       
        <div className="searchbar flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="Insira uma cidade"
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
          />
          
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
            <img
              src={require("../img/search.png")}
              alt=""
              className="w-[1.5rem]"
            />
          </div>
        </div>
        
        <div className="tild flex justify-start mt-7 items-center w-[100%]">
          <img
            src={require("../img/Path 318.png")}
            alt=""
            className="w-[5rem]"
          />
        </div>

        
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Saiba onde vai ter a</span>
          <span>
            <b>Revoada do Henry!</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
           Basta pesquisar por sua cidade <br /> E descubra se vai ter revoada.
          </span>
        </div>
       
        <VisibilitySensor
          onChange={(isVisible) => setElementIsVisible(isVisible)}
        >
          <MusicPlayer />
        </VisibilitySensor>
      </div>
    </div>
  );
}

export default Search;
