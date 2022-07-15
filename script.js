const main = document.querySelector('#main');
const introductionText = document.querySelectorAll('.introduction-article p');

const originText = ['안녕하세요!!', '관심 직무 및 목표', '관심 분야 및 기술', 'AI 트랙에서 기대되는 점', '동료 레이서들에게', '나의 TMI'];
const changedText = ['황현성입니다', '백엔드 서버 개발자', 'Node, Spring', '팀프로젝트!!', '사랑해요 여러분', '별일 없으면 항상 누워있음'];

for (let i = 0; i < introductionText.length; i++) {
  introductionText[i].addEventListener('mouseout', () => {
    introductionText[i].innerHTML = originText[i];
  });

  introductionText[i].addEventListener('mouseover', () => {
    introductionText[i].innerHTML = changedText[i];
  });
}
