/* =========================================================================
   SynapsÉTS — page Équipe : données des membres + cards + modal
   Structure réutilisable : modifie TEAM_MEMBERS ci-dessous avec les vrais
   noms, rôles, programmes et liens LinkedIn. Pour une vraie photo, remplace
   la génération d'initiales dans createTeamCard()/openModal() par une
   balise <img src="assets/team/nom.jpg" alt="Photo de [Nom]">.
   ========================================================================= */

(function () {
  "use strict";

  var UI_STRINGS = {
    fr: { department: "Département", program: "Programme d'études", linkedin: "Voir le profil LinkedIn", close: "Fermer la fiche" },
    en: { department: "Department", program: "Program of study", linkedin: "View LinkedIn profile", close: "Close profile" }
  };

  // Ordre d'affichage des départements sur la page.
  var DEPARTMENTS = [
    { key: "exec", label: { fr: "Exécutif / Direction", en: "Executive / Leadership" } },
    { key: "mec", label: { fr: "Mécanique", en: "Mechanical" } },
    { key: "ele", label: { fr: "Électrique", en: "Electrical" } },
    { key: "log", label: { fr: "Logiciel", en: "Software" } },
    { key: "com", label: { fr: "Communications", en: "Communications" } }
  ];

  // Données des membres — à remplacer par la vraie liste de l'équipe.
  var TEAM_MEMBERS = [
    { name: "Nom Prénom", dept: "exec", role: { fr: "Présidence", en: "President" }, program: { fr: "Génie mécanique", en: "Mechanical Engineering" }, linkedin: "#" },
    { name: "Nom Prénom", dept: "exec", role: { fr: "Vice-présidence", en: "Vice-President" }, program: { fr: "Génie biomédical", en: "Biomedical Engineering" }, linkedin: "#" },
    { name: "Nom Prénom", dept: "exec", role: { fr: "Trésorerie", en: "Treasurer" }, program: { fr: "Génie logiciel", en: "Software Engineering" }, linkedin: "#" },

    { name: "Nom Prénom", dept: "mec", role: { fr: "Responsable mécanique", en: "Mechanical Lead" }, program: { fr: "Génie mécanique", en: "Mechanical Engineering" }, linkedin: "#" },
    { name: "Nom Prénom", dept: "mec", role: { fr: "Membre — structure", en: "Structure Member" }, program: { fr: "Génie mécanique", en: "Mechanical Engineering" }, linkedin: "#" },
    { name: "Nom Prénom", dept: "mec", role: { fr: "Membre — actionnement", en: "Actuation Member" }, program: { fr: "Génie de la production automatisée", en: "Automated Manufacturing Engineering" }, linkedin: "#" },

    { name: "Nom Prénom", dept: "ele", role: { fr: "Responsable électrique", en: "Electrical Lead" }, program: { fr: "Génie électrique", en: "Electrical Engineering" }, linkedin: "#" },
    { name: "Nom Prénom", dept: "ele", role: { fr: "Membre — capteurs", en: "Sensors Member" }, program: { fr: "Génie électrique", en: "Electrical Engineering" }, linkedin: "#" },

    { name: "Nom Prénom", dept: "log", role: { fr: "Responsable logiciel / contrôle", en: "Software & Controls Lead" }, program: { fr: "Génie logiciel", en: "Software Engineering" }, linkedin: "#" },
    { name: "Nom Prénom", dept: "log", role: { fr: "Membre — algorithmes de marche", en: "Gait Algorithms Member" }, program: { fr: "Génie logiciel", en: "Software Engineering" }, linkedin: "#" },

    { name: "Nom Prénom", dept: "com", role: { fr: "Responsable communications", en: "Communications Lead" }, program: { fr: "Génie biomédical", en: "Biomedical Engineering" }, linkedin: "#" },
    { name: "Nom Prénom", dept: "com", role: { fr: "Membre — partenariats", en: "Partnerships Member" }, program: { fr: "Génie mécanique", en: "Mechanical Engineering" }, linkedin: "#" }
  ];

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

  var modalOverlay, modalPhoto, modalName, modalRole, modalDept, modalProgram, modalLinkedin, modalDeptLabel, modalProgramLabel, modalCloseBtn;

  function buildModal() {
    var wrapper = document.createElement("div");
    wrapper.innerHTML =
      '<div class="modal-overlay" id="team-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="team-modal-name">' +
        '<div class="modal">' +
          '<button type="button" class="modal-close" id="team-modal-close" aria-label="Fermer">' +
            '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>' +
          "</button>" +
          '<div class="modal-photo" id="team-modal-photo"></div>' +
          '<h3 class="modal-name" id="team-modal-name"></h3>' +
          '<p class="modal-role" id="team-modal-role"></p>' +
          '<div class="modal-meta">' +
            '<div class="modal-meta-row"><span class="modal-meta-label" id="team-modal-dept-label"></span><span class="modal-meta-value" id="team-modal-dept"></span></div>' +
            '<div class="modal-meta-row"><span class="modal-meta-label" id="team-modal-program-label"></span><span class="modal-meta-value" id="team-modal-program"></span></div>' +
          "</div>" +
          '<a href="#" target="_blank" rel="noopener" class="btn btn-primary" id="team-modal-linkedin"></a>' +
        "</div>" +
      "</div>";
    document.body.appendChild(wrapper.firstElementChild);

    modalOverlay = document.getElementById("team-modal-overlay");
    modalPhoto = document.getElementById("team-modal-photo");
    modalName = document.getElementById("team-modal-name");
    modalRole = document.getElementById("team-modal-role");
    modalDept = document.getElementById("team-modal-dept");
    modalProgram = document.getElementById("team-modal-program");
    modalLinkedin = document.getElementById("team-modal-linkedin");
    modalDeptLabel = document.getElementById("team-modal-dept-label");
    modalProgramLabel = document.getElementById("team-modal-program-label");
    modalCloseBtn = document.getElementById("team-modal-close");

    modalCloseBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modalOverlay.classList.contains("is-open")) closeModal();
    });
  }

  var lastFocusedEl = null;

  function openModal(member, index) {
    var lang = currentLang();
    var deptLabel = DEPARTMENTS.filter(function (d) { return d.key === member.dept; })[0];

    modalPhoto.style.background = AVATAR_PALETTE[index % AVATAR_PALETTE.length];
    modalPhoto.textContent = getInitials(member.name);
    modalName.textContent = member.name;
    modalRole.textContent = member.role[lang];
    modalDeptLabel.textContent = t(lang, "department");
    modalDept.textContent = deptLabel ? deptLabel.label[lang] : member.dept;
    modalProgramLabel.textContent = t(lang, "program");
    modalProgram.textContent = member.program[lang];
    modalLinkedin.textContent = t(lang, "linkedin");
    modalLinkedin.href = member.linkedin || "#";
    modalCloseBtn.setAttribute("aria-label", t(lang, "close"));

    lastFocusedEl = document.activeElement;
    modalOverlay.classList.add("is-open");
    modalCloseBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  function createTeamCard(member, globalIndex) {
    var lang = currentLang();
    var card = document.createElement("button");
    card.type = "button";
    card.className = "team-card";
    card.setAttribute("data-reveal", "");

    var photo = document.createElement("div");
    photo.className = "team-photo";
    photo.style.background = AVATAR_PALETTE[globalIndex % AVATAR_PALETTE.length];
    photo.textContent = getInitials(member.name);
    photo.setAttribute("aria-hidden", "true");

    var name = document.createElement("h3");
    name.textContent = member.name;

    var role = document.createElement("p");
    role.className = "team-card-role";
    role.textContent = member.role[lang];

    card.appendChild(photo);
    card.appendChild(name);
    card.appendChild(role);
    card.addEventListener("click", function () { openModal(member, globalIndex); });

    return card;
  }

  function render() {
    var lang = currentLang();
    var container = document.getElementById("team-departments");
    if (!container) return;

    container.innerHTML = "";
    var globalIndex = 0;

    DEPARTMENTS.forEach(function (dept) {
      var members = TEAM_MEMBERS.filter(function (m) { return m.dept === dept.key; });
      if (!members.length) return;

      var section = document.createElement("div");
      section.className = "dept-section";

      var title = document.createElement("h2");
      title.className = "dept-title";
      title.textContent = dept.label[lang];
      section.appendChild(title);

      var grid = document.createElement("div");
      grid.className = "team-grid";
      members.forEach(function (member) {
        grid.appendChild(createTeamCard(member, globalIndex));
        globalIndex++;
      });
      section.appendChild(grid);

      container.appendChild(section);
    });

    if (window.SynapsETSRevealScope) window.SynapsETSRevealScope(container);
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("team-departments")) return;
    buildModal();
    render();
  });

  document.addEventListener("synapsets:languagechange", function () {
    if (document.getElementById("team-departments")) render();
  });
})();
