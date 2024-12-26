export function initializeScroll() {
  const header = document.querySelector(".ip283_header_type2");
  const kvArea = document.querySelector(".main-visual");
  const secondSection = document.querySelector(".preorder-coupon");
  const countdownToast = document.querySelector("#countdown-toast");
  let lastScrollTop = 0;

  if (header && kvArea && secondSection && countdownToast) {
    // 초기 로드 시 체크
    const checkInitialPosition = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const secondSectionTop = secondSection.offsetTop;

      if (currentScrollTop >= secondSectionTop) {
        countdownToast.classList.add("show");
      }
    };

    // 페이지 로드 시 한 번 실행
    checkInitialPosition();

    // 리사이즈 이벤트에도 체크
    window.addEventListener("resize", checkInitialPosition);

    window.addEventListener("scroll", () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const kvBottom = kvArea.offsetTop + kvArea.offsetHeight;
      const secondSectionTop = secondSection.offsetTop;

      // 헤더 처리
      if (currentScrollTop > kvBottom) {
        header.classList.add("header-hidden");
      } else {
        header.classList.remove("header-hidden");
        if (currentScrollTop > lastScrollTop) {
          header.classList.add("scrollEffect");
        } else {
          header.classList.remove("scrollEffect");
        }
      }

      // 타임 카운트 플로팅 처리
      if (currentScrollTop >= secondSectionTop) {
        countdownToast.classList.add("show");
      } else {
        countdownToast.classList.remove("show");
      }

      lastScrollTop = currentScrollTop;
    });
  }
}
