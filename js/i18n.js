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
        who: {
          tag: "Qui nous sommes",
          title: "Un club, une mission claire",
          text: "SynapsÉTS est le seul club étudiant biomédical de l'ÉTS. Notre équipe multidisciplinaire conçoit et fabrique un exosquelette de marche, en développement actif à chaque session, avec l'ambition de le mener un jour en compétition internationale.",
          button: "En savoir plus sur le projet"
        },
        join: {
          tag: "Rejoins-nous",
          title: "Viens contribuer à un projet qui change des vies",
          text: "Aucune expérience préalable requise — seulement de la curiosité et de la motivation. Découvre comment t'impliquer, nous suivre ou venir nous rencontrer.",
          button: "Rejoindre le club"
        }
      },
      project: {
        hero: {
          title: "L'Exosquelette",
          lead: "Un exosquelette de marche conçu, fabriqué et amélioré par les étudiant·e·s de l'ÉTS, session après session."
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
        step1: { title: "Conception & premier prototype", text: "Définition de l'architecture mécanique et des matériaux (aluminium, impressions 3D), puis assemblage d'un premier exosquelette fonctionnel pour valider le concept." },
        step2: { title: "Implémentation de la cheville", badge: "En cours", text: "Intégration d'un module de cheville actif pour un mouvement plus naturel et une meilleure absorption d'impact." },
        step3: { title: "Tests sur terrain accidenté", text: "Validation de la stabilité et de l'assistance à la marche hors laboratoire." },
        step4: { title: "Compétitions internationales", text: "Préparation en vue du Cybathlon et des ASTM International Exo Games." },
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
        dept: { exec: "Exécutif / Direction", mec: "Mécanique", ele: "Électrique", log: "Logiciel", com: "Communications" },
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
          emptyText: "Nos premiers partenaires seront affichés ici. Soyez parmi les premiers à soutenir SynapsÉTS !"
        }
      },
      join: {
        hero: {
          title: "Rejoins SynapsÉTS",
          lead: "Que tu veuilles t'impliquer activement, simplement suivre nos avancées, ou venir nous voir en personne : il y a une façon de rejoindre l'aventure qui te convient."
        },
        paths: { tag: "Comment nous rejoindre", title: "Trouve ta prochaine étape" },
        path1: {
          title: "Devenir membre actif",
          text: "Que tu sois en génie mécanique, électrique, logiciel, biomédical ou dans un domaine connexe, il y a une place pour toi dans l'équipe. Aucune expérience préalable n'est requise — seulement de la curiosité et de la motivation. Écris-nous pour qu'on planifie ta rencontre avec l'équipe."
        },
        path2: {
          title: "Nous suivre",
          text: "Pas prêt·e à t'engager tout de suite ? Suis nos avancées, nos compétitions et nos coulisses sur nos réseaux.",
          instagram: "Instagram",
          linkedin: "LinkedIn"
        },
        path3: {
          title: "Nous visiter",
          text: "Le club t'ouvre ses portes au local D2020 de l'ÉTS — viens voir l'exosquelette de près, discuter avec l'équipe et poser toutes tes questions, sans rendez-vous nécessaire."
        },
        mailBanner: {
          tag: "Dernière étape",
          title: "Prêt·e à embarquer avec nous ?",
          text: "Écris-nous dès maintenant : un·e membre de l'exécutif te répondra pour planifier ta rencontre avec l'équipe.",
          button: "Nous écrire"
        }
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
        who: {
          tag: "Who we are",
          title: "One club, one clear mission",
          text: "SynapsÉTS is the only biomedical student club at ÉTS. Our multidisciplinary team designs and builds a walking exoskeleton, in active development every semester, with the ambition to one day take it to international competition.",
          button: "Learn more about the project"
        },
        join: {
          tag: "Join us",
          title: "Come contribute to a project that changes lives",
          text: "No prior experience required — just curiosity and motivation. Find out how to get involved, follow us, or come meet us in person.",
          button: "Join the club"
        }
      },
      project: {
        hero: {
          title: "The Exoskeleton",
          lead: "A walking exoskeleton designed, built, and improved by ÉTS students, semester after semester."
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
        step1: { title: "Design & first prototype", text: "Defining the mechanical architecture and materials (aluminum, 3D printing), then assembling a first functional exoskeleton to validate the concept." },
        step2: { title: "Ankle implementation", badge: "In progress", text: "Integrating an active ankle module for more natural movement and better impact absorption." },
        step3: { title: "Uneven-terrain testing", text: "Validating stability and walking assistance outside the lab." },
        step4: { title: "International competitions", text: "Preparing for the Cybathlon and the ASTM International Exo Games." },
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
        dept: { exec: "Executive / Leadership", mec: "Mechanical", ele: "Electrical", log: "Software", com: "Communications" },
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
          emptyText: "Our first partners will be featured here. Be among the first to support SynapsÉTS!"
        }
      },
      join: {
        hero: {
          title: "Join SynapsÉTS",
          lead: "Whether you want to get actively involved, simply follow our progress, or come see us in person: there's a way to join the adventure that fits you."
        },
        paths: { tag: "How to join", title: "Find your next step" },
        path1: {
          title: "Become an active member",
          text: "Whether you're in mechanical, electrical, software, biomedical engineering, or a related field, there's a place for you on the team. No prior experience required — just curiosity and motivation. Write to us so we can plan your meet-up with the team."
        },
        path2: {
          title: "Follow us",
          text: "Not ready to commit just yet? Follow our progress, competitions, and behind-the-scenes on our channels.",
          instagram: "Instagram",
          linkedin: "LinkedIn"
        },
        path3: {
          title: "Come visit",
          text: "The club opens its doors at ÉTS room D2020 — come see the exoskeleton up close, chat with the team, and ask all your questions, no appointment needed."
        },
        mailBanner: {
          tag: "Last step",
          title: "Ready to come aboard?",
          text: "Write to us now: a member of the executive team will get back to you to plan your meet-up with the team.",
          button: "Write to us"
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
