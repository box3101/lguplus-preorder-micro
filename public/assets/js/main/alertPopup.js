// commonAlert.js
export function showAlert(model, storage) {
  // 혜택 데이터
  const benefitData = {
    "galaxy-s25": {
      "256GB": {
        benefitList: [
          { label: "공시지원금", value: "510,000원" },
          { label: "뽑기 즉시 할인 쿠폰", value: "40,000원" },
          { label: "쓰던 폰 반납", value: "650,000원" },
          { label: "쓰던 폰 추가보상", value: "200,000원" },
        ],
        totalBenefit: "1,400,000원",
      },
      "512GB": {
        benefitList: [
          { label: "공시지원금", value: "520,000원" },
          { label: "뽑기 즉시 할인 쿠폰", value: "45,000원" },
          { label: "쓰던 폰 반납", value: "670,000원" },
          { label: "쓰던 폰 추가보상", value: "220,000원" },
        ],
        totalBenefit: "1,455,000원",
      },
      "1TB": {
        benefitList: [
          { label: "공시지원금", value: "530,000원" },
          { label: "뽑기 즉시 할인 쿠폰", value: "50,000원" },
          { label: "쓰던 폰 반납", value: "690,000원" },
          { label: "쓰던 폰 추가보상", value: "240,000원" },
        ],
        totalBenefit: "1,510,000원",
      },
    },
    "galaxy-s25-plus": {},
    "galaxy-s25-ultra": {},
  };

  // 해당 모델과 용량의 데이터 가져오기, 없으면 기본값 사용
  const data =
    benefitData[model]?.[storage] || benefitData["galaxy-s25"]["256GB"];

  // alert 팝업 생성
  const alertHTML = `
   <div class="common-alert">
     <div class="alert-content">
       <div class="alert-body">
         <h3 class="alert-title">오늘'의 혜택 모두 적용 시</h3>
         <ul class="alert-benefit-list">
           ${data.benefitList
             .map(
               (benefit) => `
             <li>
               <span>${benefit.label}</span>
               <strong>${benefit.value}</strong>
             </li>
           `
             )
             .join("")}
         </ul>
         <div class="alert-total">
           <strong>${data.totalBenefit}</strong> 혜택 적용됨
         </div>
         <div class="alert-notice">
           <ul>
             <li>Galaxy S25 1TB 구매 시 혜택</li>
             <li>5G 프리미어+ 에센셜 요금제 공시지원금</li>
             <li>25년 1월 첫 출시 판매가 기준</li>
             <li>혜택이 종료될 경우 최종 혜택가가 변경될 수 있어요</li>
           </ul>
         </div>
       </div>
       <button type="button" class="alert-close">확인</button>
     </div>
   </div>
 `;

  // body에 팝업 추가
  document.body.insertAdjacentHTML("beforeend", alertHTML);

  // 팝업 요소 선택
  const alertPopup = document.querySelector(".common-alert");
  const closeButton = alertPopup.querySelector(".alert-close");

  // 닫기 버튼 클릭 이벤트
  closeButton.addEventListener("click", () => {
    alertPopup.remove();
  });

  // 배경 클릭 시 닫기
  alertPopup.addEventListener("click", (e) => {
    if (e.target === alertPopup) {
      alertPopup.remove();
    }
  });
}
