/* =========================================================================
   SynapsÉTS — animation SVG "exosquelette de jambe" (schéma technique)
   Remplace le pattern générique de points/réseau : silhouette simplifiée
   d'une jambe d'exosquelette qui marche en boucle, style schéma épuré.
   Utilisée sur l'accueil (en secours derrière la vidéo) et sur la page Projet.

   Usage : SynapsETSExo.mount("mount-id", { highlightAnkle: true|false })
   ========================================================================= */

(function () {
  "use strict";

  function buildSvg(highlightAnkle) {
    var ankleRingClass = "exo-ankle-ring" + (highlightAnkle ? " is-active" : "");
    var ankleJointClass = "exo-joint" + (highlightAnkle ? " exo-ankle-highlight" : "");

    return (
      '<svg viewBox="0 0 240 200" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Illustration schématique d\'une jambe d\'exosquelette en mouvement de marche">' +

        // Ligne de sol + graduations (esthétique "plan technique")
        '<line class="exo-guide" x1="10" y1="172" x2="230" y2="172"></line>' +
        '<line class="exo-guide" x1="30" y1="168" x2="30" y2="176"></line>' +
        '<line class="exo-guide" x1="70" y1="168" x2="70" y2="176"></line>' +
        '<line class="exo-guide" x1="170" y1="168" x2="170" y2="176"></line>' +
        '<line class="exo-guide" x1="210" y1="168" x2="210" y2="176"></line>' +

        // Arc de débattement de hanche (repère technique)
        '<path class="exo-guide" d="M 96 70 A 34 34 0 0 1 144 70"></path>' +

        // Ancrage de hanche (boîtier de l'exosquelette)
        '<rect class="exo-mount" x="112" y="58" width="16" height="22" rx="3"></rect>' +

        // Jambe B (arrière, atténuée) — donne l'illusion de la marche
        '<g class="exo-thigh-b exo-leg-b" style="transform-origin:120px 70px">' +
          '<line class="exo-line exo-line-dim" x1="120" y1="70" x2="120" y2="115"></line>' +
          '<circle class="exo-joint exo-joint-dim" cx="120" cy="115" r="4"></circle>' +
          '<g class="exo-shin-b" style="transform-origin:120px 115px">' +
            '<line class="exo-line exo-line-dim" x1="120" y1="115" x2="120" y2="160"></line>' +
            '<circle class="exo-joint exo-joint-dim" cx="120" cy="160" r="4"></circle>' +
            '<g class="exo-foot-b" style="transform-origin:120px 160px">' +
              '<line class="exo-line exo-line-dim" x1="120" y1="160" x2="150" y2="166"></line>' +
            '</g>' +
          '</g>' +
        '</g>' +

        // Jambe A (avant, pleine opacité)
        '<g class="exo-thigh-a" style="transform-origin:120px 70px">' +
          '<line class="exo-line" x1="120" y1="70" x2="120" y2="115"></line>' +
          '<circle class="exo-joint" cx="120" cy="115" r="4"></circle>' +
          '<g class="exo-shin-a" style="transform-origin:120px 115px">' +
            '<line class="exo-line" x1="120" y1="115" x2="120" y2="160"></line>' +
            '<circle class="' + ankleJointClass + '" cx="120" cy="160" r="4"></circle>' +
            '<circle class="' + ankleRingClass + '" cx="120" cy="160" r="9"></circle>' +
            '<g class="exo-foot-a" style="transform-origin:120px 160px">' +
              '<line class="exo-line" x1="120" y1="160" x2="150" y2="166"></line>' +
            '</g>' +
          '</g>' +
        '</g>' +
      "</svg>"
    );
  }

  function mount(mountId, options) {
    var el = document.getElementById(mountId);
    if (!el) return;

    var opts = options || {};
    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    el.classList.add("exo-anim");
    if (prefersReducedMotion) el.classList.add("exo-static");
    el.innerHTML = buildSvg(!!opts.highlightAnkle);
  }

  window.SynapsETSExo = { mount: mount };
})();
