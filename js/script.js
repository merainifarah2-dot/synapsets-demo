(function () {
  "use strict";

  /* ---------- Année automatique dans le footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Menu mobile ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Ouvrir le menu");
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
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 70 + "ms";
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Équipe : cartes placeholder générées dynamiquement ----------
     Structure réutilisable : modifie simplement ce tableau plus tard avec
     les vrais noms, rôles, et remplace la génération d'initiales par une
     vraie image (voir commentaire dans createTeamCard).
  ------------------------------------------------------------------------- */
  var teamMembers = [
    { name: "Nom Prénom", role: "Président·e" },
    { name: "Nom Prénom", role: "Vice-président·e" },
    { name: "Nom Prénom", role: "Responsable mécanique" },
    { name: "Nom Prénom", role: "Responsable électrique" },
    { name: "Nom Prénom", role: "Responsable logiciel / contrôle" },
    { name: "Nom Prénom", role: "Responsable biomédical" },
    { name: "Nom Prénom", role: "Responsable partenariats" },
    { name: "Nom Prénom", role: "Membre de l'équipe" }
  ];

  var avatarPalette = ["#0A1F44", "#E31E24", "#12335c", "#8a5a2b"];

  function getInitials(fullName) {
    return fullName
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map(function (part) { return part.charAt(0).toUpperCase(); })
      .join("");
  }

  function createTeamCard(member, index) {
    var card = document.createElement("div");
    card.className = "team-card";
    card.setAttribute("data-reveal", "");

    // Placeholder photo : cercle avec initiales.
    // Pour ajouter une vraie photo plus tard, remplace ce <div> par :
    // <img class="team-photo" src="assets/team/nom.jpg" alt="Photo de [Nom]">
    var photo = document.createElement("div");
    photo.className = "team-photo";
    photo.style.background = avatarPalette[index % avatarPalette.length];
    photo.textContent = getInitials(member.name);
    photo.setAttribute("aria-hidden", "true");

    var name = document.createElement("h3");
    name.textContent = member.name;

    var role = document.createElement("p");
    role.textContent = member.role;

    card.appendChild(photo);
    card.appendChild(name);
    card.appendChild(role);
    return card;
  }

  var teamGrid = document.getElementById("team-grid");
  if (teamGrid) {
    teamMembers.forEach(function (member, index) {
      teamGrid.appendChild(createTeamCard(member, index));
    });

    // Ré-observe les nouvelles cartes pour l'animation de révélation.
    if ("IntersectionObserver" in window) {
      var teamObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              teamObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      teamGrid.querySelectorAll("[data-reveal]").forEach(function (el, i) {
        el.style.transitionDelay = Math.min(i % 4, 3) * 70 + "ms";
        teamObserver.observe(el);
      });
    } else {
      teamGrid.querySelectorAll("[data-reveal]").forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  }

  /* ---------- Fond animé du hero : réseau de synapses ---------- */
  var canvas = document.getElementById("synapse-canvas");
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (canvas && !prefersReducedMotion) {
    var ctx = canvas.getContext("2d");
    var hero = canvas.closest(".hero");
    var nodes = [];
    var width = 0, height = 0;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = hero.offsetWidth;
      height = hero.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      var count = Math.max(24, Math.min(60, Math.round((width * height) / 22000)));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.6 + 1
        });
      }
    }

    var maxDist = 150;

    function step() {
      ctx.clearRect(0, 0, width, height);

      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (var a = 0; a < nodes.length; a++) {
        for (var b = a + 1; b < nodes.length; b++) {
          var dx = nodes[a].x - nodes[b].x;
          var dy = nodes[a].y - nodes[b].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.strokeStyle = "rgba(255,255,255," + (0.12 * (1 - dist / maxDist)) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[a].x, nodes[a].y);
            ctx.lineTo(nodes[b].x, nodes[b].y);
            ctx.stroke();
          }
        }
      }

      for (var j = 0; j < nodes.length; j++) {
        var node = nodes[j];
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = j % 5 === 0 ? "rgba(227,30,36,0.85)" : "rgba(255,255,255,0.55)";
        ctx.fill();
      }

      requestAnimationFrame(step);
    }

    resize();
    requestAnimationFrame(step);

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    });
  }
})();
