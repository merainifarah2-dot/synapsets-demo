/* =========================================================================
   SynapsÉTS — i18n (FR/EN)
   Dictionnaire unique pour tout le site. Chaque clé correspond à un chemin
   pointé utilisé dans les attributs data-i18n="section.cle" du HTML.
   Pour corriger ou ajouter une traduction : modifier l'objet TRANSLATIONS
   ci-dessous (fr et en ont exactement les mêmes clés).
   ========================================================================= */

(function () {
  "use strict";

  var STORAGE_KEY = "synapsets-lang";

  var TRANSLATIONS = {
    fr: {
      nav: { home: "Accueil", project: "Le Projet", team: "L'Équipe", partners: "Partenaires", join: "Rejoindre" },
      footer: {
        tagline: "Club étudiant biomédical — École de technologie supérieure, Montréal.",
        quicklinksTitle: "Liens rapides",
        followTitle: "Nous joindre",
        rights: "Tous droits réservés."
      },
      home: {
        hero: {
          eyebrow: "Club étudiant biomédical — ÉTS Montréal",
          title: "Rendre la mobilité <span class=\"accent\">accessible à tous.</span>",
          lead: "SynapsÉTS cherche à fournir une solution pour améliorer la qualité de vie des personnes ayant des difficultés de mobilité. Notre objectif à long terme est de créer un exosquelette qui renforce la mobilité et l'indépendance des individus confrontés à ces défis. Pour ce faire, nous visons à concevoir et fabriquer un exosquelette offrant un soutien et une assistance à la marche, à la station debout, à l'assise, à la montée des escaliers et à la navigation sur un terrain accidenté.",
          cta1: "Rejoindre le club",
          cta2: "Devenir partenaire"
        },
        stat1: { title: "Seul club biomédical", text: "Le premier et unique club étudiant biomédical de l'ÉTS." },
        stat2: { title: "Développement actif", text: "Prototypage et itérations continues, session après session." },
        stat3: { title: "Cap sur la compétition", text: "Objectif : Cybathlon et ASTM International Exo Games." },
        explore: {
          tag: "Explorer",
          title: "Découvrir SynapsÉTS"
        },
        card: {
          project: { title: "Le Projet", text: "L'exosquelette, ses objectifs techniques et sa feuille de route.", link: "En savoir plus" },
          team: { title: "L'Équipe", text: "Les étudiant·e·s multidisciplinaires derrière le projet.", link: "Voir l'équipe" },
          partners: { title: "Partenaires", text: "Paliers de commandite et matériel à financer.", link: "Devenir partenaire" },
          join: { title: "Rejoindre", text: "Aucune expérience requise, seulement de la motivation.", link: "Rejoindre le club" }
        },
        cta: {
          title: "Prêt·e à contribuer à un projet qui change des vies ?",
          text: "Que tu sois en génie mécanique, électrique, logiciel ou biomédical, il y a une place pour toi dans l'équipe.",
          button: "Rejoindre le club"
        }
      },
      project: {
        hero: {
          tag: "Le Projet",
          title: "Un exosquelette conçu par et pour l'ÉTS",
          lead: "SynapsÉTS est le seul club étudiant biomédical de l'École de technologie supérieure. En développement actif, l'équipe améliore son exosquelette d'assistance à la marche à chaque session."
        },
        intro: {
          tag: "Vue d'ensemble",
          title: "Un cycle d'amélioration continue",
          text: "Depuis sa création, SynapsÉTS conçoit et fabrique un exosquelette offrant un soutien et une assistance à la marche, à la station debout, à l'assise, à la montée des escaliers et à la navigation sur un terrain accidenté. Structure, électronique, capteurs et contrôle sont révisés en parallèle pour se rapprocher d'un dispositif fiable et confortable."
        },
        feature1: { title: "Unique à l'ÉTS", text: "Premier et seul club biomédical de l'école : une équipe multidisciplinaire qui combine génie mécanique, électrique, logiciel et biomédical." },
        feature2: { title: "Développement actif", text: "Prototypage, tests et itérations continus. Le projet évolue à chaque session avec de nouveaux jalons techniques." },
        feature3: { title: "Module de cheville", text: "L'équipe travaille actuellement sur l'implémentation de la cheville, une étape clé pour un mouvement naturel et une meilleure absorption d'impact." },
        feature4: { title: "Objectifs de compétition", text: "À terme, le club vise à représenter l'ÉTS dans des compétitions internationales comme le Cybathlon et les ASTM International Exo Games." },
        timeline: {
          tag: "Feuille de route",
          title: "Les grandes étapes du projet"
        },
        step1: { title: "Conception structurelle", text: "Définition de l'architecture mécanique et des matériaux (aluminium, impressions 3D)." },
        step2: { title: "Premier prototype", text: "Assemblage d'un premier exosquelette fonctionnel pour valider le concept." },
        step3: { title: "Implémentation de la cheville", text: "Intégration d'un module de cheville actif pour un mouvement plus naturel." },
        step4: { title: "Tests sur terrain accidenté", text: "Validation de la stabilité et de l'assistance à la marche hors laboratoire." },
        step5: { title: "Compétitions internationales", text: "Préparation en vue du Cybathlon et des ASTM International Exo Games." },
        cta: {
          title: "Envie de travailler sur l'exosquelette ?",
          text: "Découvre l'équipe derrière le projet ou deviens partenaire pour financer les prochaines étapes.",
          button1: "Voir l'équipe",
          button2: "Devenir partenaire"
        }
      },
      team: {
        hero: {
          tag: "L'Équipe",
          title: "Les personnes derrière le projet",
          lead: "Une équipe étudiante multidisciplinaire, organisée par département. Clique sur une carte pour voir le profil complet."
        },
        dept: { exec: "Exécutif / Direction", mec: "Mécanique", ele: "Électrique", log: "Logiciel", com: "Communications" },
        modal: { department: "Département", program: "Programme d'études", linkedin: "Voir le profil LinkedIn", close: "Fermer" },
        cta: {
          title: "Rejoins une équipe passionnée",
          text: "Chaque département accueille de nouveaux membres à chaque session.",
          button: "Rejoindre le club"
        }
      },
      partners: {
        hero: {
          tag: "Devenez Partenaire",
          title: "Aidez-nous à faire avancer la mobilité",
          lead: "Votre contribution finance directement la fabrication et les tests de nos prototypes."
        },
        intro: {
          text: "Construire un exosquelette demande du matériel spécialisé : profilés et pièces d'<strong>aluminium</strong>, <strong>composants électroniques</strong> (moteurs, contrôleurs, batteries) et <strong>capteurs</strong> de précision (force, position, IMU)."
        },
        download: { title: "Télécharger notre plan de partenariat", hint: "Document PDF — détails des paliers et contreparties" },
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
        ctaButton: "Nous contacter"
      },
      join: {
        hero: {
          tag: "Rejoindre le Club",
          title: "Envie de contribuer à un projet qui change des vies ?",
          lead: "Que tu sois en génie mécanique, électrique, logiciel, biomédical ou dans un domaine connexe, il y a une place pour toi dans l'équipe. Aucune expérience préalable n'est requise — seulement de la curiosité et de la motivation."
        },
        steps: { tag: "Comment nous rejoindre", title: "Trois étapes simples" },
        step1: { title: "Remplis le formulaire", text: "Partage-nous ton programme d'études et tes champs d'intérêt." },
        step2: { title: "Rencontre l'équipe", text: "Discute avec les responsables de département lors d'un café-rencontre." },
        step3: { title: "Choisis ton département", text: "Mécanique, électrique, logiciel ou communications : trouve ta place." },
        finalCta: {
          tag: "Dernière étape",
          title: "Prêt·e à embarquer avec nous ?",
          text: "Écris-nous dès maintenant : un·e membre de l'exécutif te répondra pour planifier ta rencontre avec l'équipe."
        },
        qrCaption: "QR code / lien d'adhésion à venir",
        ctaButton: "Nous écrire pour te joindre à nous"
      }
    },

    en: {
      nav: { home: "Home", project: "The Project", team: "Our Team", partners: "Partners", join: "Join Us" },
      footer: {
        tagline: "Biomedical student club — École de technologie supérieure, Montreal.",
        quicklinksTitle: "Quick Links",
        followTitle: "Get in Touch",
        rights: "All rights reserved."
      },
      home: {
        hero: {
          eyebrow: "Biomedical Student Club — ÉTS Montreal",
          title: "Making mobility <span class=\"accent\">accessible to all.</span>",
          lead: "SynapsÉTS aims to provide a solution to improve the quality of life of people with mobility challenges. Our long-term goal is to create an exoskeleton that strengthens mobility and independence for individuals facing these challenges. To do so, we aim to design and build an exoskeleton offering support and assistance for walking, standing, sitting, climbing stairs, and navigating uneven terrain.",
          cta1: "Join the club",
          cta2: "Become a partner"
        },
        stat1: { title: "Only biomedical club", text: "The first and only biomedical student club at ÉTS." },
        stat2: { title: "Active development", text: "Continuous prototyping and iteration, semester after semester." },
        stat3: { title: "Aiming for competition", text: "Goal: Cybathlon and the ASTM International Exo Games." },
        explore: {
          tag: "Explore",
          title: "Discover SynapsÉTS"
        },
        card: {
          project: { title: "The Project", text: "The exoskeleton, its technical goals, and its roadmap.", link: "Learn more" },
          team: { title: "Our Team", text: "The multidisciplinary students behind the project.", link: "Meet the team" },
          partners: { title: "Partners", text: "Sponsorship tiers and the equipment we need to fund.", link: "Become a partner" },
          join: { title: "Join Us", text: "No experience required, just motivation.", link: "Join the club" }
        },
        cta: {
          title: "Ready to contribute to a project that changes lives?",
          text: "Whether you're in mechanical, electrical, software, or biomedical engineering, there's a place for you on the team.",
          button: "Join the club"
        }
      },
      project: {
        hero: {
          tag: "The Project",
          title: "An exoskeleton built by and for ÉTS",
          lead: "SynapsÉTS is the only biomedical student club at École de technologie supérieure. In active development, the team improves its walking-assistance exoskeleton every semester."
        },
        intro: {
          tag: "Overview",
          title: "A cycle of continuous improvement",
          text: "Since its creation, SynapsÉTS has been designing and building an exoskeleton that offers support and assistance for walking, standing, sitting, climbing stairs, and navigating uneven terrain. Structure, electronics, sensors, and control are refined in parallel to move closer to a reliable and comfortable device."
        },
        feature1: { title: "Unique at ÉTS", text: "The school's first and only biomedical club: a multidisciplinary team combining mechanical, electrical, software, and biomedical engineering." },
        feature2: { title: "Active development", text: "Continuous prototyping, testing, and iteration. The project evolves every semester with new technical milestones." },
        feature3: { title: "Ankle module", text: "The team is currently working on implementing the ankle, a key step toward more natural movement and better impact absorption." },
        feature4: { title: "Competition goals", text: "Ultimately, the club aims to represent ÉTS in international competitions such as the Cybathlon and the ASTM International Exo Games." },
        timeline: {
          tag: "Roadmap",
          title: "Key milestones of the project"
        },
        step1: { title: "Structural design", text: "Defining the mechanical architecture and materials (aluminum, 3D printing)." },
        step2: { title: "First prototype", text: "Assembling a first functional exoskeleton to validate the concept." },
        step3: { title: "Ankle implementation", text: "Integrating an active ankle module for more natural movement." },
        step4: { title: "Uneven-terrain testing", text: "Validating stability and walking assistance outside the lab." },
        step5: { title: "International competitions", text: "Preparing for the Cybathlon and the ASTM International Exo Games." },
        cta: {
          title: "Want to work on the exoskeleton?",
          text: "Meet the team behind the project or become a partner to help fund the next steps.",
          button1: "Meet the team",
          button2: "Become a partner"
        }
      },
      team: {
        hero: {
          tag: "Our Team",
          title: "The people behind the project",
          lead: "A multidisciplinary student team, organized by department. Click a card to see the full profile."
        },
        dept: { exec: "Executive / Leadership", mec: "Mechanical", ele: "Electrical", log: "Software", com: "Communications" },
        modal: { department: "Department", program: "Program of study", linkedin: "View LinkedIn profile", close: "Close" },
        cta: {
          title: "Join a passionate team",
          text: "Every department welcomes new members each semester.",
          button: "Join the club"
        }
      },
      partners: {
        hero: {
          tag: "Become a Partner",
          title: "Help us advance mobility",
          lead: "Your contribution directly funds the manufacturing and testing of our prototypes."
        },
        intro: {
          text: "Building an exoskeleton requires specialized material: <strong>aluminum</strong> profiles and parts, <strong>electronic components</strong> (motors, controllers, batteries), and precision <strong>sensors</strong> (force, position, IMU)."
        },
        download: { title: "Download our partnership plan", hint: "PDF document — full tier details and benefits" },
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
        ctaButton: "Contact us"
      },
      join: {
        hero: {
          tag: "Join the Club",
          title: "Want to contribute to a project that changes lives?",
          lead: "Whether you're in mechanical, electrical, software, biomedical engineering, or a related field, there's a place for you on the team. No prior experience required — just curiosity and motivation."
        },
        steps: { tag: "How to join", title: "Three simple steps" },
        step1: { title: "Fill out the form", text: "Tell us about your program of study and areas of interest." },
        step2: { title: "Meet the team", text: "Chat with department leads over a coffee meet-up." },
        step3: { title: "Choose your department", text: "Mechanical, electrical, software, or communications: find your fit." },
        finalCta: {
          tag: "Last step",
          title: "Ready to come aboard?",
          text: "Write to us now: a member of the executive team will get back to you to plan your meet-up with the team."
        },
        qrCaption: "Membership QR code / link coming soon",
        ctaButton: "Write to us to join"
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
