import React, { ReactNode } from "react";

export const LineGraphBox = ({
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
      className={`${xtraStyle} border-[.7px] border-opacity-50 border-stone-900 pr-2 md:pr-8 rounded-lg shadow-md w-80 md:w-fit`}
    >
      <h4 className="font-thin text-purple-800 uppercase italic underline text-center mt-1">
        {title}
      </h4>
      {children}
    </div>
  );
};
