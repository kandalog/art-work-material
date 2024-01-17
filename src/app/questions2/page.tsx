import { Question } from "../components/question";
import { Navigation } from "../components/navigation";

export default function Questions() {
  return (
    <>
      <Navigation />
      <Question question="Neil Gaimanについての説明と受賞した文学賞の列挙">
        British author of graphic fiction, non-fiction, audio theatre and film.
        He is winner of Nebula, Hugo, National, Book Award.
      </Question>
      <Question question="The Sandmanはどのようにまとめられ、何の一部だった？">
        Collected in graphic novel format, the Sandman story arcs were among the
        first graphic fiction texts on the New York Times bestseller list
      </Question>
      <Question question="The Sandmanは1991年に何を受賞し、何が変わった？">
        The Sandman was Winner of World Fantasy Award 1991 for best short story.
        The Sandman became the first comic to do so. After Gaiman&apos;s win the
        rules were tightened, because graphic fiction was not suppoted to win in
        a general category.
      </Question>
      <Question question="DCに大人向けのレーベルは何？ 代表作は?(5つ)">
        It&apos;s Vertigo Imprint.
        <br />
        Sandman, Hellblazer, Lucifer, Swampthing, Preacher
      </Question>
      <Question question="Preacherは何を設定した？ 最も議論を呼ぶシーンは？">
        It sets new standards for violence and explicit content for a mainstream
        comic book.
        <br />
        The most controversial scenes is that killer of saint kills god
      </Question>
      <Question question="Waren EnnisがPunisherを完全に再編した背景について説明">
        Marvel&apos;s Max imprint was facing crisis of existing. All Monthly
        title was cancelled due to low of sale. Waren Ennis redefined punisher.
        The punisher is killer of criminals completely because MAX imprint allow
        freedom of creating.
      </Question>
      <Question question="HellblazerのShootは執筆中止になりました。なぜですか？">
        Hellblazer&apos;s Shoot of Vertigo Imprint was cancelled because it was
        controversial issue. After the Columbine Hight School accident which 12
        people killed by 2 high school students.
      </Question>
    </>
  );
}
