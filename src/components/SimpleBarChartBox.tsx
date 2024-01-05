import React from "react";

export const SimpleBarChartBox = ({
  children,
  title,
  xtraStyle,
}: {
  children: JSX.Element;
  title: string;
  xtraStyle?: string;
}) => {
  return (
    <div
      className={`${xtraStyle} w-80 md:w-[48%] h-72 border-[.7px] shadow-md mt-2 rounded-lg border-stone-900 border-opacity-50 py-4 px-2`}
    >
      <p className="text-sm font-semibold text-purple-600 uppercase ml-3 -mt-2">
        {title}
      </p>
      {children}
    </div>
  );
};
