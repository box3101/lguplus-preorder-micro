// commonAlert.js
export function commonAlert({
  title = "",
  content = "",
  confirmText = "확인",
  cancelText = null,
  onConfirm = () => {},
  onCancel = () => {},
  closeOnBackdrop = true,
}) {
  // 이전 팝업 제거
  const existingPopup = document.querySelector(".common-alert");
  if (existingPopup) {
    existingPopup.remove();
  }

  // alert 팝업 생성
  const alertHTML = `
      <div class="common-alert">
          <div class="alert-content">
              ${title ? `<h3 class="alert-title">${title}</h3>` : ""}
              ${
                content
                  ? `
                  <div class="alert-body">
                      ${
                        typeof content === "string"
                          ? `<p>${content}</p>`
                          : content
                      }
                  </div>
              `
                  : ""
              }
          </div>
      </div>
    `;

  // body에 팝업 추가
  document.body.insertAdjacentHTML("beforeend", alertHTML);

  // 팝업 요소 선택
  const alertPopup = document.querySelector(".common-alert");
  const confirmButton = alertPopup.querySelector(".alert-confirm");
  const cancelButton = alertPopup.querySelector(".alert-cancel");

  // 팝업 닫기 함수
  const closeAlert = () => {
    alertPopup.remove();
  };

  // 확인 버튼 이벤트
  confirmButton.addEventListener("click", () => {
    onConfirm();
    closeAlert();
  });

  // 취소 버튼 이벤트
  if (cancelButton) {
    cancelButton.addEventListener("click", () => {
      onCancel();
      closeAlert();
    });
  }

  // 배경 클릭 시 닫기
  if (closeOnBackdrop) {
    alertPopup.addEventListener("click", (e) => {
      if (e.target === alertPopup) {
        onCancel();
        closeAlert();
      }
    });
  }
}
