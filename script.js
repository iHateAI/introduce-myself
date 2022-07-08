
const introductionText = document.querySelectorAll('.introduction-article p');

const originText = ['안녕하세요!!', '관심 직무 및 목표', '관심 분야 및 기술', 'AI 트랙에서 기대되는 점', '동료 레이서들에게', '나의 TMI'];
const changedText = ['황현성입니다', '백엔드 서버 개발자', 'Node, Spring', '프로젝트 참여', '모두 좋은 결과 있길 바라요', 'ISFP, 은평구, 피자, 누워있기'];

for (let i = 0; i < introductionText.length; i++) {
  introductionText[i].addEventListener('mouseout', () => {
    introductionText[i].innerHTML = originText[i];
  });

  introductionText[i].addEventListener('mouseover', () => {
    introductionText[i].innerHTML = changedText[i];
  });
}
