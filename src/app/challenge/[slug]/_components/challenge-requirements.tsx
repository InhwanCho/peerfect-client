import CheckMarkIcon from '@/app/_components/icons/check-mark-icon';

export default function ChallengeRequirements() {
  return (
    <div className="mt-6 flex h-[260px] items-start rounded-3xl border p-6">
      <div className="flex h-full w-1/4 flex-col items-center justify-center">
        <CheckMarkIcon
          type="challenge_requrements"
          color="#AC6BFF"
          width="40"
          height="40"
        />
        <h3 className="mt-4 text-lg font-semibold text-text-primary">
          요구조건
        </h3>
      </div>
      <div className="ml-8 flex h-full flex-1 items-center">
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="flex size-8 items-center justify-center rounded-full">
              <CheckMarkIcon type="challenge_requrements" color="#AC6BFF" />
            </div>
            <span className="ml-4 font-medium text-text-primary">Text</span>
          </li>
          <li className="flex items-center">
            <div className="flex size-8 items-center justify-center rounded-full">
              <CheckMarkIcon type="challenge_requrements" color="#AC6BFF" />
            </div>
            <span className="ml-4 font-medium text-text-primary">Text</span>
          </li>
          <li className="flex items-center">
            <div className="flex size-8 items-center justify-center rounded-full">
              <CheckMarkIcon type="challenge_requrements" color="#AC6BFF" />
            </div>
            <span className="ml-4 font-medium text-text-primary">Text</span>
          </li>
          <li className="flex items-center">
            <div className="flex size-8 items-center justify-center rounded-full">
              <CheckMarkIcon type="challenge_requrements" color="#AC6BFF" />
            </div>
            <span className="ml-4 font-medium text-text-primary">Text</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
