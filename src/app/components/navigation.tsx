import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="m-2 p-1">
      <Link className="p-1" href="/">
        ホーム
      </Link>
      <Link className="p-1 ml-1" href="/questions">
        問題
      </Link>
    </div>
  );
};
