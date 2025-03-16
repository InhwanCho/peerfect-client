'use client';

import { stopChallenge } from '@/api/stop-challenge';
import SvgX from '../../icons/M/X';
import CustomButton from '../custom-button';
import { useUserStore } from '@/store/use-user-store';
import { useRouter } from 'next/navigation';

interface ServiceModalProps {
  onClose: () => void;
  serviceType:
    | 'error'
    | 'loginRequired'
    | 'stopChallenge'
    | 'aboutToExpire'
    | 'extendDeadline'
    | 'challengeFail'
    | 'selectMainChallenge';
}

export default function ServiceModal({
  onClose,
  serviceType,
}: ServiceModalProps) {
  const router = useRouter();
  const { memberId, setUserInfo } = useUserStore();
  const modalContent = {
    error: {
      image: '/assets/modal-image/service_error.webp',
      title: '피어펙트 서비스 오류',
      description: [
        '예상하지 못한 오류가 발생했습니다.',
        '잠시 후 다시 이용해 주세요.',
      ],
      buttons: [
        {
          text: '확인',
          color: 'purple',
          onClick: onClose,
        },
      ],
    },
    loginRequired: {
      image: '/assets/modal-image/login_required.webp',
      title: '앗! 로그인이 필요해요',
      description: [
        '로그인하고 더 많은 기능을 만나보세요!',
        '회원이 아니신가요? 아래 회원가입 버튼으로 시작하세요.',
      ],
      buttons: [
        {
          text: '로그인하러 가기',
          color: 'purple',
          onClick: () => router.push('/auth'),
        },
        {
          text: '회원가입',
          color: 'outline-purple',
          onClick: () => router.push('/auth'),
        },
      ],
    },
    stopChallenge: {
      image: '/assets/modal-image/stop_challenge.webp',
      title: '챌린지를 중단하시겠어요?',
      description: ['목표까지의 시간보다 도전 자체가 중요해요!'],
      buttons: [
        {
          text: '아니요, 계속 도전할래요',
          color: 'purple',
          onClick: () => {
            console.log('계속 도전 클릭');
            onClose();
          },
        },
        {
          text: '네, 중단할게요',
          color: 'outline-purple',
          onClick: async () => {
            try {
              if (memberId) {
                await stopChallenge(memberId);
                console.log('챌린지 중단 성공');
                setUserInfo({ challengeInfo: null });
                router.push('/');
              }
              onClose();
            } catch (error) {
              console.error('챌린지 중단 실패:', error);
            }
          },
        },
      ],
    },
    aboutToExpire: {
      image: '/assets/modal-image/about_to_expire.webp',
      title: '[사용자 이름]님의 도전이 완료되기 직전입니다!',
      description: [
        '안녕하세요, [사용자 이름]님!',
        '도전하고 있는 [챌린지 이름]의 기한이 [날짜]에 종료될 예정입니다.',
        '💪 기한 연장하기 버튼을 클릭해 연장을 완료해보세요.',
      ],
      buttons: [
        {
          text: '기한 연장하기',
          color: 'purple',
          onClick: () => console.log('기한 연장 클릭'),
        },
      ],
    },
    extendDeadline: {
      image: '/assets/modal-image/deadline_extension.webp',
      title: '기한 연장 모달',
      description: [
        '[챌린지 이름]이(가) [종료일]에 만료됩니다.',
        '조금 더 시간이 필요하신가요? 기한을 연장해서 목표 달성을 계속 이어가세요!',
      ],
      buttons: [
        {
          text: '연장하기',
          color: 'purple',
          onClick: () => console.log('연장 클릭'),
        },
        {
          text: '취소',
          color: 'outline-purple',
          onClick: onClose,
        },
      ],
    },
    challengeFail: {
      image: '/assets/modal-image/challenge_failed.webp',
      title: '이번 도전은 아쉽게도 실패했어요.',
      description: [
        '열심히 노력해주셨지만, [챌린지 이름]이(가) 기한 내에 완료되지 않았습니다.',
        '실패는 성공의 밑거름이죠!',
        '이번 경험을 밑판 삼아 새로운 도전을 시작해 보세요.',
      ],
      buttons: [
        {
          text: '새로운 도전 시작하기',
          color: 'purple',
          onClick: () => console.log('새로운 도전 시작 클릭'),
        },
        {
          text: '취소',
          color: 'outline-purple',
          onClick: onClose,
        },
      ],
    },
    selectMainChallenge: {
      image: '/assets/modal-image/main_challenge_required.webp',
      title: '메인 챌린지를 먼저 선택해주세요!',
      description: [
        '[업데이트될 챌린지 이름]에 접근하려면 메인 챌린지를 먼저 설정해야 합니다.',
        '메인 챌린지는 모든 도전의 중심이며, 목표 달성을 위한 중요한 시작점이에요.',
      ],
      buttons: [
        {
          text: '메인 챌린지 설정하기',
          color: 'purple',
          onClick: () => router.push('/'),
        },
        {
          text: '취소',
          color: 'outline-purple',
          onClick: onClose,
        },
      ],
    },
  };

  const content = modalContent[serviceType];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative w-[548px] rounded-2xl bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute right-8 top-6" onClick={onClose}>
          <SvgX className="size-[24px]" />
        </button>

        <div className="mt-[70px] flex flex-col items-center justify-center">
          <img src={content.image} width={160} alt="modal visual" />
          <h3 className="mt-10 text-h4">{content.title}</h3>
          <div className="mt-3 flex flex-col items-center text-body">
            {content.description.map((line, idx) => (
              <p key={idx} className="py-0.5">
                {line}
              </p>
            ))}
          </div>
          <div className="mt-[48px] flex gap-4">
            {content.buttons.map((button, idx) => (
              <CustomButton
                key={idx}
                color={button.color as 'purple' | 'outline-purple'}
                size={content.buttons.length > 1 ? 'modalSize' : 'large'}
                onClick={button.onClick}
              >
                {button.text}
              </CustomButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
