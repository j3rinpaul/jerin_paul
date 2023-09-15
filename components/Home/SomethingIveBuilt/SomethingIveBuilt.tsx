import Link from "next/link";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import data1 from "./data.json";


//to add more projects just add more objects in data.json file


export default function SomethingIveBuilt() {
  const router = useRouter();
  let isOdd = false;


 

  console.log(data1);
  return (
    <div
      id="SomethingSection"
      className="flex flex-col space-y-12 bg-AAprimary w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Projects&apos;s
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>
      
    
      {data1.data1.map((item, index) => (
        //if index is odd then left image else right image
        isOdd = index%2==0?true:false,
        console.log(isOdd),

        
        
        <div
          key={index}
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96"
        >
          {/* Left image */}
          {isOdd ?
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={item.externalLink} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={item.imageSrc} alt={"Project Screenshot"} className={`w-full rounded h-full `} />
            </div>
          </div>:
           <div
           className="hidden bg-AAprimary z-10  py-4 
         absolute md:grid grid-cols-12 w-full h-full  content-center"
         >
           <div className="relative rounded w-full h-full col-span-7 ">
           <a href={item.externalLink} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={item.imageSrc} alt={"Project Screenshot"} className={`w-full rounded h-full `} />
           </div>
         </div>}

          {/* right Content */}
         
          {isOdd? <div className="md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={item.imageSrc} alt={"Project Screenshot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <Link href={item.externalLink}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    {item.title}
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  {item.description}
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                {item.technologies.map((tech, index) => (
                  <span key={index} className="pr-4 z-10">
                    {tech}
                  </span>
                ))}
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {item.githubLink && <GithubIcon link={item.githubLink} />}
                {item.externalLink && (
                  <a href={item.externalLink} target="_blank" rel="noreferrer">
                    <ExternalLink url={""} router={router} />
                  </a>
                )}
              </div>
            </div>
          </div>:
           <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
           {/* background for text in mobile responsive */}
           <div className="absolute w-full h-full bg-opacity-70 z-0">
             <div className="relative w-full h-full">
               <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
               <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
               <Img src={item.imageSrc} alt={"Project Screenshot"} className={`w-full h-full`} />
             </div>
           </div>

           <div
             className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
           col-span-8 flex flex-col items-start md:items-end space-y-3"
           >
             <div className="flex flex-col space-y-1 md:items-end z-10">
               <span className="text-AAsecondary text-base">Recent Project</span>
               <Link href={item.externalLink}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    {item.title}
                  </span>
                </Link>
             </div>
             <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
             <p className="text-gray-300 md:text-gray-400 text-left">
                  {item.description}
                </p>
             </div>
             <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                {item.technologies.map((tech, index) => (
                  <span key={index} className="pr-4 z-10">
                    {tech}
                  </span>
                ))}
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {item.githubLink && <GithubIcon link={item.githubLink} />}
                {item.externalLink && (
                  <a href={item.externalLink} target="_blank" rel="noreferrer">
                    <ExternalLink url={""} router={router} />
                  </a>
                )}
              </div>
           </div>
         </div>}
        </div>
      ))}
    </div>
  );
}
