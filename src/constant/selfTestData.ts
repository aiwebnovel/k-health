import { Descriptions } from 'antd';
import shortid from 'shortid';

export const selfTestData = [
  {
    id: shortid.generate(),
    title: '당신의 체형은 어디에 해당되시나요?',
    options: [
      '다부진 체격에 균형, 어깨부분이 발달하나 살이 잘 찌는 편은 아니다',
      '전반적으로 균형 잡힌 몸매에 나이가 들면서 살이 찌는 1형과 살이 잘 찌고 체형이 일자형인 통통한 몸매를 가진다.',
      '균형 잡힌 스텐의 몸매인데 살이 찌면 복부에 살이 찌는 1형과 상체가 특히 어깨와 가슴부위가 발달하는 체형도 있다.',
      '약간 왜소해 보이고 살이 거의 안찌는 1형과 균형 잡힌 몸매에 살도 찌는 편이며, 특히 여자의 경우 하체가 발단한 사람도 있다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '당신의 얼굴형태는 어디에 해당되시나요?',
    options: [
      '이마가 발달하고 눈매가 강하며, 강인한 인상을 준다',
      '이목구비가 뚜렷하고, 눈매가 선한 인상의 1형과 같은 인상에 입술이 좀더 도톱하고 남자인 경우 목이 짧아 보이는 2형도 있다.',
      '약간 작은 얼굴에 입은 크지 않고 턱이 약간 각져보이고 목이 긴 1형과 서글하고 둥근 형태에 하얀 피부이거나 붉은 피부가 많은 2형도 있다.',
      '계란형의 이쁜 형태의 얼굴에 피부가 얇고 살집이 거의 없는 1형과 살도 찌고 피부톤과  결이 좋은 편인 2형도 있다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '당신의 얼굴 특징은?',
    options: [
      '강력한 인상을 준다.',
      '시원스럽고 후덕해 선이 굵어 보일 수도 있다.',
      '경쾌하고 눈이 반짝거리는 편이다',
      '얌전하고 온화해 보이는 계란형 얼굴이다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '당신의 손과 발은?',
    options: [
      '손발이 따뜻한 편이다.',
      '손발이 따뜻하고 도톰한 편이고 손톱이 둥근형태가 많다.',
      '손은 언제나 따뜻한 편이나 발은 차가운 때도 많다.',
      '손가락이 길며, 손톱이 좀 길어보이고, 여성의 경우 손발이 차가운 수족냉증환자 많다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '당신의 눈빛은 어디에 해당되시나요?',
    options: [
      '눈빛이 강력한 편이다',
      '눈빛이 소 눈처럼 착해 보이고 맑아 보인다',
      '눈빛이 반짝이고 예리하며 호기심이 많아 끝임없이 움직인다',
      '눈빛이 순하고 촉촉하며 눈웃음을 잘 짓는다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '당신의 눈빛은 어디에 해당되시나요?',
    options: [
      '눈빛이 강력한 편이다',
      '눈빛이 소 눈처럼 착해 보이고 맑아 보인다',
      '눈빛이 반짝이고 예리하며 호기심이 많아 끝임없이 움직인다',
      '눈빛이 순하고 촉촉하며 눈웃음을 잘 짓는다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '당신의 피부결과 톤은 어디에 해당되나요?',
    options: [
      '부드럽고 마른편이다.',
      '희고 많은 피부를 가진 사람도 있지만, 남성의 경우 붉은 기운이 돌고, 땀구멍이 큰 편이다. 살집이 있는 사람 중에는 지성피부가 많은 편이다.',
      '피부 결은 좋으나 건조한 편이고 살이 잘 찌는 체질인 2형의 경우엔 희고 촉촉한 편이다  피부가 탄력이 좋은 것도 특징',
      '피부결이 좋고 땀구멍은 작고 땀은 잘 흘리지 않는 편이다. 살이 거의 찌지 않는 1형의 경우 탄력이 떨어지는게 흠, 그러나 소화력 좋고 살이 찌는 2형의 경우 가장 이상적인  피부톤과 결을 가지고 있는 타고난 피부미인이 많다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '당신의 걸음거리는 어디에 행당됩니까?',
    options: [
      '꼿꼿하게 걷는다',
      '무게있게 젊잖게 걷는다',
      '걸움이 빠르고 상체가 흔들리는 경우가 많다.',
      '자연스럽고 얌전하게 걷는다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '당신의 음성은 어디에 해당됩니까?',
    options: [
      '체격에 비해 성량이 풍부하고 톤이 약간 높은편이다',
      '중저음의 부드러움이 묻어 나온다',
      '카랑카랑 하며 톤이 높은 편이다. 1형의 경우 목소리가 잘 쉬며 2형의 경우 체격은 좋은 편인데 목소리는 톤이 높은 사람도  많다.(강호동)',
      '조용하고 맑은 목소리가 많으며 몸집에 비해 목소리가 크고 성량이 좋은 사람도 있다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '당신의 성격과 기질중 장점이라고 생각되는 점은?',
    options: [
      '추진력이 좋고 철두철미한 완벽주의가 많다',
      '과묵한 편이며, 꾸준한 노력과 인내심과 남을 이해해 주는 아량을 가졌다.',
      '활동적이고 열성적이고, 봉사정신과 의협심이 강하다. 언제나 새로운것에 대한 관심이 많은 편이다.',
      '생각이 분석적이고 논리적이며, 모험보단 안전한 관계를 더 선호함',
    ],
  },
  {
    id: shortid.generate(),
    title: '당신의 성격 중 단점 이라고 생각되는 점은?',
    options: [
      '자신의 잘못을 후회하거나 인정을 잘 못하는 편이다',
      '보수적이고 변화를 싫어하는 편이다.',
      '시작은 좋으나 마무리가 부족한 경우가 많고, 감정의 변하가 심하다.',
      '개인주의적인 경향이 강하고 한번 감정이 상하면 쉽게 풀리지 않는다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '당신의 대화습관은 어떻다고 생각합니까?',
    options: [
      '수다스럽진 않지만 카리스마 있게 말을 잘하는 편이다.',
      '말수가 적고, 말하는 것을 좋아하지 않으며, 말을 많이 하면 쉽게 피곤함을 느낀다',
      '많이 많은 편이고, 빠르게 하며, 상대방이 내 말을 잘 못 알아들을 땐 답답함을 느낀다.',
      '말이 많지는 않지만 조리있게 하고, 가까운 사람과는 말을 많이 하는 경향이 있다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '당신의 대인관계는',
    options: [
      '행동에 거침이 없고 냉정한 편이다',
      '과묵하며 남의 애기를 끝까지 잘 듣는 편이어서, 다른 사람들이 자신에게 고민거리를 잘 말한다',
      '성격이 비교적 급하나 순간 판단력이 빠르며, 경솔하게 너무 빨리 판단을 하여 실수할 때가 많다',
      '소심한 면이 많으며, 섬세하고 남의 말에 민감한 편이다. 먼저 말을 걸기 보다는 친한 사람과 이야기하기를 즐겨한다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '자신의 성격에 해당되는 것은?',
    options: [
      '친하든 친하지 않든 남과 잘 사귀는 편이다',
      '매사에 신중하며 주위 사람이 보기에 믿음직 하다',
      '판단력이 빠르고 순발력과 창의력이 뛰어나다',
      '성격이 부드럽고 침착하며 생각을 많이 하고 빈틈이 없다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '자신의 성격에 해당되는 것은?',
    options: [
      '고집이 강하며 뚜렷한개인적 역사관을 가진다',
      '예의 바르고 점잖게 처신하는 편이다',
      '순발력은 뛰어나나 말이많고 감정적으로 행동하는 경우가 많다',
      '소심함 때문에 사람들 앞에선 자신을 드러내지 못하는 편이다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '자신의 성격에 해당되는 것은?',
    options: [
      '완벽주의 추구하는 사람이 많다.',
      '책임감이 강하며 큰 승부엔 강한 면모를 보인다',
      '다정다감하며, 이해타산에 얽매여 일하지 않고, 도덕성이 강한 행동을 한다.',
      '논리적이고 분석적이며 섬세한 편이다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '자신의 성격을 간략하게 이야기 하면?',
    options: [
      '자존심이 강하다',
      '인자하고 너그러운 편이다',
      '명랑하고 쾌활하며 재치가 있다',
      '사색적이고 치밀한 편이다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '자신의 성격은?',
    options: [
      '과감하고 강직하다. 창조적이지만 융화가 잘 안된다',
      '듬직하고 너그럽다. 의사표현을 잘 안하지만 일을 꾸준히 마무리한다',
      '민첩하고 발랄하다. 날카롭고 성격이 급해 화를 잘 내는 편이다',
      '내성적이고 온순하지만, 한편으론 소극적이고 우유부단할때도 있다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '당신의 잠버릇은?',
    options: [
      '일찍 잠드는 편이다',
      '잘 자는 편이지만, 예민해지면 불면증으로 고생하기도 한다',
      '일찍 일어나는 아침형 인간에 더 잘 적응하는편',
      '불면증에 시달리는 사람이 많고 올빼미형에 더 잘 적응하는편',
    ],
  },
  {
    id: shortid.generate(),
    title: '당신이 일을 추진할때는 ?',
    options: [
      '기획부터 치밀하게 끝가지 과단성 있게 추진한다',
      '일을 시작하면 묵묵하고 끈기있게 일을 추진한다.',
      '일을 잘 시작하나 한번 일이 막히면 당황해하고 추진력이 급격히 떨어지는 편이다',
      '일을 시작전 치밀하게 분석하고 체계적으로 진행하는 편이다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '나는 어떤 사람일까요?',
    options: [
      '완벽주의자가 되려 노력하는 강한의지의 사람',
      '느긋하며 잘 받아 드린다',
      '옳지 않은 것을 보면 참지 못한다.',
      '정확하고 빈틈없이 처리한다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '자신이 가장 좋아하는 음식은?',
    options: [
      '담백한 음식을 좋아하고, 튀김이나 기름진 음식은 찾아다니며 먹지 않는다.',
      '음식에 까다롭지 않으며, 기름진 음식도 잘 먹고, 음식의 질보단 양에 더 관심이 더 많다.',
      '음식을 자주 잘 먹으며, 맵거나 자극적인 음식은 땀 때문에 피하는 음식이다',
      '매운음식을 좋아하며, 밥으며 땀을 흘리는 경우는 거의 없다.',
    ],
  },
  {
    id: shortid.generate(),
    title: '당신의 소화력은?',
    options: [
      '소화력은 좋으나 음식을 많이 먹지는 않고 살도 잘 안찌는 편이다.',
      '소화력 좋고 음식 많이 먹는 편이며, 살이 잘 찌는 편이다.',
      '소화력 좋고, 자주 먹는 편이며, 특히 덩치가 좋은 살찌는 사람은 최강의 소화력을 가지고 있으며, 먹으면 찌고 안 먹는 잘 빠지는 경향이 있다.',
      '소화력이 아주 약한 마른 체형의 사람과 소화력 좋고 어느 정도 살이 찌는 소음인도 있는데 전반적으로 남과 비교해서 특별히 많이 먹지는 않는 편이다.',
    ],
  },
];

export const selfTestResultData = [
  {
    title: '태양인',
    imageSrc: '/images/taeyang.webp',
    description0:
      '1백만명 중 한명 꼴로 나타날 정도로 수적으로 많지 않기 때문에 감별이 용이하지는 않습니다.',
    description1:
      '사고력이 뛰어나고 누구와도 잘 사귀며 판단력과 진취적인 기상이 있습니다. 자존심이 강하고 일이 뜻대로 되지 않을 경우에는 분노해 건강을 해치기도 합니다',
  },
  {
    title: '태음인',
    imageSrc: '/images/taeum.webp',
    description0:
      '허리부위가 크고 코가 크거나 광대뼈가 나오고 비대한 편이 많습니다. 마른 사람도 있으나 골격은 건실합니다.',
    description1:
      '변화를 싫어하고 보수적이며 가정적이고 남의 칭찬을 좋아합니다.',
  },
  {
    title: '소양인',
    imageSrc: '/images/soyang.webp',
    description0:
      '어깨가 크고 눈이 잘 생겨 미남미녀가 많습니다. 외형적으로 가슴이 발달하고 둔부가 빈약한 편입니다.',
    description1:
      '공적인 것과 사적인 것을 구분하여 처리하는 원칙이 부족하여 자기 기분에 좌우되기도 합니다.',
  },
  {
    title: '소음인',
    imageSrc: '/images/soum.webp',
    description0:
      '엉덩이가 크고 입이 잘생기고 구강이 큰 편입니다. 외형상 상하 균형이 잘 잡혀 있고 보편적으로 체구는 작은 사람이 많습니다.',
    description1: '침착하고 끈질긴 면이 있으며 인내심이 강하고 세심합니다.',
  },
];
