// animations.js
export const initializeAnimations = () => {
  function animateCounter(element, target, duration) {
    let start = 0;
    const fps = 90;
    const frameDuration = 1000 / fps;
    const totalFrames = duration / frameDuration;
    const increment = target / totalFrames;

    function updateCounter() {
      start += increment * 1.5;
      element.textContent = Math.floor(start).toLocaleString();

      if (start < target) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(updateCounter);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const rangeProgress = entry.target.querySelector(".range-progress");
        const savingsAmount = entry.target.querySelector(".savings-amount");

        if (entry.isIntersecting) {
          // 영역에 들어왔을 때
          entry.target.classList.add("on");

          if (savingsAmount) savingsAmount.classList.add("on");

          if (rangeProgress) {
            setTimeout(() => {
              rangeProgress.classList.add("on");
            }, 500);
          }

          if (savingsAmount && savingsAmount.dataset.target) {
            const target = parseInt(savingsAmount.dataset.target);
            const duration = parseInt(savingsAmount.dataset.duration) / 1.5;
            animateCounter(savingsAmount, target, duration);
          }
        } else {
          // 영역을 벗어났을 때
          entry.target.classList.remove("on");
          if (savingsAmount) savingsAmount.classList.remove("on");
          if (rangeProgress) rangeProgress.classList.remove("on");

          // 숫자를 0으로 리셋
          if (savingsAmount) {
            savingsAmount.textContent = "0";
          }
        }
      });
    },
    {
      threshold: 0.5,
      // rootMargin을 추가하면 요소가 화면에 더 일찍/늦게 감지되도록 조정할 수 있습니다
      // rootMargin: "-50px 0px"
    }
  );

  const priceComparisonSection = document.querySelector("#priceComparison");
  if (priceComparisonSection) {
    observer.observe(priceComparisonSection);
  }
};
