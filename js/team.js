"use strict";

// Interaction de la page équipe : filtres par département + modale fiche membre.
var DEMO = true;

var DEPARTMENTS = [
  { key: "exec", label: { fr: "Exécutif", en: "Executive" } },
  { key: "mec", label: { fr: "Mécanique", en: "Mechanical" } },
  { key: "ele", label: { fr: "Électrique", en: "Electrical" } },
  { key: "log", label: { fr: "Logiciel", en: "Software" } },
  { key: "com", label: { fr: "Communication", en: "Communications" } }
];

// DONNÉES FICTIVES DE DÉMONSTRATION, à remplacer par les vrais membres avec leur accord.
var TEAM_MEMBERS = [
  { name: "Léa Fontaine", role: "Capitaine", program: "Génie mécanique", dept: "exec", photo: "", linkedin: "", fun: "Peut réciter toutes les lois de Newton en dansant." },
  { name: "Malik Dubreuil", role: "Co-capitaine", program: "Génie électrique", dept: "exec", photo: "", linkedin: "", fun: "A soudé son premier circuit à 10 ans, dans la cuisine familiale." },
  { name: "Camille Rivard", role: "Trésorière", program: "Génie des opérations et de la logistique", dept: "exec", photo: "", linkedin: "", fun: "Tient un budget plus organisé que son propre horaire." },
  { name: "Étienne Boisvert", role: "VP Partenariats", program: "Génie logiciel", dept: "exec", photo: "", linkedin: "", fun: "N'a jamais raté un café avant une présentation." },
  { name: "Anaïs Delorme", role: "VP Événements", program: "Génie de la construction", dept: "exec", photo: "", linkedin: "", fun: "Peut organiser un 5 à 7 en moins de 24 heures." },
  { name: "Théo Lachapelle", role: "Structure", program: "Génie mécanique", dept: "mec", photo: "", linkedin: "", fun: "Dessine des pièces mécaniques même sur des napkins." },
  { name: "Sofia Tremblay-Nadeau", role: "Usinage", program: "Génie de la production automatisée", dept: "mec", photo: "", linkedin: "", fun: "Connaît le nom de chaque fraise de la machine CNC." },
  { name: "Nassim Gauthier", role: "Électronique de puissance", program: "Génie électrique", dept: "ele", photo: "", linkedin: "", fun: "Peut expliquer un onduleur avec des LEGO." },
  { name: "Inès Marchand", role: "Capteurs", program: "Génie électrique", dept: "ele", photo: "", linkedin: "", fun: "Collectionne les capteurs comme d'autres collectionnent des timbres." },
  { name: "Alexis Pelletier", role: "Contrôle", program: "Génie logiciel", dept: "log", photo: "", linkedin: "", fun: "Rêve littéralement en diagrammes de blocs." },
  { name: "Mei-Ling Robitaille", role: "Infrastructure", program: "Génie des technologies de l'information", dept: "log", photo: "", linkedin: "", fun: "A déjà configuré un serveur pendant un cours de chimie." },
  { name: "Jules Cormier", role: "Vidéo", program: "Génie de la construction", dept: "com", photo: "", linkedin: "", fun: "Voit toujours l'angle de caméra parfait, même en marchant." },
  { name: "Maëlle Ouellet", role: "Réseaux sociaux", program: "Génie de la production automatisée", dept: "com", photo: "", linkedin: "", fun: "Répond aux DM plus vite qu'un chatbot." }
];

var UI = {
  fr: {
    all: "Tous",
    funFact: "Fun fact",
    viewProfile: "Voir le profil de",
    close: "Fermer",
    prev: "Membre précédent",
    next: "Membre suivant",
    linkedin: "LinkedIn"
  },
  en: {
    all: "All",
    funFact: "Fun fact",
    viewProfile: "View profile of",
    close: "Close",
    prev: "Previous member",
    next: "Next member",
    linkedin: "LinkedIn"
  }
};

var AVATAR_PALETTE = ["#0A1F44", "#E31E24", "#13315e", "#8a5a2b"];

var filtersRoot = null;
var departmentsRoot = null;
var modalBackdrop = null;
var modalEl = null;
var modalMedia = null;
var modalClose = null;
var modalPrev = null;
var modalNext = null;
var modalName = null;
var modalProgram = null;
var modalDept = null;
var modalRole = null;
var modalFactLabel = null;
var modalFact = null;
var modalLinkedin = null;
var demoBadge = null;

var currentFilter = "all";
var visibleMembers = [];
var currentIndex = -1;
var isModalOpen = false;
var lastTrigger = null;

function currentLang() {
  return (window.SynapsETSi18n && window.SynapsETSi18n.getCurrentLang) ? window.SynapsETSi18n.getCurrentLang() : "fr";
}

function t(lang, key) {
  var dict = UI[lang] || UI.fr;
  return dict[key] || UI.fr[key] || "";
}

function localized(member, field, lang) {
  if (lang === "en") {
    var enVal = member[field + "_en"];
    if (enVal) return enVal;
  }
  return member[field];
}

