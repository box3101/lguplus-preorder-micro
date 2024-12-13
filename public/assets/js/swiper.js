export function initializeSwiper() {
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

  // 컬러 스와이퍼 초기화 함수
  function initColorSwiper(element) {
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
        el: ".swiper-scrollbar",
        draggable: true,
        hide: false,
      },
    });
  }

  // 활성화된 탭의 스와이퍼만 초기화
  function initializeActiveSwiper() {
    const activeContent = document.querySelector(".common-tab-content.active");
    if (activeContent) {
      const swipers = activeContent.querySelectorAll(".color-swiper");
      swipers.forEach((element) => {
        // 이미 초기화된 스와이퍼 제거
        if (element.swiper) {
          element.swiper.destroy();
        }
        initColorSwiper(element);
      });
    }
  }

  // 초기 스와이퍼 초기화
  initializeActiveSwiper();

  // 탭 변경 이벤트에 스와이퍼 초기화 연결
  const tabItems = document.querySelectorAll(".common-tab-menu-item");
  tabItems.forEach((item) => {
    item.addEventListener("click", () => {
      // 탭 변경 후 약간의 딜레이를 주고 스와이퍼 초기화
      setTimeout(initializeActiveSwiper, 100);
    });
  });
}
