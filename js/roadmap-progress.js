/* =========================================================================
   SynapsÉTS — barre de progression de scroll (page Projet uniquement)
   Apparaît une fois le hero dépassé, se remplit selon la position de scroll
   à l'intérieur de #roadmap, puis disparaît après la dernière étape.
   ========================================================================= */

(function () {
  "use strict";

  var bar = document.getElementById("roadmap-progress");
  var fill = document.getElementById("roadmap-progress-fill");
  var hero = document.querySelector(".page-hero");
  var roadmap = document.getElementById("roadmap");

  if (!bar || !fill || !hero || !roadmap) return;

  var ticking = false;

  function update() {
    ticking = false;

    var scrollY = window.scrollY || window.pageYOffset;
    var heroBottom = hero.offsetTop + hero.offsetHeight;
    var roadmapTop = roadmap.offsetTop;
    var roadmapBottom = roadmapTop + roadmap.offsetHeight;

    var isVisible = scrollY > heroBottom - 40 && scrollY < roadmapBottom;
    bar.classList.toggle("is-visible", isVisible);

    var progress = (scrollY - roadmapTop) / (roadmapBottom - roadmapTop);
    progress = Math.max(0, Math.min(1, progress));
    fill.style.width = (progress * 100) + "%";
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
})();
