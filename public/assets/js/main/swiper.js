export function initializeSwiper() {
  // 가격 스와이퍼 (price)
  const priceSwipers = document.querySelectorAll(".price-swiper");
  if (priceSwipers.length) {
    priceSwipers.forEach((element) => {
      setTimeout(() => {
        new Swiper(element, {
          direction: "horizontal",
          loop: true,
          autoplay: {
            delay: 2500, // 딜레이 시간 자연스럽게 조정
            disableOnInteraction: false,
          },
          speed: 500, // 속도 자연스럽게 조정
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
        });
      }, 0);
    });
  }

  // 메인 스와이퍼 슬라이드
  const mainVisualSwiper = document.querySelector(".main-visual-swiper");
  if (mainVisualSwiper) {
    setTimeout(() => {
      new Swiper(mainVisualSwiper, {
        direction: "horizontal",
        loop: true,
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
        speed: 500, // 속도 자연스럽게 조정
        autoplay: {
          delay: 2500, // 딜레이 시간 자연스럽게 조정
          disableOnInteraction: false,
        },
        allowTouchMove: false,
      });
    }, 0);
  }

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
        speed: 300,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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

  // Lucky Draw 메인 스와이퍼
  // Lucky Draw 메인 스와이퍼
  const prizeDisplaySwiper = new Swiper(".prize-display-swiper", {
    effect: "creative", // fade 대신 creative 효과 사용
    creativeEffect: {
      prev: {
        translate: [0, 0, -400],
        rotate: [0, 0, -45],
        opacity: 0,
      },
      next: {
        translate: [0, 0, -400],
        rotate: [0, 0, 45],
        opacity: 0,
      },
    },
    loop: true,
    speed: 800, // 속도를 좀 더 늘림
    allowTouchMove: false,
  });

  // Lucky Draw 썸네일 스와이퍼
  const prizeThumbsSwiper = new Swiper(".prize-thumbs-swiper", {
    slidesPerView: 3,
    grid: {
      rows: 2,
      fill: "row",
    },
    spaceBetween: 10,
    loop: false,
    watchSlidesProgress: true,
    allowTouchMove: true,
  });

  // 썸네일 클릭 시 메인 이미지 변경 및 모션 효과
  const thumbSlides = document.querySelectorAll(
    ".prize-thumbs-swiper .swiper-slide"
  );
  thumbSlides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
      // 클릭한 썸네일에 active 클래스 추가
      thumbSlides.forEach((s) =>
        s.querySelector(".thumb-item").classList.remove("active")
      );
      slide.querySelector(".thumb-item").classList.add("active");

      // 메인 이미지 전환
      prizeDisplaySwiper.slideTo(index);

      // 메인 이미지에 추가 애니메이션 적용
      const mainSlide = document.querySelector(
        ".prize-display-swiper .swiper-slide-active"
      );
      if (mainSlide) {
        mainSlide.style.animation = "none";
        mainSlide.offsetHeight; // reflow
        mainSlide.style.animation = "prizeReveal 0.8s ease-out forwards";
      }
    });
  });

  const benefitSwipers = document.querySelectorAll(".benefit-swiper");
  if (benefitSwipers.length) {
    benefitSwipers.forEach((element) => {
      new Swiper(element, {
        slidesPerView: 1.2,
        spaceBetween: 12,
      });
    });
  }
}
