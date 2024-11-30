export default function ChallengeDescription() {
  return (
    <section
      id="챌린지설명"
      className="flex flex-col gap-y-4 md:gap-y-10 lg:gap-y-16"
    >
      <div>
        <h2 className="mb-2 text-xl font-bold text-main-primary">
          챌린지 소개
        </h2>
        <h3 className="mb-4 text-xl font-semibold text-text-primary">title</h3>
        <p>
          Michelle and Barack Obama gave resounding endorsements of Kamala
          Harris on Tuesday night at the Democratic National Convention.
        </p>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-bold text-main-primary">
          챌린지 미션
        </h2>
        <h3 className="mb-4 text-xl font-semibold text-text-primary">title</h3>
        <p className="text-text-primary">
          In their back-to-back speeches, the Democratic Party’s most popular
          figures praised Ms. Harris.
        </p>
      </div>
    </section>
  );
}
