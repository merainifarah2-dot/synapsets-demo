/* =========================================================================
   SynapsÉTS — i18n (FR/EN)
   Dictionnaire unique pour tout le site. Chaque clé correspond à un chemin
   pointé utilisé dans les attributs data-i18n="section.cle" du HTML.
   Pour corriger ou ajouter une traduction : modifier l'objet TRANSLATIONS
   ci-dessous (fr et en ont exactement les mêmes clés).

   Note : les libellés de l'interaction de la page Équipe (labels du panneau,
   texte "rôle" ludique par membre) vivent dans js/team.js, à côté des
   données des membres, plutôt qu'ici — voir le commentaire en tête de ce
   fichier pour l'explication du choix.
   ========================================================================= */

(function () {
  "use strict";

  var STORAGE_KEY = "synapsets-lang";

  var TRANSLATIONS = {
    fr: {
      nav: { home: "Accueil", about: "À propos", project: "Projets", achievements: "Réalisations", team: "L'Équipe", partners: "Partenaires", join: "Rejoindre" },
      footer: {
        tagline: "Club étudiant biomédical — École de technologie supérieure, Montréal.",
        quicklinksTitle: "Liens rapides",
        followTitle: "Nous joindre",
        address: "Local D-2014, ÉTS",
        rights: "Tous droits réservés."
      },
      home: {
        hero: {
          title: "Redonner du mouvement, <span class=\"accent\">une articulation à la fois.</span>",
          lead: "Le seul club biomédical de l'ÉTS. Nous concevons des technologies pour améliorer la mobilité et l'autonomie des personnes.",
          cta1: "Découvrir le projet",
          cta2: "Rejoindre le club"
        },
        who: {
          tag: "Qui nous sommes",
          title: "Un club, une mission claire",
          text: "SynapsÉTS est le seul club biomédical de l'ÉTS. Des étudiants de plusieurs disciplines y conçoivent des technologies pour améliorer la mobilité et l'autonomie des personnes. Notre projet actuel est un exosquelette, et le club a l'ambition de grandir.",
          button: "En savoir plus"
        },
        build: {
          tag: "Ce qu'on construit",
          title: "Un exosquelette centré sur le genou et la hanche",
          alt: "Un membre du club en plein saut, équipé de l'exosquelette SynapsÉTS",
          point1: "Conçu pour soutenir la marche",
          point2: "Plus léger et moins invasif pour l'utilisateur",
          point3: "Un projet qui réunit plusieurs génies : mécanique, électrique, logiciel et plus",
          button: "Voir le projet"
        },
        goals: {
          tag: "Nos objectifs",
          title: "Où on s'en va",
          goal1Title: "Explorer de nouvelles possibilités",
          goal1Text: "Continuer à faire évoluer l'exosquelette actuel.",
          goal2Title: "Ouvrir de nouveaux projets",
          goal2Text: "Explorer d'autres concepts dans le domaine biomédical.",
          goal3Title: "Faire grandir le club",
          goal3Text: "Rejoindre plus d'étudiants qui veulent s'impliquer."
        },
        join: {
          tag: "Rejoins-nous",
          title: "Pas besoin d'être expert",
          text: "Commence par le pas qui te convient.",
          path1Title: "Nous suivre",
          path1Instagram: "Instagram",
          path1Facebook: "Facebook",
          path1Linkedin: "LinkedIn",
          path2Title: "Passer nous voir",
          path2Text: "Local D-2014, ÉTS",
          path3Title: "Rejoindre",
          path3Button: "Rejoindre le club"
        },
        orgs: {
          title: "Vous êtes une entreprise ou un organisme ?",
          text: "Aidez-nous à faire grandir le club : commandite, matériel, expertise.",
          button: "Devenir partenaire"
        }
      },
      about: {
        tag: "À propos",
        title: "À propos de SynapsÉTS",
        intro: "SynapsÉTS est un club étudiant biomédical de l'ÉTS. Notre but : améliorer la mobilité et l'autonomie des personnes, en concevant des technologies comme notre exosquelette.",
        activities: "Concrètement, l'équipe conçoit, fabrique et teste ses prototypes, et représente l'ÉTS dans des compétitions internationales comme ACE."
      },
      achievements: {
        tag: "Réalisations",
        title: "Nos réalisations",
        ace2023: { title: "ACE 2023", result: "Résultat à confirmer" },
        ace2024: { title: "ACE 2024", result: "Résultat à confirmer" },
        ace2025: { title: "ACE 2025", result: "Résultat à confirmer" }
      },
      project: {
        hero: {
          title: "L'Exosquelette",
          lead: "Un exosquelette de marche conçu, fabriqué et amélioré par les étudiant·e·s de l'ÉTS, année après année."
        },
        intro: {
          tag: "Vue d'ensemble",
          title: "Un cycle d'amélioration continue",
          text: "Depuis sa création, SynapsÉTS conçoit et fabrique un exosquelette offrant un soutien et une assistance à la marche, à la station debout, à l'assise, à la montée des escaliers et à la navigation sur un terrain accidenté. Structure, électronique, capteurs et contrôle sont révisés en parallèle pour se rapprocher d'un dispositif fiable et confortable."
        },
        feature1: { title: "Unique à l'ÉTS", text: "Le seul club de l'ÉTS dédié aux technologies d'assistance à la mobilité : une équipe multidisciplinaire qui combine génie mécanique, électrique et logiciel." },
        feature2: { title: "Développement actif", text: "Prototypage, tests et itérations continus. Le projet évolue à chaque année avec de nouveaux jalons techniques." },
        feature3: { title: "Amélioration continue", text: "L'équipe est toujours à la recherche de nouvelles façons d'améliorer le prototype, en testant de nouvelles approches." },
        feature4: { title: "Objectifs de compétition", text: "À terme, le club vise à représenter l'ÉTS dans des compétitions internationales comme la compétition ACE (Applied Collegiate Exoskeleton), le Cybathlon et les ASTM International Exo Games." },
        timeline: {
          tag: "Feuille de route",
          title: "Les grandes étapes du projet"
        },
        step1: { title: "Conception & premier prototype", text: "Définition de l'architecture mécanique et des matériaux (aluminium, impressions 3D), puis assemblage d'un premier exosquelette fonctionnel pour valider le concept." },
        step2: { title: "Amélioration continue du prototype", badge: "En cours", text: "L'équipe teste de nouvelles approches en continu pour améliorer le confort, la robustesse et la performance du prototype." },
        step3: { title: "Tests sur terrain accidenté", text: "Validation de la stabilité et de l'assistance à la marche hors laboratoire." },
        step4: { title: "Compétitions internationales", text: "Préparation en vue du Cybathlon et des ASTM International Exo Games." },
        reach: {
          tag: "Projet antérieur",
          title: "Reach — le bras robotisé",
          text: "Reach était un bras robotisé d'assistance, un projet antérieur du club exploré avant l'exosquelette actuel."
        },
        headset: {
          tag: "Piste explorée",
          title: "Le casque à ondes cérébrales",
          text: "Le casque à ondes cérébrales est une piste explorée par le club pour la lecture de signaux cérébraux. Il ne s'agit pas d'un projet actif confirmé."
        },
        photoSoon: "Photo à venir",
        cta: {
          title: "Envie de travailler sur l'exosquelette ?",
          text: "Découvre l'équipe derrière le projet, deviens partenaire, ou rejoins directement le club.",
          button1: "Voir l'équipe",
          button2: "Devenir partenaire",
          button3: "Comment nous rejoindre"
        }
      },
      team: {
        hero: {
          tag: "L'Équipe",
          title: "Rencontre l'équipe"
        },
        demoBadge: "Données fictives — démonstration",
        cta: {
          title: "Ta place est ici",
          text: "Le club grandit. Viens construire avec nous.",
          button: "Rejoindre le club"
        }
      },
      partners: {
        hero: {
          tag: "Devenez Partenaire",
          title: "Aidez-nous à faire avancer la mobilité",
          lead: "Votre contribution finance directement la fabrication et les tests de nos prototypes."
        },
        download: { title: "Télécharger notre plan de partenariat", hint: "Document PDF — détails des paliers et contreparties" },
        intro: {
          text: "Construire un exosquelette demande du matériel spécialisé : profilés et pièces d'<strong>aluminium</strong>, <strong>composants électroniques</strong> (moteurs, contrôleurs, batteries) et <strong>capteurs</strong> de précision (force, position, IMU)."
        },
        tiers: { tag: "Paliers de commandite", title: "Trois façons de nous soutenir" },
        tierBronze: {
          desc: "Visibilité de base et remerciements sur nos canaux — palier d'entrée idéal pour soutenir le projet.",
          perk1: "Logo sur le site web", perk2: "Mention sur les réseaux sociaux", perk3: "Remerciement en fin de saison"
        },
        tierArgent: {
          desc: "Une visibilité renforcée et une présence sur le prototype lors des démonstrations publiques.",
          perk1: "Tous les avantages Bronze", perk2: "Logo sur le prototype / kiosque", perk3: "Invitation aux présentations du club"
        },
        tierOr: {
          desc: "Un partenariat stratégique avec visibilité maximale et accès privilégié à l'équipe.",
          perk1: "Tous les avantages Argent", perk2: "Logo principal sur l'exosquelette", perk3: "Rencontre dédiée avec l'équipe technique"
        },
        tiersNote: "Détails complets des paliers et contreparties disponibles dans le plan de partenariat.",
        ctaButton: "Nous contacter",
        nonStructured: {
          tag: "Autre façon d'aider",
          title: "Pas de partenariat structuré ? Vous pouvez quand même nous aider",
          text: "Un service, un rabais, des matériaux ou des composants, ou simplement un don sans attente de contrepartie : toute forme de soutien est bienvenue, même hors des paliers officiels.",
          button: "Nous proposer votre aide"
        },
        currentSponsors: {
          tag: "Nos sponsors",
          title: "Nos sponsors actuels",
          emptyText: "Nos premiers partenaires seront affichés ici, par palier. Soyez parmi les premiers à soutenir SynapsÉTS !",
          diamant: "Diamant",
          or: "Or",
          argent: "Argent",
          bronze: "Bronze",
          comingSoon: "À venir"
        }
      },
      join: {
        hero: {
          title: "Rejoins SynapsÉTS",
          lead: "Peu importe ta discipline, il y a une place pour toi dans l'équipe."
        },
        mainCta: {
          button: "Nous écrire",
          local: "Tu peux aussi passer nous voir au local D-2014, ÉTS."
        },
        teams: {
          tag: "Nos équipes",
          title: "Les équipes du club",
          lead: "Écris-nous ou viens nous voir pour plus de détails sur chaque équipe.",
          mec: { title: "Mécanique", item1: "Conception de la structure de l'exosquelette", item2: "Amélioration continue du prototype" },
          ele: { title: "Électrique", item1: "Circuits imprimés", item2: "Capteurs", item3: "Électronique embarquée" },
          log: { title: "Logiciel", item1: "Contrôle de l'exosquelette", item2: "Site web", item3: "Documentation" },
          com: { title: "Communication", item1: "Réseaux sociaux", item2: "Vidéo", item3: "Événements et partenariats" }
        }
      }
    },

    en: {
      nav: { home: "Home", about: "About", project: "Projects", achievements: "Achievements", team: "Our Team", partners: "Partners", join: "Join Us" },
      footer: {
        tagline: "Biomedical student club — École de technologie supérieure, Montreal.",
        quicklinksTitle: "Quick Links",
        followTitle: "Get in Touch",
        address: "Room D-2014, ÉTS",
        rights: "All rights reserved."
      },
      home: {
        hero: {
          title: "Restoring movement, <span class=\"accent\">one joint at a time.</span>",
          lead: "The only biomedical club at ÉTS. We design technologies to improve people's mobility and independence.",
          cta1: "Discover the project",
          cta2: "Join the club"
        },
        who: {
          tag: "Who we are",
          title: "One club, one clear mission",
          text: "SynapsÉTS is the only biomedical club at ÉTS. Students from several disciplines design technologies to improve people's mobility and independence. Our current project is an exoskeleton, and the club has ambitions to grow.",
          button: "Learn more"
        },
        build: {
          tag: "What we're building",
          title: "An exoskeleton centered on the knee and hip",
          alt: "A club member mid-jump, wearing the SynapsÉTS exoskeleton",
          point1: "Designed to support walking",
          point2: "Lighter and less invasive for the user",
          point3: "A project that brings together multiple engineering fields: mechanical, electrical, software, and more",
          button: "See the project"
        },
        goals: {
          tag: "Our goals",
          title: "Where we're headed",
          goal1Title: "Explore new possibilities",
          goal1Text: "Keep improving the current exoskeleton.",
          goal2Title: "Open up new projects",
          goal2Text: "Explore other concepts in the biomedical field.",
          goal3Title: "Grow the club",
          goal3Text: "Bring in more students who want to get involved."
        },
        join: {
          tag: "Join us",
          title: "No need to be an expert",
          text: "Start with whichever step suits you.",
          path1Title: "Follow us",
          path1Instagram: "Instagram",
          path1Facebook: "Facebook",
          path1Linkedin: "LinkedIn",
          path2Title: "Come visit",
          path2Text: "Room D-2014, ÉTS",
          path3Title: "Join",
          path3Button: "Join the club"
        },
        orgs: {
          title: "Are you a company or organization?",
          text: "Help us grow the club: sponsorship, equipment, expertise.",
          button: "Become a partner"
        }
      },
      about: {
        tag: "About",
        title: "About SynapsÉTS",
        intro: "SynapsÉTS is a biomedical student club at ÉTS. Our goal: improve people's mobility and independence by designing technologies like our exoskeleton.",
        activities: "Concretely, the team designs, builds, and tests its prototypes, and represents ÉTS in international competitions such as ACE."
      },
      achievements: {
        tag: "Achievements",
        title: "Our achievements",
        ace2023: { title: "ACE 2023", result: "Result to be confirmed" },
        ace2024: { title: "ACE 2024", result: "Result to be confirmed" },
        ace2025: { title: "ACE 2025", result: "Result to be confirmed" }
      },
      project: {
        hero: {
          title: "The Exoskeleton",
          lead: "A walking exoskeleton designed, built, and improved by ÉTS students, year after year."
        },
        intro: {
          tag: "Overview",
          title: "A cycle of continuous improvement",
          text: "Since its creation, SynapsÉTS has been designing and building an exoskeleton that offers support and assistance for walking, standing, sitting, climbing stairs, and navigating uneven terrain. Structure, electronics, sensors, and control are refined in parallel to move closer to a reliable and comfortable device."
        },
        feature1: { title: "Unique at ÉTS", text: "The only club at ÉTS dedicated to mobility-assistance technologies: a multidisciplinary team combining mechanical, electrical, and software engineering." },
        feature2: { title: "Active development", text: "Continuous prototyping, testing, and iteration. The project evolves every year with new technical milestones." },
        feature3: { title: "Continuous improvement", text: "The team is always looking for new ways to improve the prototype by testing new approaches." },
        feature4: { title: "Competition goals", text: "Ultimately, the club aims to represent ÉTS in international competitions such as the ACE competition (Applied Collegiate Exoskeleton), the Cybathlon, and the ASTM International Exo Games." },
        timeline: {
          tag: "Roadmap",
          title: "Key milestones of the project"
        },
        step1: { title: "Design & first prototype", text: "Defining the mechanical architecture and materials (aluminum, 3D printing), then assembling a first functional exoskeleton to validate the concept." },
        step2: { title: "Continuous prototype improvement", badge: "In progress", text: "The team continuously tests new approaches to improve the prototype's comfort, robustness, and performance." },
        step3: { title: "Uneven-terrain testing", text: "Validating stability and walking assistance outside the lab." },
        step4: { title: "International competitions", text: "Preparing for the Cybathlon and the ASTM International Exo Games." },
        reach: {
          tag: "Past project",
          title: "Reach — the robotic arm",
          text: "Reach was an assistive robotic arm, an earlier club project explored before the current exoskeleton."
        },
        headset: {
          tag: "Explored idea",
          title: "The brainwave headset",
          text: "The brainwave headset is an idea the club has explored for reading brain signals. It is not a confirmed active project."
        },
        photoSoon: "Photo coming soon",
        cta: {
          title: "Want to work on the exoskeleton?",
          text: "Meet the team behind the project, become a partner, or join the club directly.",
          button1: "Meet the team",
          button2: "Become a partner",
          button3: "How to join"
        }
      },
      team: {
        hero: {
          tag: "Our Team",
          title: "Meet the team"
        },
        demoBadge: "Fictional data — demo",
        cta: {
          title: "There's a place for you here",
          text: "The club is growing. Come build with us.",
          button: "Join the club"
        }
      },
      partners: {
        hero: {
          tag: "Become a Partner",
          title: "Help us advance mobility",
          lead: "Your contribution directly funds the manufacturing and testing of our prototypes."
        },
        download: { title: "Download our partnership plan", hint: "PDF document — full tier details and benefits" },
        intro: {
          text: "Building an exoskeleton requires specialized material: <strong>aluminum</strong> profiles and parts, <strong>electronic components</strong> (motors, controllers, batteries), and precision <strong>sensors</strong> (force, position, IMU)."
        },
        tiers: { tag: "Sponsorship tiers", title: "Three ways to support us" },
        tierBronze: {
          desc: "Basic visibility and recognition on our channels — an ideal entry tier to support the project.",
          perk1: "Logo on the website", perk2: "Mention on social media", perk3: "End-of-season acknowledgment"
        },
        tierArgent: {
          desc: "Enhanced visibility and a presence on the prototype during public demonstrations.",
          perk1: "All Bronze benefits", perk2: "Logo on the prototype / booth", perk3: "Invitation to club presentations"
        },
        tierOr: {
          desc: "A strategic partnership with maximum visibility and privileged access to the team.",
          perk1: "All Silver benefits", perk2: "Primary logo on the exoskeleton", perk3: "Dedicated meeting with the technical team"
        },
        tiersNote: "Full tier details and benefits are available in the partnership plan.",
        ctaButton: "Contact us",
        nonStructured: {
          tag: "Other ways to help",
          title: "No structured partnership? You can still help",
          text: "A service, a discount, materials or components, or simply a gift with no expectation of return: any form of support is welcome, even outside the official tiers.",
          button: "Offer your help"
        },
        currentSponsors: {
          tag: "Our sponsors",
          title: "Our current sponsors",
          emptyText: "Our first partners will be featured here, by tier. Be among the first to support SynapsÉTS!",
          diamant: "Diamond",
          or: "Gold",
          argent: "Silver",
          bronze: "Bronze",
          comingSoon: "Coming soon"
        }
      },
      join: {
        hero: {
          title: "Join SynapsÉTS",
          lead: "Whatever your discipline, there's a place for you on the team."
        },
        mainCta: {
          button: "Write to us",
          local: "You can also come see us at room D-2014, ÉTS."
        },
        teams: {
          tag: "Our teams",
          title: "The club's teams",
          lead: "Write to us or come see us for more details on each team.",
          mec: { title: "Mechanical", item1: "Designing the exoskeleton's structure", item2: "Continuous improvement of the prototype" },
          ele: { title: "Electrical", item1: "Printed circuits", item2: "Sensors", item3: "Embedded electronics" },
          log: { title: "Software", item1: "Exoskeleton control", item2: "Website", item3: "Documentation" },
          com: { title: "Communications", item1: "Social media", item2: "Video", item3: "Events and partnerships" }
        }
      }
    }
  };

  function getPath(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = "fr";

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = getPath(TRANSLATIONS[lang], el.getAttribute("data-i18n"));
      if (value !== undefined) el.innerHTML = value;
    });

    // Attribut alt (texte alternatif d'image) traduisible séparément de
    // l'innerHTML, via data-i18n-alt="section.cle".
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var altValue = getPath(TRANSLATIONS[lang], el.getAttribute("data-i18n-alt"));
      if (altValue !== undefined) el.setAttribute("alt", altValue);
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      btn.classList.toggle("is-active", isActive);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* stockage indisponible : on continue sans persistance */ }

    document.dispatchEvent(new CustomEvent("synapsets:languagechange", { detail: { lang: lang } }));
  }

  function getCurrentLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || "fr";
    } catch (e) {
      return "fr";
    }
  }

  function initI18n() {
    applyLanguage(getCurrentLang());
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });
  }

  // Exposé pour les autres scripts (ex: js/team.js) qui doivent connaître
  // la langue courante ou réagir à un changement de langue.
  window.SynapsETSi18n = {
    translations: TRANSLATIONS,
    getCurrentLang: getCurrentLang,
    applyLanguage: applyLanguage
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initI18n);
  } else {
    initI18n();
  }
})();
