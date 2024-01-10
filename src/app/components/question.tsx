"use client";

import { useState } from "react";

type Props = {
  question: string;
  children: React.ReactNode;
  important?: true | null;
};

export const Question = ({ question, children, important }: Props) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className={`shadow-custom cursor-pointer mt-2 ${
        important && "border-2 border-red-500"
      }`}
      onClick={() => setIsShow((prev) => !prev)}
    >
      <p className="p-1">{question}</p>
      {isShow ? (
        <p className="p-1 border-t-[1px] border-solid border-[#ddd]">
          {children}
        </p>
      ) : null}
    </div>
  );
};
