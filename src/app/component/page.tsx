import Radio from "@/components/common/Radio";
import React from "react";
import * as Icons from "../../components/icons";

export default function Page() {
  const iconComponents = [
    "Adds",
    "Clan",
    "Clock",
    "Community",
    "Drawings",
    "Game",
    "Help",
    "Missions",
    "Offers",
    "Question",
    "Refresh",
    "Rewards",
    "Store",
    "Time",
    "More",
    "Top",
    "Team",
    "Ticket",
    "Spore",
    "Apple",
    "ArrowLeftOne",
    "Calender",
    "Camera",
    "Message",
    "ChevronDown",
    "Android",
    "CircleUser",
    "Desktop",
    "Eye",
    "Video",
    "Done",
    "Flag",
    "Search",
    "Info",
    "Notification",
    "Close",
    "Danger",
    "Plus",
    "Minus",
    "Send",
    "Heart",
    "Comment",
    "Edit",
    "Lock",
    "Smile",
    "ArrowRight",
    "Cart",
    "Maximize",
    "Minimize",
    "ArrowLeft",
    "ArrowTopRight",
    "Menu",
    "Trash",
    "DangerTwo",
  ];

  return (
    <div className="bg-dark mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-8 text-white">
      {/* Button */}
      <div className="">
        <span className="font-semibold">Button</span>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span>Radio</span>
        <Radio label="radio" />
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span className="font-semibold">Icons</span>
        <div className="flex flex-wrap items-center gap-3">
          {iconComponents.map((iconName) => {
            const Icon = Icons[iconName as keyof typeof Icons];
            return (
              <div
                key={iconName}
                className="flex flex-col items-center gap-1 text-xs"
              >
                <Icon />
                <span>{iconName}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
