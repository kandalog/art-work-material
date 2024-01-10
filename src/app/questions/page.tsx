import Image from "next/image";
import { Question } from "../components/question";
import { Navigation } from "../components/navigation";

export default function Questions() {
  return (
    <>
      <Navigation />
      <Question
        question="WatchmenにおけるDave Gibbonsの作画の特徴は？"
        important
      >
        ほぼ厳格な9コマ構成の仕様(almost stringent use of a 9-panel page.)
        <br />
        結果として、とても複雑でテキストの多いスタイルが生み出された
      </Question>
      <Question
        question="Watchmenにおける世界観理解のための工夫は？(2つ)"
        important
      >
        At the end of each issue fictional newspaper articles and excerpts form
        books provide to know more background information for the world of
        Watchmen.
        <br />
        作中の脇役キャラクターが読む架空の海賊コミック「Tales of the Black
        Freighter」もより複雑さを追加している。
      </Question>
      <Question
        question="From HellでMooreはJack the Ripperを漫画にするのにどのような説を利用した?"
        important
      >
        ・Moore uses the popular theory that royal surgeon Sir William Gull was
        the Ripper, killing his victims to protect the royal family from
        scandal.
      </Question>
      <Question
        question="Batman Killing JokeでJokerは何をした？ この話で設けた新たな基準は？"
        important
      >
        Joker shot Barbara Gordon. She injured and paralyzed lower body.
        <br />
        set a new tone for violence in mainstream comics
      </Question>
      <Question
        question="Mooreの解釈によれば人生をひっくり返して殺人狂に帰るのに必要なのは何ですか？"
        important
      >
        According to Moore, It need only really very bad day to turn your life
        upside down and turn you into a homicidal maniac
      </Question>
      <Question
        question="A Death in the FamilyではJokerに拷問を受けた後Robinが死亡しますが、その際何が行われましたか？"
        important
      >
        Readers were given a change to vote by telephone whether Robin would
        live or die.
      </Question>
      <Question
        question="Batman: The Dark Night Returnsでは何が起きた? (2つ)"
        important
      >
        1 Batman cannot kill the Joker, Joker suicide by snapping his own spine.
        2 スーパーマンとバットマンが決闘した
      </Question>
      <Question
        question="Flank Millerが初めてNYを訪れた時に体験したことは？"
        important
      >
        NYを訪れた時いくつかの漫画ののサンプルを持参したが、編集者に(Where are
        the guys in
        tight?)と言われた。その方法を学ぶ必要があると考えたが、Daredevilのsignature
        artistのGen
        Colanがleftすることをしって、チャンスだと思い、担当できるように努力して担当者として起用された
      </Question>
      {/*  */}
      <Question question="Dark Horse ComicからMarvel Comicに移った作品は?">
        (Conan)と(Star Wars)
      </Question>
      <Question question="Image ComicsはDCやMarvelの当時の発注方式と何が違った?">
        作者は自身の作品におけるに完全なartistic controllを持つことができた
      </Question>
      <Question question="Miraclemanの誕生の経緯は？">
        Marvelmanのイギリス版的存在として作られたMarvelmanがAlan
        Mooreによって再定義され誕生した
      </Question>
      <Question question="The Saga of the Swamp Thingは誰によって引き継がれ、どう変更された？">
        Alan Mooreが引き継ぎ、植物モンスターに帰られたAlec
        Hollandは人間だと思っている植物の生き物という設定に変更された
      </Question>
      <Question question="V for Vendettaはどんな物語で、誰に対する痛烈な批判？">
        ポストアポカリプティックなファシストのイギリス 当時の首相Margaret
        Thatcherに対する痛烈な批判
      </Question>
      <Question question="V for VendettaのアンチヒーローVは誰をモチーフにしている? 11月5日にどのような方法で彼のことを祝ってい">
        イギリスの議会を爆破しようとした歴史上の人物Guy Fawkes
        <br />
        藁製の人形の焼却や花火
      </Question>
      <Question question="V for Vendettaに因んだ仮面を利用している団体は？">
        hacktivist froup Anonymous
      </Question>
      <Question question="The League of Extraordinary Gentlemenはどんな物語">
        This is graphic novel series depicting a superhero team based on
        fictional characters from the Victorian age literature.
      </Question>
      <Question question="The League of Extraordinary Gentlemen第2巻では何と戦った?">
        The team fights against Martian invaders based on H. G. Wells’ War of
        the Worlds,
      </Question>
      <Question question="Moore'は'H.P. Lovecraf'の'Cthulu-mythos'(クトゥルフ神話)を3つのGraphic novelに翻案したがそれは">
        The Courtyard, Neonomicon, Providence
      </Question>
      <Question question="daredevilの元恋人の名前と、作中でどうなった？">
        元恋人のElectraが登場するが、宿敵Bullseyeに殺害される。のちに復活する
      </Question>
      <Question question="The Dark Night Returnsは何と並んで、何のきっかけを作った?">
        Watchmenと並んでアメリカン・コミックのDark Age or Modan
        Ageの到来のきっかけを作った
      </Question>
      <Question question="300はどことどこが戦った">
        Leonidas王率いる300人のスパルタ兵がXerxes王率いるPersian軍と戦った
      </Question>
    </>
  );
}
