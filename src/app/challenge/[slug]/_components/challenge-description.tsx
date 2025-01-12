interface ChallengeDescriptionProps {
  challengeIntro: string;
  challengeMission: string;
}

export default function ChallengeDescription({
  challengeIntro,
  challengeMission,
}: ChallengeDescriptionProps) {
  // '.'을 기준으로 나눠 문장 리스트 생성
  const introParagraphs = challengeIntro
    .split('.')
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence); // 공백 및 빈 항목 제거

  // '-'를 기준으로 나눠 리스트 아이템 생성
  const missionList = challengeMission
    .split('-')
    .map((item) => item.trim())
    .filter((item) => item); // 공백 및 빈 항목 제거

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
        <div className="space-y-2 text-text-primary">
          {introParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}.</p>
          ))}
        </div>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-bold text-main-primary">
          챌린지 미션
        </h2>
        <h3 className="mb-4 text-xl font-semibold text-text-primary">title</h3>
        <ul className="list-disc pl-5 text-text-primary">
          {missionList.map((mission, index) => (
            <li key={index}>{mission}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
