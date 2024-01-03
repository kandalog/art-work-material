import Image from "next/image";
import { Artwork } from "./components/artwork";

export default function Home() {
  return (
    <>
      <h2 className="text-4xl mb-2">Murakami Takashi</h2>
      <Artwork
        src="/draemon.png"
        text="Artwork from Superflat Doraemon exhibition, 2019"
      />
      <Artwork
        src="/draemon2.png"
        text="Fujiko F. Fujio First serialized 1964"
      />
    </>
  );
}
