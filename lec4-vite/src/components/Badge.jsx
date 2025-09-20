import React from "react";

const Badge = ({ icon, title, description, iconContainerClassName }) => {
  return (
    <div className="h-20 flex-1 flex flex-row items-center border border-gray-200 shadow rounded-md">
      <div
        className={`h-20 w-20 flex items-center justify-center rounded-l-md ${iconContainerClassName}`}
      >
        {icon}
      </div>
      <div className="flex flex-col ml-4">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xl font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default Badge;
