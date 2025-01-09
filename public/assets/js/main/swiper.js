export function initializeSwiper() {
  // 가격 스와이퍼 (price)
  // 가격 스와이퍼와 메인 비주얼 스와이퍼 연동
  const mainVisual = document.querySelector(".main-visual");
  const priceSwiper = document.querySelector(".price-swiper");
  const mainVisualSwiper = document.querySelector(".main-visual-swiper");
  const bgSwiper = document.querySelector(".bg-swiper");

  if (mainVisual) {
    // 가격 스와이퍼 초기화
    const priceSwiperInstance = new Swiper(priceSwiper, {
      direction: "horizontal",
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      speed: 500,
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
      allowTouchMove: true,
    });

    // 메인 비주얼 스와이퍼 초기화
    const mainSwiperInstance = new Swiper(mainVisualSwiper, {
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
      allowTouchMove: true,
    });

    // bg 스와이퍼 초기화
    const bgSwiperInstance = new Swiper(bgSwiper, {
      direction: "horizontal",
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      allowTouchMove: true,
    });

    priceSwiperInstance.controller.control = [
      mainSwiperInstance,
      bgSwiperInstance,
    ];
    mainSwiperInstance.controller.control = [
      priceSwiperInstance,
      bgSwiperInstance,
    ];
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
  }

  // Lucky Draw 메인 스와이퍼
  const prizeDisplayEl = document.querySelector(".prize-display-swiper");
  if (prizeDisplayEl) {
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
  }

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
