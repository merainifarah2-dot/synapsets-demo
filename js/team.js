/* =========================================================================
   SynapsÉTS — page Équipe : données des membres + interaction cercles/panneau
   Structure réutilisable : modifie TEAM_MEMBERS ci-dessous avec les vrais
   noms, rôles, programmes, textes "rôle" et liens LinkedIn. Pour une vraie
   photo, remplace la génération d'initiales dans createMemberItem()/
   updatePanel() par une balise <img src="assets/team/nom.jpg" alt="...">.

   Interaction (desktop) :
   - Défaut : cercles groupés par département, centrés.
   - Clic sur un membre : le panneau latéral s'ouvre à droite, tous les
     cercles glissent en pile diagonale à gauche (technique FLIP : on mesure
     la position de départ, on bascule le layout, puis on anime la
     différence pour un mouvement fluide en CSS pur — voir animateFlip()).
   - Clic sur un autre membre pendant que le panneau est ouvert : le contenu
     du panneau change avec un fondu rapide, le cercle sélectionné se
     détache légèrement de la pile vers le panneau (translateX + scale via
     CSS), l'ancien reprend sa place dans la pile.
   - Fermeture (bouton, clic en dehors, Échap) : tout revient à l'état
     initial via la même technique FLIP inversée.

   Sur mobile (<= 760px), l'interaction est volontairement simplifiée : pas
   de réorganisation en pile ni de lignes de connexion (pas assez d'espace
   pour un panneau latéral + une pile) — un clic ouvre directement le
   panneau en plein écran. Voir le commentaire "SIMPLIFICATION MOBILE"
   plus bas.
   ========================================================================= */

