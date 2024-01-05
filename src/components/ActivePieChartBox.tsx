import React from "react";

export const ActivePieChartBox = ({
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
      className={`${xtraStyle} w-[20rem] md:w-[31rem] h-[17rem] border-[.7px] shadow-md mt-2 rounded-lg border-stone-900 border-opacity-50`}
    >
      <p className="text-sm font-semibold text-purple-600 uppercase ml-3 mt-3">
        {title}
      </p>
      {children}
    </div>
  );
};
