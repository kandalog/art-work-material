"use client";
import { Question } from "./question";

const questions = [
  {
    question: "The Sandman",
    answer: "Neil Gaiman",
  },
  {
    question: "Mr. Punch",
    answer: "原作: Neil Gaiman. 作画: Dave McKean",
  },
  {
    question: "Animal Man",
    answer: "Grant Morrison",
  },
  {
    question: "Batman: Arkham Asylum",
    answer: "原作: Grant Morison. 作画: Dave McKean",
  },
  {
    question: "The Invisibles",
    answer: "Grant Morison",
  },
  {
    question: "Preacher",
    answer: "Garth Ennis",
  },
  {
    question: "The Boys",
    answer: "Garth Ennis",
  },
  {
    question: "The Punisher",
    answer: "Garth Ennis",
  },
  {
    question: "Transmetropolitan",
    answer: "原作: Warren Ellis 作画: Darick Robertson",
  },
  {
    question: "Planetary",
    answer: "原作: Warren Ellis 作画: John Cassaday",
  },
  {
    question: "Hellblazer: Shoot",
    answer: "Waren Ellis",
  },
  {
    question: "Bone",
    answer: "Jeff Smith",
  },
  {
    question: "The Smartest Kid on Earth",
    answer: "Chris Ware",
  },
  {
    question: "The Infinity Gauntlet",
    answer: "原作: Jim Starlin 作画: George Perez",
  },
  {
    question: "Maus",
    answer: " Art Spigelman",
  },
];

for (let i = questions.length - 1; 0 < i; i--) {
  let r = Math.floor(Math.random() * (i + 1));
  let tmp = questions[i];
  questions[i] = questions[r];
  questions[r] = tmp;
}

export default function Quiz() {
  return (
    <>
      {questions.map((question) => (
        <Question
          key={question.question}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </>
  );
}
