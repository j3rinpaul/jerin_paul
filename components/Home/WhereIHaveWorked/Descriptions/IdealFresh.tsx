import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IdealFresh() {
  const tasks = [
    {
      text: "An initative by IIT Madras incubation cell and IIT Mandi to find young minds having bright ideas.",
      keywords: ["IITM"],
    },
    {
      text: "Participated in the 6 months curriculum where we are given knowledge about new technologies.",
      keywords: ["Knowledge about new tech by IITM"],
    },
    {
      text: "Build products based on our idea and the technology.",
      keywords: ["Build products based on our idea"],
    },
    {
      text: "Automatic Headlight dimmer.",
      keywords: ["Product"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Learn Engineering Through Activity Program<span className="text-AAsecondary"> by IITM</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">May - December 2022</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
    </>
  );
}
