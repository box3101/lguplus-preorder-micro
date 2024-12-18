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
        if (entry.isIntersecting) {
          entry.target.classList.add("on");

          const rangeProgress = entry.target.querySelector(".range-progress");
          const savingsAmount = entry.target.querySelector(".savings-amount");

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

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  const priceComparisonSection = document.querySelector("#priceComparison");
  if (priceComparisonSection) {
    observer.observe(priceComparisonSection);
  }
};
