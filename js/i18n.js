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
      nav: { about: "À propos", project: "Projets", achievements: "Réalisations", team: "L'Équipe", partners: "Partenaires", join: "Rejoindre" },
      footer: {
        tagline: "Club étudiant biomédical — École de technologie supérieure, Montréal.",
        quicklinksTitle: "Liens rapides",
        followTitle: "Nous joindre",
        address: "Local D-2014, ÉTS",
        rights: "Tous droits réservés."
      },
      home: {
        hero: {
          badge: "Podium à ACE · 2023 · 2024",
          title: "Redonner du mouvement, <span class=\"accent\">une articulation à la fois.</span>",
          lead: "Le seul club biomédical de l'ÉTS. Nous concevons des technologies pour améliorer la mobilité et l'autonomie des personnes.",
          cta1: "Découvrir le projet",
          cta2: "Rejoindre le club"
        },
        facts: {
          fact1Value: "Podium",
          fact1Label: "à la compétition internationale d'exosquelettes ACE",
          fact2Value: "10 ans",
          fact2Label: "d'existence du club",
          fact3Value: "Seul club",
          fact3Label: "biomédical de l'ÉTS"
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
          point3: "Plus abordable que la génération précédente",
          button: "Voir le projet"
        },
        results: {
          tag: "Aperçu du palmarès",
          title: "Nos résultats en compétition",
          result1Title: "2026",
          result1Text: "2e place, ACE (résultat à confirmer)",
          result2Title: "2024",
          result2Text: "1re place, ACE",
          result3Title: "2023",
          result3Text: "3e place, ACE",
          ambianceAlt: "L'équipe SynapsÉTS à ACE 2026",
          ambianceCaption: "L'équipe SynapsÉTS à ACE 2026",
          button: "Toutes nos réalisations"
        },
        join: {
          tag: "Rejoins-nous",
          title: "Pas besoin d'être expert",
          text: "Commence par le pas qui te convient.",
          path1Title: "Nous suivre",
          path1Button: "Instagram",
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
        placeholder: "Contenu à venir."
      },
      achievements: {
        tag: "Réalisations",
        title: "Nos réalisations",
        placeholder: "Contenu à venir."
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
          emptyText: "Nos premiers partenaires seront affichés ici. Soyez parmi les premiers à soutenir SynapsÉTS !"
        }
      },
      join: {
        hero: {
          title: "Rejoins SynapsÉTS",
          lead: "Que tu veuilles t'impliquer activement, simplement suivre nos avancées, ou venir nous voir en personne : il y a une façon de rejoindre l'aventure qui te convient."
        },
        steps: {
          tag: "Comment ça marche",
          title: "De la curiosité à l'équipe",
          step1: { title: "Viens nous voir ou écris-nous", text: "Passe au local D-2014 ou envoie-nous un courriel pour poser tes questions." },
          step2: { title: "Fais ta demande d'adhésion", text: "L'adhésion se fait par le formulaire officiel des clubs étudiants de l'ÉTS." },
          step3: { title: "Suis la formation de base", text: "La formation de base des nouveaux membres de la Régie des clubs étudiants est obligatoire pour l'accès aux locaux et aux bourses d'implication." },
          step4: { title: "Rejoins ton équipe", text: "Tu es accueilli(e) dans l'équipe qui correspond à tes intérêts." },
          link: "Voir la page du club sur le site de l'ÉTS"
        },
        focus: {
          tag: "Nos équipes",
          title: "Trouve ta place",
          lead: "Toutes les disciplines sont les bienvenues. Voici où on peut avoir besoin de toi.",
          mec: { title: "Mécanique", text: "Conception et amélioration de la structure de l'exosquelette." },
          ele: { title: "Électrique", text: "Circuits imprimés, capteurs et électronique embarquée." },
          log: { title: "Logiciel", text: "Programmation du contrôle de l'exosquelette, site web et documentation." },
          com: { title: "Communication", text: "Réseaux sociaux, vidéo, événements et partenariats." }
        },
        paths: { tag: "Nous approcher", title: "Trois façons de nous approcher" },
        path1: {
          title: "Devenir membre actif",
          text: "Étudiant(e) en génie mécanique, électrique, logiciel, biomédical ou dans un domaine connexe : il y a peut-être une place pour toi dans l'équipe. Écris-nous pour en discuter.",
          button: "Nous écrire"
        },
        path2: {
          title: "Nous suivre",
          text: "Pas prêt(e) à t'engager tout de suite ? Suis nos avancées et nos coulisses.",
          instagram: "Instagram",
          linkedin: "LinkedIn"
        },
        path3: {
          title: "Nous visiter",
          text: "Le club t'ouvre ses portes au local D-2014 de l'ÉTS. Viens voir l'exosquelette de près et poser tes questions à l'équipe."
        },
        projectIdea: {
          title: "Tu veux porter un projet ?",
          text: "Une idée, ou l'envie de diriger un projet ? Écris-nous.",
          button: "Nous écrire"
        },
        finalCta: {
          tag: "Dernière étape",
          title: "Prêt(e) à te lancer&nbsp;?",
          text: "Une question avant de commencer ? Écris-nous.",
          button1: "Faire ma demande d'adhésion",
          button2: "J'ai une question"
        }
      }
    },

    en: {
      nav: { about: "About", project: "Projects", achievements: "Achievements", team: "Our Team", partners: "Partners", join: "Join Us" },
      footer: {
        tagline: "Biomedical student club — École de technologie supérieure, Montreal.",
        quicklinksTitle: "Quick Links",
        followTitle: "Get in Touch",
        address: "Room D-2014, ÉTS",
        rights: "All rights reserved."
      },
      home: {
        hero: {
          badge: "Podium at ACE · 2023 · 2024",
          title: "Restoring movement, <span class=\"accent\">one joint at a time.</span>",
          lead: "The only biomedical club at ÉTS. We design technologies to improve people's mobility and independence.",
          cta1: "Discover the project",
          cta2: "Join the club"
        },
        facts: {
          fact1Value: "Podium",
          fact1Label: "at the ACE international exoskeleton competition",
          fact2Value: "10 years",
          fact2Label: "of the club's existence",
          fact3Value: "Only club",
          fact3Label: "biomedical club at ÉTS"
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
          point3: "More affordable than the previous generation",
          button: "See the project"
        },
        results: {
          tag: "Achievements preview",
          title: "Our competition results",
          result1Title: "2026",
          result1Text: "2nd place, ACE (result to be confirmed)",
          result2Title: "2024",
          result2Text: "1st place, ACE",
          result3Title: "2023",
          result3Text: "3rd place, ACE",
          ambianceAlt: "The SynapsÉTS team at ACE 2026",
          ambianceCaption: "The SynapsÉTS team at ACE 2026",
          button: "All our achievements"
        },
        join: {
          tag: "Join us",
          title: "No need to be an expert",
          text: "Start with whichever step suits you.",
          path1Title: "Follow us",
          path1Button: "Instagram",
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
        placeholder: "Content coming soon."
      },
      achievements: {
        tag: "Achievements",
        title: "Our achievements",
        placeholder: "Content coming soon."
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
          emptyText: "Our first partners will be featured here. Be among the first to support SynapsÉTS!"
        }
      },
      join: {
        hero: {
          title: "Join SynapsÉTS",
          lead: "Whether you want to get actively involved, simply follow our progress, or come see us in person: there's a way to join the adventure that fits you."
        },
        steps: {
          tag: "How it works",
          title: "From curiosity to the team",
          step1: { title: "Come see us or write to us", text: "Stop by room D-2014 or send us an email to ask your questions." },
          step2: { title: "Apply for membership", text: "Membership goes through the ÉTS student clubs' official form." },
          step3: { title: "Complete the basic training", text: "The Régie des clubs étudiants' basic training for new members is mandatory for room access and involvement grants." },
          step4: { title: "Join your team", text: "You're welcomed into the team that matches your interests." },
          link: "See the club's page on the ÉTS website"
        },
        focus: {
          tag: "Our teams",
          title: "Find your place",
          lead: "Every discipline is welcome. Here's where we might need you.",
          mec: { title: "Mechanical", text: "Design and improvement of the exoskeleton's structure." },
          ele: { title: "Electrical", text: "Printed circuits, sensors, and embedded electronics." },
          log: { title: "Software", text: "Programming the exoskeleton's control, website, and documentation." },
          com: { title: "Communications", text: "Social media, video, events, and partnerships." }
        },
        paths: { tag: "Reach out", title: "Three ways to reach us" },
        path1: {
          title: "Become an active member",
          text: "Studying mechanical, electrical, software, biomedical engineering, or a related field: there might be a place for you on the team. Write to us to talk about it.",
          button: "Write to us"
        },
        path2: {
          title: "Follow us",
          text: "Not ready to commit just yet? Follow our progress and behind-the-scenes.",
          instagram: "Instagram",
          linkedin: "LinkedIn"
        },
        path3: {
          title: "Come visit",
          text: "The club opens its doors at ÉTS room D-2014. Come see the exoskeleton up close and ask the team your questions."
        },
        projectIdea: {
          title: "Want to lead a project?",
          text: "Got an idea, or want to lead a project? Write to us.",
          button: "Write to us"
        },
        finalCta: {
          tag: "Last step",
          title: "Ready to get started&nbsp;?",
          text: "Got a question before you begin? Write to us.",
          button1: "Apply for membership",
          button2: "I have a question"
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
