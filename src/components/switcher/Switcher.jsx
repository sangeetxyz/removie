import React, { useState } from "react";

const Switcher = ({ tabs, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabClick = (tab, index) => {
    setSelectedTab(index);
    onTabChange(tab, index);
  };
  return (
    <div>
      <div className="flex space-x-1 rounded-3xl border-2 px-1 py-1">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className={`cursor-pointer rounded-full px-4 py-1 text-sm capitalize text-zinc-100 ${
                index === selectedTab
                  ? "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500"
                  : ""
              }`}
              onClick={() => {
                handleTabClick(tab, index);
              }}
            >
              {tab}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Switcher;
