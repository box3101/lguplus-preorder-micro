export function initializeSwiper() {
  // 배경 스와이퍼 추가
  const bgSwiper = document.querySelector(".bg-swiper");
  if (bgSwiper) {
    new Swiper(bgSwiper, {
      direction: "horizontal",
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 300,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      allowTouchMove: false,
    });
  }

  // 가격 스와이퍼 (price)
  const priceSwipers = document.querySelectorAll(".price-swiper");
  if (priceSwipers.length) {
    priceSwipers.forEach((element) => {
      new Swiper(element, {
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        speed: 300,
        effect: "creative",
        creativeEffect: {
          prev: {
            translate: [0, "-50%", 0],
            opacity: 0,
          },
          next: {
            translate: [0, "50%", 0],
            opacity: 0,
          },
        },
        grabCursor: false,
        parallax: true,
        allowTouchMove: false,
      });
    });
  }

  // 메인 스와이퍼 슬라이드
  const mainVisualSwiper = document.querySelector(".main-visual-swiper");
  if (mainVisualSwiper) {
    new Swiper(mainVisualSwiper, {
      direction: "horizontal",
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 300,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      allowTouchMove: false,
    });
  }

  // Lucky Draw 메인 스와이퍼
  // const prizeDisplaySwiper = document.querySelector(".prize-display-swiper");
  // if (prizeDisplaySwiper) {
  //   const mainSwiper = new Swiper(prizeDisplaySwiper, {
  //     effect: "fade",
  //     fadeEffect: {
  //       crossFade: true,
  //     },
  //     loop: true,
  //     speed: 800,
  //     allowTouchMove: false,
  //   });
  //   // Lucky Draw 썸네일 스와이퍼
  //   const prizeThumbsSwiper = new Swiper(".prize-thumbs-swiper", {
  //     slidesPerView: 3,
  //     grid: {
  //       rows: 2,
  //       fill: "row",
  //     },
  //     spaceBetween: 10,
  //     loop: false,
  //     watchSlidesProgress: true,
  //     allowTouchMove: true,
  //   });
  //   // 썸네일 클릭 시 메인 이미지 변경 및 모션 효과
  //   const thumbSlides = document.querySelectorAll(
  //     ".prize-thumbs-swiper .swiper-slide"
  //   );
  //   thumbSlides.forEach((slide, index) => {
  //     slide.addEventListener("click", () => {
  //       thumbSlides.forEach((s) =>
  //         s.querySelector(".thumb-item").classList.remove("active")
  //       );
  //       slide.querySelector(".thumb-item").classList.add("active");

  //       // Swiper 인스턴스를 사용하여 slideTo 메서드 호출
  //       mainSwiper.slideTo(index);

  //       const mainSlide = document.querySelector(
  //         ".prize-display-swiper .swiper-slide-active"
  //       );
  //       if (mainSlide) {
  //         mainSlide.style.animation = "none";
  //         mainSlide.offsetHeight;
  //         mainSlide.style.animation = "prizeReveal 0.8s ease-out forwards";
  //       }
  //     });
  //   });
  // }

  // 컬러 스와이퍼 초기화
  const colorSwiper = document.querySelector(".color-swiper");
  if (colorSwiper) {
    // 개별 컬러 스와이퍼 초기화 함수
    function initColorSwiper(element) {
      if (element.swiper) {
        element.swiper.destroy(true, true);
      }

      return new Swiper(element, {
        direction: "horizontal",
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        speed: 500,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        scrollbar: {
          el: element.querySelector(".swiper-scrollbar"),
          draggable: true,
          hide: false,
        },
        observer: true,
        observeParents: true,
        on: {
          init: function () {
            this.slideTo(0, 0);
          },
        },
      });
    }

    // 모든 컬러 스와이퍼 초기화 함수
    function initializeAllColorSwipers() {
      const allSwipers = document.querySelectorAll(".color-swiper");
      allSwipers.forEach((element) => {
        if (element && element.querySelector(".swiper-wrapper")) {
          initColorSwiper(element);
        }
      });
    }

    // 초기 컬러 스와이퍼 초기화
    initializeAllColorSwipers();

    // 모델 탭 클릭 이벤트 리스너
    const modelTabs = document.querySelectorAll(
      ".model-tab .common-tab-menu-item"
    );
    modelTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        setTimeout(initializeAllColorSwipers, 300);
      });
    });

    // 컬러 탭 클릭 이벤트 리스너
    const colorTabs = document.querySelectorAll(
      ".color-tab .common-tab-menu-item"
    );
    colorTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        setTimeout(() => {
          const activeContent = document.querySelector(
            ".common-tab-content.active .color-swiper"
          );
          if (activeContent && activeContent.querySelector(".swiper-wrapper")) {
            initColorSwiper(activeContent);
          }
        }, 300);
      });
    });
  }
}
