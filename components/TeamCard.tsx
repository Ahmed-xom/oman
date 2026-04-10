"use client"
import React from "react";

import Image from "next/image";
import { managementTeam, TeamMember } from "@/app/our-leaders/CardsData";

function TeamCard() {
   
  return (
 <>
      {managementTeam.map((member: TeamMember, index:number) => (
        <div key={index} 
        role="listitem"  
        className="sm:w-1/2 md:w-1/4 lg:w-1/4 relative mt-16 mb-20 md:mb-32 sm:mb-24  shadow-md bg-white border-b-8 border-[#fb8f44]"
      id="card-head">
          <div className="rounded overflow-hidden "  >
            <div className="absolute -mt-24 w-full flex justify-center">
              <div className="h-40 w-40">
                <Image
                  src={member.image}
                  alt="Display Picture of Andres Berlin"
                  role="img"
                  className="rounded-full object-fill h-full w-full shadow-md"
                  width={400}
                  height={50}
                />
              </div>
            </div>
            <div className="px-6 mt-20">
              <h1 className="font-bold text-xl text-center mb-1 text-greenish">
                {member.name}
              </h1>
              <p className=" text-sm text-center text-[#fb8f44]">
                {member.title}
              </p>
              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                {/* {member.description.substring(0,250) + (member.description.length > 250  ? "..." : "")}{" "} */}
                {member.description}
              </p>
              </div>
          </div>
          </div>
      ))
      }
    </>
  );
}

export default TeamCard;
