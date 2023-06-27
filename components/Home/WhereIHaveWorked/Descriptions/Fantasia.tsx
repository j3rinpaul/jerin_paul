import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Fantasia() {
  const tasks = [
    {
      text: "Organised various events & made the oppurtunities availed from the foundation to the College Chapter.",
      keywords: ["vicelead"],
    },
    {
      text: "Coordinated the student activities and be a part of the tech activities that take place in the college.",
      keywords: ["Skill set"],
    },
   
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Vice Lead <span className="text-AAsecondary">@ TinkerHub GECI</span>
        </span>
        {/* Date */}
        {/* <span className="font-mono text-xs text-gray-500">June - July 2018</span> */}
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
      {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