function deptLabel(deptKey, lang) {
  for (var i = 0; i < DEPARTMENTS.length; i++) {
    if (DEPARTMENTS[i].key === deptKey) return DEPARTMENTS[i].label[lang] || DEPARTMENTS[i].label.fr;
  }
  return deptKey;
}

function getInitials(fullName) {
  var parts = fullName.split(/\s+/).filter(Boolean);
  var initials = parts.slice(0, 2).map(function (p) { return p.charAt(0).toUpperCase(); });
  return initials.join("");
}

function avatarColor(member) {
  var index = TEAM_MEMBERS.indexOf(member);
  return AVATAR_PALETTE[index % AVATAR_PALETTE.length];
}

function buildMedia(member) {
  if (member.photo) {
    var img = document.createElement("img");
    img.src = member.photo;
    img.alt = "";
    img.loading = "lazy";
    return img;
  }
  var fallback = document.createElement("div");
  fallback.className = "member-card-initials";
  fallback.style.background = avatarColor(member);
  fallback.textContent = getInitials(member.name);
  return fallback;
}

function renderFilters() {
  if (!filtersRoot) return;
  var lang = currentLang();
  filtersRoot.innerHTML = "";

  var allBtn = document.createElement("button");
  allBtn.type = "button";
  allBtn.className = "filter-btn" + (currentFilter === "all" ? " is-active" : "");
  allBtn.setAttribute("data-filter", "all");
  allBtn.setAttribute("aria-pressed", currentFilter === "all" ? "true" : "false");
  allBtn.textContent = t(lang, "all");
  allBtn.addEventListener("click", function () { setFilter("all"); });
  filtersRoot.appendChild(allBtn);

  DEPARTMENTS.forEach(function (dept) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-btn" + (currentFilter === dept.key ? " is-active" : "");
    btn.setAttribute("data-filter", dept.key);
    btn.setAttribute("aria-pressed", currentFilter === dept.key ? "true" : "false");
    btn.textContent = dept.label[lang] || dept.label.fr;
    btn.addEventListener("click", function () { setFilter(dept.key); });
    filtersRoot.appendChild(btn);
  });
}

