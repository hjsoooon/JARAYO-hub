
import { PrototypeItem, FAQItem } from './types';

export const PROTOTYPE_LINKS = {
  babyOS: "https://t.maze.co/496433866",
  poopScan: "https://t.maze.co/496844020",
  expertCoach: "https://t.maze.co/496432666",
  urTurn: "https://t.maze.co/496644869",
};

export const SERVICE_LINKS = {
  babyOS: "https://babting.github.io/jarayo/",
  poopScan: "https://hjsoooon.github.io/poopscan/",
  expertCoach: "https://hjsoooon.github.io/Jarayo/",
  urTurn: "https://moonbo-debug.github.io/jarayo_02/#/home",
};

export const PROTOTYPES: PrototypeItem[] = [
  {
    id: "babyOS",
    icon: "✨",
    title: "전지적 아기 시점",
    slogan: "기록은 부모가, 이야기는 아기가",
    description: "엄마가 아기의 질문에 음성으로 답하면, AI가 이를 분석해 아기의 시선으로 재해석된 세상에 하나뿐인 동화책과 음성 일기를 만들어주는 서비스",
    keyValues: [
      "양손이 바쁜 육아 중에도 목소리만으로 남기는 생생한 기록",
      "엄마의 일기를 아기의 시선으로 재해석한 특별한 동화",
      "디지털 기록을 넘어 아이의 목소리가 담긴 실물 동화책 제작"
    ],
    link: PROTOTYPE_LINKS.babyOS,
    serviceLink: SERVICE_LINKS.babyOS,
    badge: "Prototype"
  },
  {
    id: "poopScan",
    icon: "💩",
    title: "AI Poopscan",
    slogan: "찍는 순간 기록 끝, AI가 분석하는 우리 아기 건강 신호등",
    description: "아기 기저귀를 사진으로 기록하면 AI가 변 상태를 분석해 아기의 장 컨디션 변화를 한눈에 보여주고, 이상 징후가 의심될 때 다음 행동을 안내하는 서비스.",
    keyValues: [
      "1초 컷 간편 기록: 전쟁 같은 육아 중에도 ‘사진 한 장’이면 끝나는 자동 기록",
      "배변 상태를 ‘데이터’로 바꿔 컨디션 변화를 한눈에 확인",
      "막연한 불안감을 해소하고 지금 당장 엄마가 해줄 수 있는 '구체적인 행동' 제안"
    ],
    link: PROTOTYPE_LINKS.poopScan,
    serviceLink: SERVICE_LINKS.poopScan,
    badge: "Prototype"
  },
  {
    id: "expertCoach",
    icon: "🧑‍⚕️",
    title: "AI 챗봇 (육아 코치)",
    slogan: "초보 부모의 든든한 24시간 코치",
    description: "육아 중 생기는 질문을 채팅으로 입력하면, 상황에 맞춘 실용적인 육아 가이드(수유/수면/배변/발달/훈육 등)를 즉시 정리해주는 AI 육아 코치 서비스.",
    keyValues: [
      "“우리 애가 왜 울지?”라는 질문에 일반론이 아닌, 아기의 최근 기록(배변, 수면, 월령)을 토대로 원인을 유추하고 답변",
      "맘카페의 '카더라' 통신이나 광고성 정보 대신, 의학적/통계적으로 검증된 육아 지식만을 선별하여 제공",
      "단순 정보 전달을 넘어 육아에 지친 보호자의 마음을 공감하고 위로하는 따뜻한 대화 경험 제공"
    ],
    link: PROTOTYPE_LINKS.expertCoach,
    serviceLink: SERVICE_LINKS.expertCoach,
    badge: "Prototype"
  },
  {
    id: "urTurn",
    icon: "🤝",
    title: "니차례 (UrTurn)",
    slogan: "육아는 팀전이다",
    description: "가족/시터/어린이집이 함께 쓰는 '육아 업무 인수인계 툴' — 입력 최소화, 다음 교대자에 자동 요약.",
    keyValues: [
      "교대 시간에 현황 자동 요약 '인수인계 브리핑'.",
      "아기 안고 1초 기록 '한 손 원탭 UX'.",
      "구성원별 기여도 시각화 '팩트 리포트'."
    ],
    link: PROTOTYPE_LINKS.urTurn,
    serviceLink: SERVICE_LINKS.urTurn,
    badge: "Prototype"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "어떻게 만들었나요?",
    answer: "모든 프로토타입은 바이브코딩 툴(Google AI Studio, Google Antigravity, Cursor AI 등)을 활용해 제작했습니다. 지금 보고 계신 이 랜딩페이지도요!"
  },
  {
    question: "누가 만들었나요?",
    answer: "휴레이포지티브의 One Man Army! 손혜지, 이가인, 김문보가 만들었습니다. 궁금한 점이 있다면 언제든 직접 찾아와 편하게 이야기해 주세요!"
  },
  {
    question: "링크가 열리지 않아요.",
    answer: "사내 망 보안 설정에 따라 특정 링크가 차단될 수 있습니다. 모바일 데이터를 사용하거나 VPN 설정을 확인해 주세요."
  },
  {
    question: "권장 실행 환경이 어떻게 되나요?",
    answer: "테스트 자체는 크롬 브라우저에서 진행하시되, 실제 서비스 URL 접속 및 UI 확인은 모바일 환경에서 수행하는 것을 권장합니다."
  },
  {
    question: "의료 진단 결과로 믿어도 되나요?",
    answer: "본 서비스의 AI 분석 결과는 보조적인 정보일 뿐이며, 절대 의료 진단을 대체할 수 없습니다. 이상 징후 발생 시 반드시 전문의의 진료를 받으세요."
  }
];
