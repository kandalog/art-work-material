import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="m-2 p-1">
      <Link className="p-1" href="/">
        1
      </Link>
      <Link className="p-1 ml-1" href="/second">
        2
      </Link>
      <Link className="p-1 ml-1" href="/questions1">
        問題1
      </Link>
      <Link className="p-1 ml-1" href="/questions2">
        問題2
      </Link>
      <Link className="p-1 ml-1" href="/remainder">
        余暇
      </Link>
      <Link className="p-1 ml-1" href="/quiz">
        クイズ
      </Link>
    </div>
  );
};