function setFilter(key) {
  currentFilter = key;
  var buttons = filtersRoot.querySelectorAll(".filter-btn");
  buttons.forEach(function (btn) {
    var isActive = btn.getAttribute("data-filter") === key;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  applyFilter();
}

function createMemberCard(member, lang) {
  var card = document.createElement("button");
  card.type = "button";
  card.className = "member-card";
  card.setAttribute("aria-label", t(lang, "viewProfile") + " " + member.name);
  card._member = member;

  var media = document.createElement("div");
  media.className = "member-card-media";
  media.appendChild(buildMedia(member));

  var scrim = document.createElement("div");
  scrim.className = "member-card-scrim";
  media.appendChild(scrim);

  var body = document.createElement("div");
  body.className = "member-card-body";

  var name = document.createElement("p");
  name.className = "member-card-name";
  name.textContent = member.name;

  var role = document.createElement("p");
  role.className = "member-card-role";
  role.textContent = localized(member, "role", lang);

  var tags = document.createElement("div");
  tags.className = "member-card-tags";

  var programTag = document.createElement("span");
  programTag.className = "member-card-tag";
  programTag.textContent = localized(member, "program", lang);

  var deptTag = document.createElement("span");
  deptTag.className = "member-card-tag";
  deptTag.textContent = deptLabel(member.dept, lang);

  tags.appendChild(programTag);
  tags.appendChild(deptTag);

  body.appendChild(name);
  body.appendChild(role);
  body.appendChild(tags);

  var plus = document.createElement("span");
  plus.className = "member-card-plus";
  plus.setAttribute("aria-hidden", "true");
  plus.textContent = "+";

  card.appendChild(media);
  card.appendChild(body);
  card.appendChild(plus);

  card.addEventListener("click", function () { openModal(card); });

  return card;
}

function renderDepartments() {
  if (!departmentsRoot) return;
  var lang = currentLang();
  departmentsRoot.innerHTML = "";

  DEPARTMENTS.forEach(function (dept) {
    var members = TEAM_MEMBERS.filter(function (m) { return m.dept === dept.key; });
    if (!members.length) return;

    var section = document.createElement("div");
    section.className = "team-dept-section";
    section.setAttribute("data-dept", dept.key);

    var heading = document.createElement("h2");
    heading.className = "section-tag";
    heading.textContent = dept.label[lang] || dept.label.fr;

    var grid = document.createElement("div");
    grid.className = "team-grid";

    members.forEach(function (member) {
      grid.appendChild(createMemberCard(member, lang));
    });

    section.appendChild(heading);
    section.appendChild(grid);
    departmentsRoot.appendChild(section);
  });

  applyFilter();

  if (window.SynapsETSRevealScope) {
    window.SynapsETSRevealScope(departmentsRoot);
  }
}

function applyFilter() {
  if (!departmentsRoot) return;
  var sections = departmentsRoot.querySelectorAll(".team-dept-section");
  sections.forEach(function (section) {
    var dept = section.getAttribute("data-dept");
    var isVisible = currentFilter === "all" || currentFilter === dept;
    section.hidden = !isVisible;
  });
  recomputeVisibleMembers();
}

function recomputeVisibleMembers() {
  var cards = departmentsRoot.querySelectorAll(".team-dept-section:not([hidden]) .member-card");
  visibleMembers = [];
  cards.forEach(function (card) {
    visibleMembers.push({ member: card._member, el: card });
  });
}

function fillModal(member, lang) {
  var oldMedia = modalMedia.querySelector("img, .team-modal-initials");
  if (oldMedia) oldMedia.remove();

  var mediaEl;
  if (member.photo) {
    mediaEl = document.createElement("img");
    mediaEl.src = member.photo;
    mediaEl.alt = "";
  } else {
    mediaEl = document.createElement("div");
    mediaEl.className = "team-modal-initials";
    mediaEl.style.background = avatarColor(member);
    mediaEl.textContent = getInitials(member.name);
  }
  modalMedia.insertBefore(mediaEl, modalMedia.firstChild);

  modalName.textContent = member.name;
  modalProgram.textContent = localized(member, "program", lang);
  modalDept.textContent = deptLabel(member.dept, lang);
  modalRole.textContent = localized(member, "role", lang);
  modalFactLabel.textContent = t(lang, "funFact");
  modalFact.textContent = localized(member, "fun", lang);

  if (member.linkedin) {
    modalLinkedin.href = member.linkedin;
    modalLinkedin.textContent = t(lang, "linkedin");
    modalLinkedin.hidden = false;
  } else {
    modalLinkedin.hidden = true;
  }
}

function updateNavButtons() {
  modalPrev.disabled = currentIndex <= 0;
  modalNext.disabled = currentIndex >= visibleMembers.length - 1;
}

function openModal(triggerCardEl) {
  recomputeVisibleMembers();
  var index = -1;
  for (var i = 0; i < visibleMembers.length; i++) {
    if (visibleMembers[i].el === triggerCardEl) { index = i; break; }
  }
  if (index === -1) return;

  showModalAt(index);

  lastTrigger = triggerCardEl;
  modalBackdrop.hidden = false;
  void modalBackdrop.offsetHeight;
  modalBackdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
  isModalOpen = true;
  modalClose.focus();
}

function showModalAt(newIndex) {
  if (newIndex < 0 || newIndex >= visibleMembers.length) return;
  currentIndex = newIndex;
  fillModal(visibleMembers[currentIndex].member, currentLang());
  updateNavButtons();
}

function closeModal() {
  modalBackdrop.classList.remove("is-open");
  document.body.style.overflow = "";
  isModalOpen = false;
  setTimeout(function () { modalBackdrop.hidden = true; }, 300);
  if (lastTrigger) lastTrigger.focus();
}

function trapFocusKeydown(e) {
  var focusables = Array.prototype.slice.call(
    modalEl.querySelectorAll('button:not([disabled]), a[href]')
  ).filter(function (el) { return el.offsetParent !== null || el === document.activeElement; });
  if (!focusables.length) return;
  var first = focusables[0];
  var last = focusables[focusables.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function handleGlobalKeydown(e) {
  if (!isModalOpen) return;
  if (e.key === "Escape") {
    closeModal();
  } else if (e.key === "ArrowLeft") {
    if (!modalPrev.disabled) showModalAt(currentIndex - 1);
  } else if (e.key === "ArrowRight") {
    if (!modalNext.disabled) showModalAt(currentIndex + 1);
  } else if (e.key === "Tab") {
    trapFocusKeydown(e);
  }
}

function init() {
  filtersRoot = document.getElementById("team-filters");
  departmentsRoot = document.getElementById("team-departments");
  if (!departmentsRoot) return;

  modalBackdrop = document.getElementById("team-modal-backdrop");
  modalEl = document.getElementById("team-modal");
  modalMedia = document.getElementById("team-modal-media");
  modalClose = document.getElementById("team-modal-close");
  modalPrev = document.getElementById("team-modal-prev");
  modalNext = document.getElementById("team-modal-next");
  modalName = document.getElementById("team-modal-name");
  modalProgram = document.getElementById("team-modal-program");
  modalDept = document.getElementById("team-modal-dept");
  modalRole = document.getElementById("team-modal-role");
  modalFactLabel = document.getElementById("team-modal-fact-label");
  modalFact = document.getElementById("team-modal-fact");
  modalLinkedin = document.getElementById("team-modal-linkedin");
  demoBadge = document.getElementById("demo-badge");

  if (demoBadge) demoBadge.hidden = !DEMO;

  renderFilters();
  renderDepartments();

  modalClose.addEventListener("click", closeModal);
  modalPrev.addEventListener("click", function () { showModalAt(currentIndex - 1); });
  modalNext.addEventListener("click", function () { showModalAt(currentIndex + 1); });
  modalBackdrop.addEventListener("click", function (e) {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener("keydown", handleGlobalKeydown);
}

document.addEventListener("DOMContentLoaded", init);

document.addEventListener("synapsets:languagechange", function () {
  if (!departmentsRoot) return;
  if (isModalOpen) closeModal();
  renderFilters();
  renderDepartments();
});
