import Image from "next/image";

interface Props {
  src: string;
  text: string;
  width?: number | undefined;
  height?: number | undefined;
  alt?: string | undefined;
}

export const Artwork = ({
  src,
  text,
  width = 250,
  height = 250,
  alt = "",
}: Props) => {
  return (
    <div className="p-2 m-2 rounded shadow-custom">
      <Image src={src} width={width} height={height} alt={alt} />
      <p className="pt-1">{text}</p>
    </div>
  );
};
