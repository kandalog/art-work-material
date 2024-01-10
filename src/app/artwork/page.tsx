import Image from "next/image";
import { Artwork } from "../components/artwork";

export default function ArtWork() {
  return (
    <>
      <h2 className="text-4xl py-1">Murakami Takashi</h2>
      <Artwork
        src="/murakamitakashi/murakamitakashi.png"
        text="1962年, 東京生まれ, 東京芸術大学卒, 日本画専攻, 博士号, 漫画やイラストに興味がある"
      />
      <p className="p-2 shadow-custom">
        Mr. DOB: 彼が作成したネズミみたいなキャラクターのこと
        <br />
        superflat: (2000年に彼が生み出した用語) It refers to both the “flatness”
        of Japanese art, as well as a “flattening” of art cultures– mixing high
        and low, different time periods, etc
      </p>
      <Artwork
        src="/murakamitakashi/andthen.png"
        text="And then, and then and then and then and then (Blue). (1994)"
      />
      <Artwork src="/murakamitakashi/727.png" text="727, 1996" />
      <Artwork src="/murakamitakashi/supernova.png" text="Supernova, 1999" />
      <Artwork src="/murakamitakashi/500 Arhats.png" text="500 Arhats, 2012" />
      <h2 className="text-4xl py-1">Nara Yoshitomo</h2>
      <Artwork
        src="/yohitomonara/narayoshitomo.png"
        text="1959年, 青森育ち ドイツで芸術を学ぶ, 東京とLAでgallery exhibitionを学ぶ, 2000年に横浜博物館でsolo展覧会を開催"
      />
      <p className="p-2 shadow-custom">
        Cool Japan: It is a general term for Japanese pop culture, such as
        anime, manga, games, music, and fashion.
        <br />
        kawaii: cute, sweet, adorable, innocent, pure, simple, weak
      </p>
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
      <Artwork
        src="/yohitomonara/Fountain of Life, 2001:2014.png"
        text="Fountain of Life, 2001/2014"
      />
      <Artwork
        src="/yohitomonara/Midnight Truth, 2017.png"
        text="Midnight Truth, 2017"
      />
      <h2 className="text-4xl py-1">Mori Mariko</h2>
      <Artwork
        src="/morimariko/morimariko.png"
        text="1967年 東京生まれ, 文化服装学院卒, ファッションモデルとして活躍した際、ロンドンとニューヨークで勉強、ロンドンに戻りChelsea大学で芸術でデザインについて勉強"
      />
      <p className="p-2 shadow-custom">
        モダンガール or モガ:
        家の外に仕事を持つ未婚の女性、頻繁にカフェに行き、流行りの西洋の服を購入する
        経済的に自立している女性
      </p>
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
      <p className="p-2 shadow-custom">
        1951年大阪生まれ
        <br />
        京都芸術大学卒 写真に興味があった
        <br />
        Ernest Satowの助手を務めた
      </p>
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
      <p className="p-2 shadow-custom">
        1929年 東京生まれ、京都芸大卒, 世界で最も稼いでいる芸術家,
        ニューヨークに住んでいたが日本に帰ってきた。キャリアの継続に苦労したが、現在は日本で最も重要な、いや世界で最も重要な存命な芸術家
      </p>
      <p className="p-2 shadow-custom">
        Installation art:
        物体ではなく状況、観客は完成のために参加することが求められる。観客は作品の一部になる
      </p>
      <Artwork
        src="/kusama and shiota/Infinity Rooms.png"
        text="Infinity Rooms 1965"
      />
      <Artwork
        src="/kusama and shiota/Obliteration Room.png"
        text="Obliteration Room (自己消滅) 2002"
      />
      <h2 className="text-4xl py-1">Shiota Chiharu</h2>
      <p className="p-2 shadow-custom">
        1972年生まれ, 京都精華大学卒, ベルリンで勉強経験,
        初期の作品は彼女の教授Maria
        Abramovicに影響を受けたパフォーマンス作品だった
      </p>
      <Artwork
        src="/kusama and shiota/The Key in the Hand.png"
        text="The Key in the Hand, 2015 Venice Biennale"
      />
      <Artwork
        src="/kusama and shiota/Navigating the Unknown, 2020.png"
        text="Navigating the Unknown, 2020"
      />
      <h2 className="text-4xl py-1">teamLab</h2>
      <p className="p-2 shadow-custom">
        2001年に5名からスタートし、今では600名以上のメンバーがいる
      </p>
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
      <h2 className="text-4xl py-1">その他</h2>
      <Artwork
        src="/others/harakiri school girl.png"
        text="Makoto Aida, Harakiri School Girls, 1999"
      />
      <p className="p-2 shadow-custom">
        Beginning in the late 1950s and 1960s <br />
        <br />
        ART MOVEMENT: “Movement” refers to a group of artists who share a
        similar motivation, theme, or style, and are working during the same
        specific cultural moment or time period.
        <br />
        <br />
        Pop Art:
        アートがどうあるべきかという議題に取り組んでいる。漫画や日用品など人気な文化や大衆文化からideaを借りることが多い
        <br />
        <br />
        Minimalism: It is simple geometric shapes based on the square and the
        rectangle
        <br />
        <br />
        Conceptual Art: 完成した作品よりも、作品の背後にあるアイデア or
        コンセプトがより重要である作品。作品の技術で判断することはできない。日用品をよく使う
        <br />
        <br />
        Performance Art
        芸術家、もしくは他人がアクションやパフォーマンスで表現した作品
        <br />
        <br />
        Conceptual Artに近いため、アイデアはより重要である Video Art
        表現の種としてビデオテクノロジーを用いている表現方法
      </p>
    </>
  );
}