(function () {
  "use strict";

  var MOBILE_QUERY = "(max-width: 760px)";

  // Ordre d'affichage des départements sur la page.
  var DEPARTMENTS = [
    { key: "exec", label: { fr: "Exécutif / Direction", en: "Executive / Leadership" } },
    { key: "mec", label: { fr: "Mécanique", en: "Mechanical" } },
    { key: "ele", label: { fr: "Électrique", en: "Electrical" } },
    { key: "log", label: { fr: "Logiciel", en: "Software" } },
    { key: "com", label: { fr: "Communications", en: "Communications" } }
  ];

  // Données des membres — à remplacer par la vraie liste de l'équipe.
  // "role" = titre officiel (affiché en gris sous le nom, via program) ;
  // "fun"  = ce qui s'affiche sous "RÔLE :" dans le panneau, plus vivant.
  var TEAM_MEMBERS = [
    { name: "Nom Prénom", dept: "exec", role: { fr: "Présidence", en: "President" }, program: { fr: "Génie mécanique", en: "Mechanical Engineering" },
      fun: { fr: "Chef d'orchestre du club : jongle entre les réunions, les échéanciers et les urgences de dernière minute sans jamais perdre le sourire.", en: "The club's conductor: juggles meetings, deadlines, and last-minute emergencies without ever losing the smile." },
      linkedin: "#" },
    { name: "Nom Prénom", dept: "exec", role: { fr: "Vice-présidence", en: "Vice-President" }, program: { fr: "Génie biomédical", en: "Biomedical Engineering" },
      fun: { fr: "Le bras droit qui garde tout le monde aligné — et qui a une opinion sur à peu près tout.", en: "The right hand keeping everyone aligned — and who has an opinion on pretty much everything." },
      linkedin: "#" },
    { name: "Nom Prénom", dept: "exec", role: { fr: "Trésorerie", en: "Treasurer" }, program: { fr: "Génie logiciel", en: "Software Engineering" },
      fun: { fr: "Garde les cordons de la bourse serrés et les factures d'aluminium sous contrôle.", en: "Keeps the purse strings tight and the aluminum invoices under control." },
      linkedin: "#" },

    { name: "Nom Prénom", dept: "mec", role: { fr: "Responsable mécanique", en: "Mechanical Lead" }, program: { fr: "Génie mécanique", en: "Mechanical Engineering" },
      fun: { fr: "Passe plus de temps en SolidWorks qu'éveillé — pilote la structure de l'exosquelette de A à Z.", en: "Spends more time in SolidWorks than awake — drives the exoskeleton's structure from A to Z." },
      linkedin: "#" },
    { name: "Nom Prénom", dept: "mec", role: { fr: "Membre — structure", en: "Structure Member" }, program: { fr: "Génie mécanique", en: "Mechanical Engineering" },
      fun: { fr: "Sait exactement quel boulon serrer avant que ça ne devienne un problème.", en: "Knows exactly which bolt to tighten before it becomes a problem." },
      linkedin: "#" },
    { name: "Nom Prénom", dept: "mec", role: { fr: "Membre — actionnement", en: "Actuation Member" }, program: { fr: "Génie de la production automatisée", en: "Automated Manufacturing Engineering" },
      fun: { fr: "Fait bouger les articulations de l'exosquelette — littéralement.", en: "Makes the exoskeleton's joints move — literally." },
      linkedin: "#" },

    { name: "Nom Prénom", dept: "ele", role: { fr: "Responsable électrique", en: "Electrical Lead" }, program: { fr: "Génie électrique", en: "Electrical Engineering" },
      fun: { fr: "Démêle les fils (au propre comme au figuré) pour que tout carbure du premier coup.", en: "Untangles the wires (literally and figuratively) so everything works on the first try." },
      linkedin: "#" },
    { name: "Nom Prénom", dept: "ele", role: { fr: "Membre — capteurs", en: "Sensors Member" }, program: { fr: "Génie électrique", en: "Electrical Engineering" },
      fun: { fr: "Traque le moindre signal parasite comme un détective.", en: "Tracks down every stray signal like a detective." },
      linkedin: "#" },

    { name: "Nom Prénom", dept: "log", role: { fr: "Responsable logiciel / contrôle", en: "Software & Controls Lead" }, program: { fr: "Génie logiciel", en: "Software Engineering" },
      fun: { fr: "Apprend à l'exosquelette à marcher avant de lui apprendre à courir.", en: "Teaches the exoskeleton to walk before teaching it to run." },
      linkedin: "#" },
    { name: "Nom Prénom", dept: "log", role: { fr: "Membre — algorithmes de marche", en: "Gait Algorithms Member" }, program: { fr: "Génie logiciel", en: "Software Engineering" },
      fun: { fr: "Passe ses nuits à peaufiner des courbes de démarche que personne d'autre ne remarquera.", en: "Spends nights fine-tuning gait curves nobody else will notice." },
      linkedin: "#" },

    { name: "Nom Prénom", dept: "com", role: { fr: "Responsable communications", en: "Communications Lead" }, program: { fr: "Génie biomédical", en: "Biomedical Engineering" },
      fun: { fr: "Raconte l'histoire de l'exosquelette au monde entier, une story Instagram à la fois.", en: "Tells the exoskeleton's story to the world, one Instagram story at a time." },
      linkedin: "#" },
    { name: "Nom Prénom", dept: "com", role: { fr: "Membre — partenariats", en: "Partnerships Member" }, program: { fr: "Génie mécanique", en: "Mechanical Engineering" },
      fun: { fr: "Convainc les entreprises qu'un exosquelette, ça vaut le détour.", en: "Convinces companies that an exoskeleton is worth the detour." },
      linkedin: "#" }
  ];

  var UI_STRINGS = {
    fr: { program: "Programme d'études", role: "Rôle", linkedin: "Voir le profil LinkedIn", close: "Fermer la fiche" },
    en: { program: "Program of study", role: "Role", linkedin: "View LinkedIn profile", close: "Close profile" }
  };

  var AVATAR_PALETTE = ["#0A1F44", "#E31E24", "#13315e", "#8a5a2b"];

  function getInitials(fullName) {
    return fullName.split(" ").filter(Boolean).slice(0, 2)
      .map(function (part) { return part.charAt(0).toUpperCase(); })
      .join("");
  }

  function currentLang() {
    return (window.SynapsETSi18n && window.SynapsETSi18n.getCurrentLang()) || "fr";
  }

  function t(lang, key) { return (UI_STRINGS[lang] || UI_STRINGS.fr)[key]; }

  function isMobile() {
    return window.matchMedia(MOBILE_QUERY).matches;
  }

  var stage, departmentsRoot, backdrop, connectorSvg;
  var panel, panelContent, panelClose, panelPhoto, panelName, panelProgram, panelRoleLabel, panelRoleText, panelLinkedin;

  var flatMembers = []; // membres dans l'ordre d'empilement (groupés par département)
  var memberItems = [];  // { member, index, el, circleEl }
  var activeIndex = -1;  // index (dans flatMembers) du membre actuellement affiché dans le panneau
  var isStageActive = false;

  /* ---------- Construction des cercles, groupés par département ---------- */

  function createMemberItem(member, index) {
    var lang = currentLang();
    var item = document.createElement("button");
    item.type = "button";
    item.className = "member-item";
    item.setAttribute("data-reveal", "");
    item.setAttribute("data-index", String(index));

    var circle = document.createElement("span");
    circle.className = "member-circle";
    circle.style.background = AVATAR_PALETTE[index % AVATAR_PALETTE.length];
    circle.textContent = getInitials(member.name);
    circle.setAttribute("aria-hidden", "true");

    var caption = document.createElement("span");
    caption.className = "member-caption";
    var nameEl = document.createElement("span");
    nameEl.className = "member-caption-name";
    nameEl.textContent = member.name;
    var roleEl = document.createElement("span");
    roleEl.className = "member-caption-role";
    roleEl.textContent = member.role[lang];
    caption.appendChild(nameEl);
    caption.appendChild(roleEl);

    item.appendChild(circle);
    item.appendChild(caption);
    item.setAttribute("aria-label", member.name + " — " + member.role[lang]);

    item.addEventListener("click", function () { onMemberClick(index); });

    return item;
  }

  function render() {
    if (!departmentsRoot) return;
    departmentsRoot.innerHTML = "";
    flatMembers = [];
    memberItems = [];

    var lang = currentLang();

    DEPARTMENTS.forEach(function (dept) {
      var members = TEAM_MEMBERS.filter(function (m) { return m.dept === dept.key; });
      if (!members.length) return;

      var block = document.createElement("div");
      block.className = "dept-block";

      var heading = document.createElement("h2");
      heading.className = "dept-heading";
      heading.textContent = dept.label[lang];
      block.appendChild(heading);

      var row = document.createElement("div");
      row.className = "member-row";

      members.forEach(function (member) {
        var index = flatMembers.length;
        flatMembers.push(member);
        var item = createMemberItem(member, index);
        row.appendChild(item);
        memberItems.push({ member: member, index: index, el: item, circleEl: item.querySelector(".member-circle") });
      });

      block.appendChild(row);
      departmentsRoot.appendChild(block);
    });

    if (window.SynapsETSRevealScope) window.SynapsETSRevealScope(departmentsRoot);
  }

  /* ---------- FLIP : transition fluide entre layout groupé et pile ---------- */

  function measureRects() {
    return memberItems.map(function (item) { return item.el.getBoundingClientRect(); });
  }

  // Calcule la position cible de chaque cercle en pile diagonale, ancrée à
  // gauche de l'écran (colonnes multiples si trop de membres pour tenir en
  // hauteur). Coordonnées en position "fixed" (relatives au viewport).
  function computeStackedTargets() {
    var perColumn = Math.max(6, Math.floor((window.innerHeight - 160) / 40));
    var size = 46;
    var stepY = 40;
    var stepX = 10;
    var columnGap = 92;
    var baseLeft = 48;
    var baseTop = 130;

    return memberItems.map(function (item, i) {
      var col = Math.floor(i / perColumn);
      var row = i % perColumn;
      return {
        left: baseLeft + col * columnGap + row * stepX,
        top: baseTop + row * stepY,
        size: size
      };
    });
  }

  function animateFlip(applyLayoutChange, afterLayoutChange) {
    var firstRects = measureRects();

    applyLayoutChange();

    // Le navigateur a maintenant recalculé le layout : on peut lire les
    // positions finales ("Last").
    var lastRects = measureRects();

    memberItems.forEach(function (item, i) {
      var first = firstRects[i];
      var last = lastRects[i];
      var dx = first.left - last.left;
      var dy = first.top - last.top;
      var scale = last.width > 0 ? first.width / last.width : 1;

      // Invert : on replace visuellement l'élément à sa position de départ,
      // sans transition, puis on force un reflow avant de relâcher vers 0
      // (Play) pour que le navigateur anime la différence en CSS pur.
      item.el.style.transition = "none";
      item.el.style.transform = "translate(" + dx + "px," + dy + "px) scale(" + scale + ")";
      // eslint-disable-next-line no-unused-expressions
      item.el.offsetHeight; // force reflow
      item.el.style.transition = "";
      item.el.style.transform = "";
    });

    if (afterLayoutChange) setTimeout(afterLayoutChange, 460);
  }

  function activateStack() {
    if (isStageActive) return;
    isStageActive = true;

    animateFlip(function () {
      stage.classList.add("is-active");
      var targets = computeStackedTargets();
      memberItems.forEach(function (item, i) {
        item.el.classList.add("is-stacked");
        item.el.style.left = targets[i].left + "px";
        item.el.style.top = targets[i].top + "px";
      });
    }, drawConnectors);

    backdrop.classList.add("is-active");
  }

  function deactivateStack() {
    if (!isStageActive) return;
    isStageActive = false;

    clearConnectors();

    animateFlip(function () {
      stage.classList.remove("is-active");
      memberItems.forEach(function (item) {
        item.el.classList.remove("is-stacked", "is-selected");
        item.el.style.left = "";
        item.el.style.top = "";
      });
    });

    backdrop.classList.remove("is-active");
  }

  /* ---------- Lignes de connexion entre membres du même département ---------- */

  function drawConnectors() {
    if (!isStageActive) return;
    connectorSvg.setAttribute("width", window.innerWidth);
    connectorSvg.setAttribute("height", window.innerHeight);
    connectorSvg.innerHTML = "";

    var ns = "http://www.w3.org/2000/svg";
    for (var i = 0; i < memberItems.length - 1; i++) {
      var a = memberItems[i];
      var b = memberItems[i + 1];
      if (a.member.dept !== b.member.dept) continue;

      var rectA = a.circleEl.getBoundingClientRect();
      var rectB = b.circleEl.getBoundingClientRect();
      var line = document.createElementNS(ns, "line");
      line.setAttribute("x1", rectA.left + rectA.width / 2);
      line.setAttribute("y1", rectA.top + rectA.height / 2);
      line.setAttribute("x2", rectB.left + rectB.width / 2);
      line.setAttribute("y2", rectB.top + rectB.height / 2);
      line.setAttribute("class", "dept-connector-line");
      connectorSvg.appendChild(line);
    }

    connectorSvg.classList.add("is-visible");
  }

  function clearConnectors() {
    connectorSvg.classList.remove("is-visible");
    connectorSvg.innerHTML = "";
  }

  /* ---------- Panneau latéral ---------- */

  function fillPanel(member) {
    var lang = currentLang();
    panelPhoto.style.background = AVATAR_PALETTE[flatMembers.indexOf(member) % AVATAR_PALETTE.length];
    panelPhoto.textContent = getInitials(member.name);
    panelName.textContent = member.name;
    panelProgram.textContent = member.program[lang];
    panelRoleLabel.textContent = t(lang, "role");
    panelRoleText.textContent = member.fun[lang];
    panelLinkedin.textContent = t(lang, "linkedin");
    panelLinkedin.href = member.linkedin || "#";
    panelClose.setAttribute("aria-label", t(lang, "close"));
  }

  function updatePanel(member) {
    if (!panel.classList.contains("is-open")) {
      fillPanel(member);
      return;
    }
    panelContent.classList.add("is-fading");
    setTimeout(function () {
      fillPanel(member);
      panelContent.classList.remove("is-fading");
    }, 160);
  }

  function openPanel(member) {
    updatePanel(member);
    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closePanel() {
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    memberItems.forEach(function (item) { item.el.classList.remove("is-selected"); });
    activeIndex = -1;
    deactivateStack();
  }

  /* ---------- Sélection ---------- */

  function selectDesktop(index) {
    var wasActive = isStageActive;
    if (!wasActive) activateStack();

    memberItems.forEach(function (item) { item.el.classList.toggle("is-selected", item.index === index); });
    activeIndex = index;
    openPanel(flatMembers[index]);

    if (!wasActive) setTimeout(drawConnectors, 480);
  }

  function selectMobile(index) {
    activeIndex = index;
    openPanel(flatMembers[index]);
  }

  function onMemberClick(index) {
    if (isMobile()) {
      selectMobile(index);
    } else {
      selectDesktop(index);
    }
  }

  /* ---------- Init ---------- */

  function init() {
    stage = document.getElementById("team-stage");
    if (!stage) return;

    departmentsRoot = document.getElementById("team-departments");
    backdrop = document.getElementById("team-backdrop");
    connectorSvg = document.getElementById("dept-connector-svg");

    panel = document.getElementById("member-panel");
    panelContent = document.getElementById("member-panel-content");
    panelClose = document.getElementById("member-panel-close");
    panelPhoto = document.getElementById("member-panel-photo");
    panelName = document.getElementById("member-panel-name");
    panelProgram = document.getElementById("member-panel-program");
    panelRoleLabel = document.getElementById("member-panel-role-label");
    panelRoleText = document.getElementById("member-panel-role-text");
    panelLinkedin = document.getElementById("member-panel-linkedin");

    render();

    panelClose.addEventListener("click", closePanel);
    backdrop.addEventListener("click", closePanel);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("is-open")) closePanel();
    });
    window.addEventListener("resize", function () {
      if (isStageActive) {
        var targets = computeStackedTargets();
        memberItems.forEach(function (item, i) {
          item.el.style.left = targets[i].left + "px";
          item.el.style.top = targets[i].top + "px";
        });
        drawConnectors();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);

  document.addEventListener("synapsets:languagechange", function () {
    if (!stage) return;
    // Un changement de langue reconstruit les cercles : on referme d'abord
    // le panneau/la pile pour éviter un état visuel incohérent, puis on
    // reconstruit la vue par défaut dans la nouvelle langue.
    if (panel && panel.classList.contains("is-open")) closePanel();
    render();
  });
})();
