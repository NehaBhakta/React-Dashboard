import React from "react";
import { HiArrowUp, HiArrowDown } from "react-icons/hi2";
import { HiPlus, HiDownload } from "react-icons/hi";
import Transfericon from "../assets/icons/Transfer";
import Buttonbox from "./Buttonbox";


const Reportbox = ({ ListData = {} }) => {
    const {Titel, Value  , per , showButtons = false , perva = true } = ListData;
      const Icon = ListData.per.startsWith("-") ? HiArrowDown : HiArrowUp;
      const iconColor = ListData.color; 
  return (
    <div className=" p-6 ">
      <div className="flex items-center justify-between mb-4">
        <h2 className=" text-lg font-semibold text-[#1A202C] tracking-[-0.02em]">{Titel}</h2>

        {/* Right: Icon */}
        <button className="bg-[#F6F7F9] p-2 rounded-lg">
          <Icon  size={24}  color={ListData.color}/>
        </button>
      </div>
      <div className="flex mb-5">
        <h5 className=" text-[clamp(1rem,2vw,2rem)] font-bold text-[#1A202C] tracking-[-0.03em]">{Value} <sub className="ml-2 text-sm font-semibold text-[#90A3BF] tracking-[-0.02em]">( USD )</sub></h5>
        
      </div>
      <p className="text-sm font-semibold text-[#90A3BF] tracking-[-0.02em]">{ perva && (<span style={{ color: iconColor }}>{per}</span>)}  increase compared to last week</p>
        {showButtons && (
        <div className="flex gap-4 mt-10 flex-wrap">
        <Buttonbox text="Top Up" icon={HiPlus} filled={true} color="#40A198" className="bg-[#40A198]" />

        <Buttonbox text="Transfer" icon={HiDownload} filled={false} color="#40A198" />
        
        </div>
        )}

    </div>
  );
};

export default Reportbox;
