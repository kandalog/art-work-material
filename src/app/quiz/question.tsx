"use client";

import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

export const Question = ({ question, answer }: Props) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className="shadow-custom mt-3"
      onClick={() => setIsShow((prev) => !prev)}
    >
      <p>{question}</p>
      {isShow ? <p>{answer}</p> : null}
    </div>
  );
};
