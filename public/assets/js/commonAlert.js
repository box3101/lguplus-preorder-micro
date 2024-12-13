// commonAlert.js
export function commonAlert({
  title = "",
  content = "",
  model = "",
  customContent = false,
  closeOnBackdrop = true,
}) {
  // 쿠폰을 이렇게 사용해요
  const coupon = `
    <ul>
      <li>
        쿠폰은 이렇게 사용해요
      </li>
      <li>
        쿠폰은 이렇게 사용해요 <br>
        쿠폰은 이렇게 사용해요
      </li>
      <li>
        쿠폰은 이렇게 사용해요
      </li>
      <li>
        쿠폰은 이렇게 사용해요
      </li>
    </ul>
  `;

  // 경품 유의사항
  const prize = `
    <ul>
      <li>
        경품 유의사항
      </li>
      <li>
        경품 유의사항 <br>
        경품 유의사항
      </li>
      <li>
        경품 유의사항
      </li>
      <li>
        경품 유의사항
      </li>
    </ul>
  `;

  // 혜택 데이터
  const benefitData = {
    retailPrice: {
      benefitList: [
        { label: "공시지원금", value: "510,000원" },
        { label: "뽑기 즉시 할인 쿠폰", value: "40,000원" },
        { label: "쓰던 폰 반납", value: "650,000원" },
        { label: "쓰던 폰 추가보상", value: "200,000원" },
      ],
      totalBenefit: "1,400,000원",
    },
    carrierPrice: {
      benefitList: [
        { label: "공시지원금2", value: "510,000원" },
        { label: "뽑기 즉시 할인 쿠폰2", value: "40,000원" },
        { label: "쓰던 폰 반납", value: "650,000원" },
        { label: "쓰던 폰 추가보상", value: "200,000원" },
      ],
      totalBenefit: "1,500,000원",
    },
    competitorPrice: {
      benefitList: [
        { label: "공시지원금3", value: "510,000원" },
        { label: "뽑기 즉시 할인 쿠폰3", value: "40,000원" },
        { label: "쓰던 폰 반납", value: "650,000원" },
        { label: "쓰던 폰 추가보상", value: "200,000원" },
      ],
      totalBenefit: "1,600,000원",
    },
  };

  // 해당 모델과 용량의 데이터 가져오기, 없으면 기본값 사용
  const benefitDatas = benefitData[model] || benefitData["galaxy-s25"];

  // 이전 팝업 제거
  const existingPopup = document.querySelector(".common-alert");
  if (existingPopup) {
    existingPopup.remove();
  }

  // alert 팝업 생성
  const alertHTML = `
      <div class="common-alert custom">
          <div class="alert-content">
            <div class="alert-body">
              ${title ? `<h3 class="alert-title">${title}</h3>` : ""}
              ${content === "coupon" ? `${coupon}` : ""}
              ${content === "prize" ? `${prize}` : ""}
              ${
                customContent
                  ? `
                    <ul class="alert-benefit-list">
                      ${benefitDatas.benefitList
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
                      합계 <strong>${benefitDatas.totalBenefit}</strong> 
                    </div>
                    <button type="button" class="alert-close">확인</button>
                    `
                  : ""
              }
              </div>
          </div>
      </div>
    `;

  // body에 팝업 추가
  document.body.insertAdjacentHTML("beforeend", alertHTML);

  // 팝업 요소 선택
  const alertPopup = document.querySelector(".common-alert");

  // 팝업 닫기 함수
  const closeAlert = () => {
    alertPopup.remove();
  };

  // 배경 클릭 시 닫기
  if (closeOnBackdrop) {
    alertPopup.addEventListener("click", (e) => {
      if (e.target === alertPopup) {
        closeAlert();
      }
    });
  }
}
