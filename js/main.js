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

  /* ---------- Curseur personnalisé (desktop uniquement) ----------
     N'active le curseur custom que sur les pointeurs fins avec survol
     (souris/trackpad) : (hover: none) ou pointer:coarse (tactile) gardent
     le curseur natif intact.
     Géométrie : la pointe (sommet des deux traits) est en haut-gauche du
     repère SVG, les deux traits s'ouvrent vers le bas-droite — orientation
     normale d'un curseur de souris. L'angle entre les deux traits à leur
     jonction est de 50° (20° et 70° par rapport à l'horizontale, soit un
     écart de 50°, répartis symétriquement autour de la bissectrice à 45°).
     Le cercle flotte entre les deux traits (comme le cercle du logo entre
     ses branches) : il est centré sur la bissectrice, avec un espace net
     (~4px, épaisseur de trait comprise) entre son bord et chaque trait —
     vérifié par calcul, pas seulement par l'œil, pour éviter tout contact
     visuel une fois le trait et l'anti-aliasing pris en compte. */
  var pointerQuery = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)");
  if (pointerQuery && pointerQuery.matches) {
    var cursorEl = document.createElement("div");
    cursorEl.className = "custom-cursor";
    cursorEl.setAttribute("aria-hidden", "true");
    cursorEl.innerHTML =
      '<svg width="36" height="36" viewBox="0 0 36 36">' +
      '<path class="custom-cursor-wing" d="M6 6 L26.67 13.52"/>' +
      '<path class="custom-cursor-wing" d="M6 6 L13.52 26.67"/>' +
      '<circle class="custom-cursor-dot" cx="20.56" cy="20.56" r="3.4"/>' +
      "</svg>";
    document.body.appendChild(cursorEl);
    document.body.classList.add("custom-cursor-active");

    document.addEventListener("mousemove", function (e) {
      cursorEl.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px)";
    });
    document.addEventListener("mousedown", function () { cursorEl.classList.add("is-active"); });
    document.addEventListener("mouseup", function () { cursorEl.classList.remove("is-active"); });
    document.addEventListener("mouseleave", function () { cursorEl.style.opacity = "0"; });
    document.addEventListener("mouseenter", function () { cursorEl.style.opacity = "1"; });
  }
})();
