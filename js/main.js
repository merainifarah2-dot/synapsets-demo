/* =========================================================================
   SynapsÉTS — comportements partagés (nav, header, reveal, footer, vidéo hero)
   Chargé sur toutes les pages.
   ========================================================================= */

(function () {
  "use strict";

  /* ---------- Année automatique dans le footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Menu mobile ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Ombre du header au scroll ---------- */
  var header = document.getElementById("header");
  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* ---------- Animation de révélation au scroll ---------- */
  function observeReveal(scope) {
    var els = (scope || document).querySelectorAll("[data-reveal]:not(.is-observed)");
    if (!els.length) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    els.forEach(function (el, i) {
      el.classList.add("is-observed");
      el.style.transitionDelay = Math.min(i % 4, 3) * 70 + "ms";
      observer.observe(el);
    });
  }
  observeReveal(document);
  window.SynapsETSRevealScope = observeReveal; // ré-utilisé par js/team.js après génération des cartes

  /* ---------- Hero vidéo (page d'accueil) : repli sur l'animation SVG ----------
     Le fichier vidéo réel (assets/hero-video.mp4) n'existe pas encore. Le
     <video> reste invisible (opacity: 0, voir css/style.css) tant qu'aucune
     image n'a réellement été décodée : l'animation SVG placée derrière lui
     fait donc office d'habillage par défaut, sans flash du poster. Dès que
     le vrai fichier sera déposé, 'loadeddata' se déclenchera et la vidéo
     apparaîtra en fondu. */
  var heroMedia = document.getElementById("hero-media");
  var heroVideo = heroMedia ? heroMedia.querySelector(".hero-video") : null;

  if (heroMedia && heroVideo) {
    heroVideo.addEventListener("loadeddata", function () {
      heroMedia.classList.add("video-ready");
    });
  }
})();
