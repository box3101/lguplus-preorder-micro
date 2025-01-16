// main.js
import { initializeSwiper } from "./swiper.js";
import { initializeColorTab } from "./commonTab.js";
import { initializeMainTab } from "./mainTab.js";
import { initializeNotice } from "./notice.js";
import { initializeCountdown } from "./countDown.js";
import { initializeAccordion } from "./accordian.js";
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
  }, 100);
});
