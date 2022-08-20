// circles 엘리먼트 값 변수 설정
const circles = document.querySelectorAll(".circle");

let activeLight = 0;

// 1초마다 changeLight 함수 호출
setInterval(changeLight, 1000);

function changeLight() {
  // circles 엘리먼트의 0번째, 1번째, 2번째 클래스명을 circle로 변경
  circles[activeLight].className = "circle";

  // activeLight 값을 1초에 1씩 증가
  activeLight++;

  // activeLight 값이 3이 되면 다시 0으로 값 변경
  if (activeLight > 2) {
    activeLight = 0;
  }

  // 현재 circles 엘리먼트 값을 currentLight 변수 값에 저장
  const currentLight = circles[activeLight];

  // currentLight의 클래스 속성 값에 현재 currentLight의 color 속성 값을 추가
  currentLight.classList.add(currentLight.getAttribute("color"));
}
