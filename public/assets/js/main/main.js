// main.js
import { initializeSwiper } from "./swiper.js";
import { initializeColorTab } from "./commonTab.js";
import { initializeMainTab } from "./mainTab.js";
import { initializeNotice } from "./notice.js";
import { initializeCountdown } from "./countDown.js";
import { initializeAccordion } from "./accordian.js";
import { showAlert } from "./alertPopup.js";
import { commonAlert } from "./commonAlert.js";
import { initializeAnimations } from "./animations.js";
import { initializeScroll } from "./scroll.js";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // AOS 초기화
    AOS.init({
      once: true, // 한번만 실행되도록 설정
      offset: 0, // 스크롤 애니메이션이 시작되는 지점을 0으로 설정하여 더 위에서부터 시작되도록 함
    });

    initializeSwiper();
    initializeColorTab();
    initializeMainTab();
    initializeNotice();
    initializeCountdown();
    initializeAccordion();
    initializeAnimations();
    initializeScroll();

    // 자세히 보기 버튼 클릭 이벤트 리스너 추가
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("detail-btn")) {
        const model = e.target.dataset.model;
        const storage = e.target.dataset.storage;
        showAlert(model, storage);
      }
    });

    // 공통 alert
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("com-alert-btn")) {
        const title = e.target.dataset.title;
        const content = e.target.dataset.content;
        const customContent = e.target.dataset.customContent;
        const model = e.target.dataset.model;

        commonAlert({ title, content, customContent, model });
      }
    });
  }, 100);
});
