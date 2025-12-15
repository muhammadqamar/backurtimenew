import Radio from "@/components/common/Radio";
import React from "react";

export default function Page() {
  return (
    <div className="bg-dark mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-8 text-white">
      {/* Button */}
      <div className="">
        <span>Button</span>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <span>Radio</span>
        <Radio label="radio" />
      </div>
    </div>
  );
}
