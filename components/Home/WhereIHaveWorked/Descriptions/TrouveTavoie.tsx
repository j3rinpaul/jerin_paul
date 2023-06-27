import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: "Build official website for slash-key 2.0 30 hour hackathon organised by IEEE CS Kerala Chapter which was co-powered by Intel One Api.",
      keywords: ["Slash Key official Website"],
    },
    {
      text: "Maintained IEEE CS Kerala Chapter's official webiste.",
      keywords: ["React", "Express js", "Node js"],
    },
    
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Web Master <span className="text-AAsecondary">@ IEEE CS Kerala Chapter</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">January - December 2023</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
    </>
  );
}
