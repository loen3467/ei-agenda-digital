import React from "react";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#005954] group hover:bg-gradient-to-b hover:from-[#338b85] hover:to-[#005954] transition-colors duration-100 group overflow-y-hidden">
      <div className="h-100">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-[-130px] transition-transform duration-1000">
          <div className="w-full h-30 flex flex-col justify-between">
            {icon ? (
              <div className="text-5xl text-designColor">
                <img src={icon} />
              </div>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-xl text-gray-50">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
