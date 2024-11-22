import CheckMarkIcon from '@/app/_components/icons/check-mark-icon';

export default function ChallengeRequirements() {
  return (
    <div className="p-6 rounded-3xl border flex items-start mt-6 h-[260px]">
      <div className="flex flex-col justify-center items-center w-1/4 h-full">
        <CheckMarkIcon type='challenge_requrements' color="#AC6BFF" width="40" height="40" />
        <h3 className="mt-4 text-lg font-semibold text-text-primary">요구조건</h3>
      </div>
      <div className="flex-1 ml-8 flex items-center h-full">
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full">
              <CheckMarkIcon type='challenge_requrements' color="#AC6BFF" />
            </div>
            <span className="ml-4 text-text-primary font-medium">Text</span>
          </li>
          <li className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full">
              <CheckMarkIcon type='challenge_requrements' color="#AC6BFF" />
            </div>
            <span className="ml-4 text-text-primary font-medium">Text</span>
          </li>
          <li className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full">
              <CheckMarkIcon type='challenge_requrements' color="#AC6BFF" />
            </div>
            <span className="ml-4 text-text-primary font-medium">Text</span>
          </li>
          <li className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full">
              <CheckMarkIcon type='challenge_requrements' color="#AC6BFF" />
            </div>
            <span className="ml-4 text-text-primary font-medium">Text</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
