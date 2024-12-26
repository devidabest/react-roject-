import React from "react";
export default function SidebarItem({ link, icon, label }) {
  return (
    <a
      href={link}
      className="text-white flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md"
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </a>
  );
}
