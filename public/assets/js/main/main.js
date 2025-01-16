// main.js
import { initializeSwiper } from "./swiper.js";
import { initializeColorTab } from "./commonTab.js";
import { initializeMainTab } from "./mainTab.js";
import { initializeNotice } from "./notice.js";
import { initializeCountdown } from "./countDown.js";
import { initializeAccordion } from "./accordian.js";
// import { showAlert } from "./alertPopup.js";
// import { commonAlert } from "./commonAlert.js";
import { initializeAnimations } from "./animations.js";
import { initializeScroll } from "./scroll.js";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // AOS 초기화 추가
    if (typeof AOS !== "undefined") {
      // 첫 초기화
      AOS.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 120,
        duration: 800,
      });

      // 모든 이미지가 로드된 후 AOS 새로고침
      window.addEventListener("load", () => {
        AOS.refresh();
      });

      // 개별 이미지 로드 완료시마다 새로고침
      document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
        img.addEventListener("load", () => {
          AOS.refresh();
        });
      });
    }
    initializeSwiper();
    initializeColorTab();
    initializeMainTab();
    initializeNotice();
    initializeCountdown();
    initializeAccordion();
    initializeAnimations();
    initializeScroll();

    // 자세히 보기 버튼 클릭 이벤트 리스너 추가
    // document.addEventListener("click", (e) => {
    //   if (e.target.classList.contains("detail-btn")) {
    //     const model = e.target.dataset.model;
    //     const storage = e.target.dataset.storage;
    //     showAlert(model, storage);
    //   }
    // });

    // 공통 alert
    // document.addEventListener("click", (e) => {
    //   if (e.target.classList.contains("com-alert-btn")) {
    //     const title = e.target.dataset.title;
    //     const content = e.target.dataset.content;
    //     const customContent = e.target.dataset.customContent;
    //     const model = e.target.dataset.model;

    //     commonAlert({ title, content, customContent, model });
    //   }
    // });
  }, 100);
});
