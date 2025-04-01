import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Hero_Heading: "Maps to connect and create",
      Hero_Intro:
        "<b>Grow your Community with our Collaborative Maps</b> that empower everyone to build decentralized real-life networks to co-create positive change - in your area and everywhere in the world.",
      Explainer_Heading: "What is Utopia and how does it work?",
      Usecases_Heading: "Explore the ways our maps are used",
      Usecases_Intro:
        "Different goals, different maps. We're all about sparking genuine connections and making a positive impact in the world. Here's the magic of Utopia:",
      Usecases_Question: "Do you already have your network?",
      Usecases_Button: "Get your Custom Map",
      Team_Heading: "Who's behind Utopia?",
      Team_Button: "Join us Building Utopia",
      Show_Map_Button: "Show Map",
      Future_Heading: "Your contribution decides what’s coming next",
      Future_Intro:
        "Utopia grows through all of us.  Our platform evolves organically – one feature at a time, with the community. With every donation, you cast your vote for a module and directly support its creation.",
      Future_Step1_Title: "Discover Modules",
      Future_Step1_Desc: "Learn about the planned features and their benefits.",
      Future_Step2_Title: "Support & Vote",
      Future_Step2_Desc:
        "Donate to your favorite module and cast your vote for it.",
      Future_Step3_Title: "Track Development",
      Future_Step3_Desc:  "See in real-time how many votes and funds each module has received.",
      Future_Button1: "Propose your Ideas",
      Future_Button2: "Join us Building Utopia",
    },
  },
  de: {
    translation: {
      Hero_Heading: "Utopia Community Mapping",
      Hero_Intro:
        "<b>Erschaffe deine Community mit unseren kollaborativen Karten</b>, die es dir ermöglichen, dezentrale, reale Netzwerke aufzubauen, um positive Veränderungen zu gestalten - in deiner Region und überall auf der Welt.",
      Explainer_Heading: "Was ist Utopia und wie funktioniert es?",
      Usecases_Heading: "So werden unsere Karten genutzt",
      Usecases_Intro:
        "Unterschiedliche Communities, unterschiedliche Karten. Unser Fokus liegt darauf, echte Verbindungen zu schaffen und einen positiven Wandel in der Welt zu bewirken.",
      Usecases_Question: "Du hast bereits eine Netzwerk?",
      Usecases_Button: "Starte deine Map",
      Team_Heading: "Wer baut Utopia?",
      Team_Button: "Werde Teil von Utopia  ",
      Show_Map_Button: "Besuche die Map",
      Future_Heading: "Deine Spende entscheidet, was als Nächstes entsteht",
      Future_Intro:
        "Utopia entsteht durch uns alle. Unsere Plattform entwickelt sich organisch weiter – Feature für Feature, gemeinsam mit der Community. Mit jeder Spende gibst du deine Stimme für ein Modul ab – und unterstützt direkt seine Umsetzung.",
      Future_Step1_Title: "Module entdecken",
      Future_Step1_Desc:
        "Informiere dich über die geplanten Features und deren Nutzen.",
      Future_Step2_Title: "Unterstützen & Voten",
      Future_Step2_Desc:
        "Spende für dein favorisiertes Modul und gib ihm damit deine Stimme.",
      Future_Step3_Title: "Entwicklung verfolgen",
      Future_Step3_Desc:
        "Sieh in Echtzeit, wie viele Stimmen und Mittel jedes Modul erhalten hat.",
      Future_Button1: "Idee vorschlagen",
      Future_Button2: "Helfe bei der Umsetzung",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
