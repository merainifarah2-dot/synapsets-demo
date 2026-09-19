/* =========================================================================
   SynapsÉTS — animation SVG "exosquelette de jambe" (schéma technique)
   Structure mécanique explicite (rails structurels parallèles, boîtiers
   d'articulation, actionneurs, sangles, plaque de pied) plutôt qu'un simple
   trait — pensée pour évoquer un vrai exosquelette de marche (type
   Ekso/ReWalk) vu de profil, en boucle de marche continue.
   Utilisée sur l'accueil (en secours derrière la vidéo) et sur la page Projet.

   Usage : SynapsETSExo.mount("mount-id", { highlightAnkle: true|false })
   ========================================================================= */

(function () {
  "use strict";

  // Points d'articulation (jambe au repos, avant rotation) — coordonnées
  // locales utilisées à la fois pour le dessin et pour les transform-origin.
  var HIP = { x: 120, y: 50 };
  var KNEE = { x: 120, y: 100 };
  var ANKLE = { x: 120, y: 148 };
  var RAIL_OFFSET = 7; // écart entre les deux rails structurels parallèles

  // Rails parallèles + sangle transversale entre deux articulations.
  function segment(from, to) {
    var lx = from.x - RAIL_OFFSET, rx = from.x + RAIL_OFFSET;
    var lx2 = to.x - RAIL_OFFSET, rx2 = to.x + RAIL_OFFSET;
    var midY = from.y + (to.y - from.y) * 0.48;
    return (
      '<line class="exo-rail" x1="' + lx + '" y1="' + from.y + '" x2="' + lx2 + '" y2="' + to.y + '"></line>' +
      '<line class="exo-rail" x1="' + rx + '" y1="' + from.y + '" x2="' + rx2 + '" y2="' + to.y + '"></line>' +
      '<line class="exo-strap" x1="' + (lx - 5) + '" y1="' + midY + '" x2="' + (rx2 + 5) + '" y2="' + midY + '"></line>'
    );
  }

  // Jambe complète (chaîne cinématique hanche → genou → cheville → pied).
  // isBack : jambe arrière simplifiée et atténuée (illusion de la marche).
  function buildLeg(isBack, highlightAnkle) {
    var suffix = isBack ? "-b" : "-a";
    var ankleRingClass = "exo-ankle-ring" + (highlightAnkle && !isBack ? " is-active" : "");
    var ankleJointClass = "exo-joint" + (highlightAnkle && !isBack ? " exo-ankle-highlight" : "");

    var footPlate = isBack
      ? '<path class="exo-foot" d="M' + ANKLE.x + ',' + ANKLE.y + ' L' + (ANKLE.x + 28) + ',' + (ANKLE.y + 9) + ' L' + (ANKLE.x - 6) + ',' + (ANKLE.y + 9) + ' Z"></path>'
      : (
          '<path class="exo-foot" d="M' + ANKLE.x + ',' + ANKLE.y +
            ' L' + (ANKLE.x + 25) + ',' + (ANKLE.y + 2) +
            ' L' + (ANKLE.x + 32) + ',' + (ANKLE.y + 8) +
            ' L' + (ANKLE.x + 32) + ',' + (ANKLE.y + 14) +
            ' L' + (ANKLE.x - 8) + ',' + (ANKLE.y + 14) +
            ' L' + (ANKLE.x - 8) + ',' + (ANKLE.y + 4) + ' Z"></path>' +
          '<line class="exo-sole" x1="' + (ANKLE.x - 8) + '" y1="' + (ANKLE.y + 14) + '" x2="' + (ANKLE.x + 32) + '" y2="' + (ANKLE.y + 14) + '"></line>'
        );

    return (
      '<g class="exo-thigh' + suffix + (isBack ? " exo-leg-b" : "") + '" style="transform-origin:' + HIP.x + 'px ' + HIP.y + 'px">' +
        segment(HIP, KNEE) +
        (isBack ? "" : '<ellipse class="exo-actuator" cx="' + (HIP.x + RAIL_OFFSET + 6) + '" cy="' + (HIP.y + 10) + '" rx="6" ry="9"></ellipse>') +
        '<circle class="exo-joint" cx="' + KNEE.x + '" cy="' + KNEE.y + '" r="8"></circle>' +
        '<circle class="exo-bolt-center" cx="' + KNEE.x + '" cy="' + KNEE.y + '" r="2.6"></circle>' +

        '<g class="exo-shin' + suffix + '" style="transform-origin:' + KNEE.x + 'px ' + KNEE.y + 'px">' +
          segment(KNEE, ANKLE) +
          (isBack ? "" : '<ellipse class="exo-actuator" cx="' + (KNEE.x + RAIL_OFFSET + 6) + '" cy="' + (KNEE.y + 8) + '" rx="6" ry="9"></ellipse>') +
          '<circle class="' + ankleJointClass + '" cx="' + ANKLE.x + '" cy="' + ANKLE.y + '" r="7"></circle>' +
          (isBack ? "" : '<circle class="' + ankleRingClass + '" cx="' + ANKLE.x + '" cy="' + ANKLE.y + '" r="12"></circle>') +

          '<g class="exo-foot' + suffix + '" style="transform-origin:' + ANKLE.x + 'px ' + ANKLE.y + 'px">' +
            footPlate +
          "</g>" +
        "</g>" +
      "</g>"
    );
  }

  function buildSvg(highlightAnkle) {
    return (
      '<svg viewBox="0 0 240 200" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Illustration schématique d\'un exosquelette de jambe en mouvement de marche">' +

        // Ligne de sol + graduations (esthétique "plan technique")
        '<line class="exo-guide" x1="6" y1="172" x2="234" y2="172"></line>' +
        '<line class="exo-guide" x1="26" y1="168" x2="26" y2="176"></line>' +
        '<line class="exo-guide" x1="66" y1="168" x2="66" y2="176"></line>' +
        '<line class="exo-guide" x1="176" y1="168" x2="176" y2="176"></line>' +
        '<line class="exo-guide" x1="216" y1="168" x2="216" y2="176"></line>' +

        // Arc de débattement de hanche (repère technique)
        '<path class="exo-guide" d="M 92 50 A 34 34 0 0 1 148 50"></path>' +

        // Jambe B (arrière, atténuée) — donne l'illusion de la marche
        buildLeg(true, false) +

        // Ancrage de hanche (boîtier pelvien de l'exosquelette), par-dessus la jambe B
        '<rect class="exo-mount" x="103" y="33" width="34" height="28" rx="6"></rect>' +
        '<circle class="exo-bolt" cx="110" cy="40" r="1.8"></circle>' +
        '<circle class="exo-bolt" cx="130" cy="40" r="1.8"></circle>' +
        '<line class="exo-guide" x1="103" y1="50" x2="137" y2="50"></line>' +

        // Jambe A (avant, pleine opacité)
        buildLeg(false, highlightAnkle) +
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
