import { Question } from "../components/question";
import { Navigation } from "../components/navigation";

export default function Questions() {
  return (
    <>
      <Navigation />
      <Question question="WatchmenにおけるDave Gibbonsの作画の特徴は？">
        ほぼ厳格な9コマ構成の仕様(almost stringent use of a 9-panel page.)
        <br />
        結果として、とても複雑でテキストの多いスタイルが生み出された
      </Question>
      <Question question="Watchmenにおける世界観理解のための工夫は？(2つ)">
        At the end of each issue fictional newspaper articles and excerpts form
        books provide to know more background information for the world of
        Watchmen.
        <br />
        作中の脇役キャラクターが読む架空の海賊コミック「Tales of the Black
        Freighter」もより複雑さを追加している。
      </Question>
      <Question question="From HellでMooreはJack the Ripperを漫画にするのにどのような説を利用した?">
        ・Moore uses the popular theory that royal surgeon Sir William Gull was
        the Ripper, killing his victims to protect the royal family from
        scandal.
      </Question>
      <Question question="Batman Killing JokeでJokerは何をした？ この話で設けた新たな基準は？">
        Joker shot Barbara Gordon. She injured and paralyzed lower body.
        <br />
        set a new tone for violence in mainstream comics
      </Question>
      <Question question="Mooreの解釈によれば人生をひっくり返して殺人狂に帰るのに必要なのは何ですか？">
        According to Moore, It need only really very bad day to turn your life
        upside down and turn you into a homicidal maniac
      </Question>
      <Question question="A Death in the FamilyではJokerに拷問を受けた後Robinが死亡しますが、その際何が行われましたか？">
        Readers were given a change to vote by telephone whether Robin would
        live or die.
      </Question>
      <Question question="Batman: The Dark Night Returnsでは何が起きた? (2つ)">
        1 Batman cannot kill the Joker, Joker suicide by snapping his own spine.
        2 スーパーマンとバットマンが決闘した
      </Question>
      <Question question="Flank Millerが初めてNYを訪れた時に体験したことは？">
        NYを訪れた時いくつかの漫画ののサンプルを持参したが、編集者に(Where are
        the guys in
        tight?)と言われた。その方法を学ぶ必要があると考えたが、Daredevilのsignature
        artistのGen
        Colanがleftすることをしって、チャンスだと思い、担当できるように努力して担当者として起用された
      </Question>
      {/*  */}
    </>
  );
}
