import Image from "next/image";
import { Artwork } from "./components/artwork";

export default function Home() {
  return (
    <>
      <h2 className="text-4xl py-1">Murakami Takashi</h2>
      <Artwork
        src="/murakamitakashi/andthen.png"
        text="And then, and then and then and then and then (Blue). (1994)"
      />
      <Artwork src="/murakamitakashi/727.png" text="727, 1996" />
      <Artwork src="/murakamitakashi/supernova.png" text="Supernova, 1999" />
      <Artwork src="/murakamitakashi/500 Arhats.png" text="500 Arhats, 2012" />
      <h2 className="text-4xl py-1">Nara Yoshitomo</h2>
      <Artwork
        src="/yohitomonara/whereismycat.png"
        text="Where is My Cat?, 1995"
      />
      <Artwork
        src="/yohitomonara/深い深い水溜まり.png"
        text="深い深い水溜まり In the Deepest Puddle, 1995"
      />
      <Artwork
        src="/yohitomonara/hothousedoll.png"
        text="Hot House Doll, 1995"
      />
      <Artwork
        src="/yohitomonara/longest night.png"
        text="⻑い⻑い⻑い夜(Longest Night), 1995"
      />
      <Artwork
        src="/yohitomonara/knife behind back.png"
        text="Knife Behind Back, 2000"
      />
      <h2 className="text-4xl py-1">Mori Mariko</h2>
      <Artwork
        src="/morimariko/Tea Ceremony II.png"
        text="Tea Ceremony II, 1994"
      />
      <Artwork src="/morimariko/Play with Me.png" text="Play with Me, 1994" />
      <Artwork
        src="/morimariko/Tea Ceremony |||.png"
        text="Tea Ceremony III, 1995."
      />
      <Artwork
        src="/morimariko/Birth of a Start.png"
        text="Birth of a Star, 1995"
      />
      <h2 className="text-4xl py-1">Morimura Yasumasa</h2>
      <Artwork
        src="/morimurayasumasa/Tabletop City (Arch of Triumph).png"
        text="Tabletop City (Arch of Triumph) 1984"
      />
      <Artwork
        src="/morimurayasumasa/Portrait (Van Gogh).png"
        text="Portrait (Van Gogh) 1985"
      />
      <Artwork
        src="/morimurayasumasa/Portrait (twin).png"
        text="Portrait (twin), 1988"
      />
      <Artwork
        src="/morimurayasumasa/Psychoborg 22.png"
        text="Psychoborg 22 (1994)"
      />
      <Artwork
        src="/morimurayasumasa/Requirm for Something.png"
        text="Requiem for Something, 2006"
      />
      <h2 className="text-4xl py-1">Kusama Yayoi</h2>
      <Artwork
        src="/kusama and shiota/Infinity Rooms.png"
        text="Infinity Rooms 1965"
      />
      <Artwork
        src="/kusama and shiota/Obliteration Room.png"
        text="Obliteration Room (自己消滅) 2002"
      />
      <h2 className="text-4xl py-1">Shiota Chiharu</h2>
      <Artwork
        src="/kusama and shiota/The Key in the Hand.png"
        text="The Key in the Hand, 2015 Venice Biennale"
      />
      <h2 className="text-4xl py-1">teamLab</h2>
      <Artwork
        src="/teamLab/teamLab Ultra Subjective Space.png"
        text="Ultrasubjective Space 2001"
      />
      <Artwork src="/teamLab/Ginza Firefly.png" text="Ginza Firefly, 2002" />
      <Artwork
        src="/teamLab/100 Years Sea Animation Diorama.png"
        text="100 Years Sea (2009)"
      />
      <Artwork
        src="/teamLab/四季千年神田図 - 田染荘 : Four Seasons, a 1000 Years, Terraced Rice Fields - Tashibunosho.png"
        text="Four Seasons, a 1000 Years, Terraced Rice Fields - Tashibunosho 2016"
      />
      <Artwork
        src="/teamLab/Forest of Resonating Lamps - One Stroke.png"
        text="Forest of Resonating Lamps-One Stroke (2016)"
      />
      <Artwork
        src="/teamLab/Resonating Forest and Autonomous Resonating Life - Tadasu Forest at Shimogamo Shrine.png"
        text="Resonating Forest and Autonomous Resonating Life - Tadasu Forest at Shimogamo Shrine (2018)"
      />
      <Artwork
        src="/teamLab/floating flower garden.png"
        text="Floating Flower Garden: Flowers and I are of the Same Root, the Garden and I are One"
      />
      <Artwork src="/teamLab/harmony 2015.png" text="HARMONY 2015" />
      <Artwork src="/teamLab/graffiti nature.png" text="Graffiti Nature" />
      <Artwork
        src="/teamLab/megaliths in the bath house ruins.png"
        text="Megaliths in the Bath House Ruins"
      />
      <h2 className="text-4xl py-1">Chim Pom</h2>
      <Artwork src="/Chim Pom/Super Rat.png" text="Super Rat 2008" />
      <Artwork src="/Chim Pom/REAL TIMES.png" text="REAL TIMES 2011" />
      <Artwork
        src="/Chim Pom/LEVEL 7 feat 'Myth of Tomorrow'.png"
        text="LEVEL 7 feat 'Myth of Tomorrow' 2011"
      />
    </>
  );
}
